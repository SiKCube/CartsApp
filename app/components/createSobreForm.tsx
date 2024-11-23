import { FormEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useAppCtx } from "~/context/AppCtx";
import { useToast } from "~/hooks/use-toast";

export default function CreateSobreForm() {
  const [inputName, setInputName] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");

  const { toast } = useToast()

  const { sobresDishpatch } = useAppCtx();

  const createSobre = (e: FormEvent) => {
    e.preventDefault();

    sobresDishpatch({
      type: "add",
      payload: {
        id: Date.now(),
        title: inputName,
        text: inputDesc,
      },
    });

    toast({
      title: `"${inputName}" creada`,
      description: "Sobre creado con exito"
    })

    setInputName("");
    setInputDesc("");
  };

  return (
    <Card className="m-5">
      <CardHeader>
        <CardTitle>Crea un sobre!</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={createSobre} className="flex flex-col gap-5">
          <Input
            placeholder="Nombre del sobre"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            required
          />
          <Textarea
            placeholder="Descripcion del sobre"
            onChange={(e) => setInputDesc(e.target.value)}
            value={inputDesc}
            required
          />
          <Button type="submit">Crear</Button>
        </form>
      </CardContent>
    </Card>
  );
}
