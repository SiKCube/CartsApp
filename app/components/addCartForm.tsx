import { FormEvent, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAppCtx } from "~/context/AppCtx";
import { useToast } from "~/hooks/use-toast";

export default function AddCartForm({ sobreId }: { sobreId: number }) {
  const [inputName, setInputName] = useState<string>('')
  const fileInput = useRef<HTMLInputElement>(null)

  const { toast } = useToast()

  const { cartsDishpatch } = useAppCtx()

  const createCart = (e: FormEvent) => {
    e.preventDefault()

    if (fileInput.current) {
      const file = fileInput.current.files?.item(0)
      const fileReader = new FileReader()

      fileReader.onload = (e) => {
        cartsDishpatch({
          type: "add",
          payload: {
            id: Date.now(),
            title: inputName,
            text: e.target!.result!.toString(),
            sobreId: sobreId
          }
        })
      }
      fileReader.readAsDataURL(file!)

      toast({
        title: `"${inputName}" creada`,
        description: "Carta creada con exito"
      })

      setInputName("")
      fileInput.current.value = ''
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear carta</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={createCart} className="flex flex-col gap-5">
          <Input
            placeholder="Nombre del carta"
            type="text"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            required
          />
          <Input
            placeholder="Imagen"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/webp"
            ref={fileInput}
            required
          />
          <Button type="submit">Crear</Button>
        </form>
      </CardContent>
    </Card>
  )
}