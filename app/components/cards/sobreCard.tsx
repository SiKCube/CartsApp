import { useAppCtx } from "~/context/AppCtx";
import { Button } from "../ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "@remix-run/react";

interface Props {
  title: string
  text: string
  id: number
}

export default function SobreCard({ title, text, id }: Props) {
  const { sobresDishpatch } = useAppCtx()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-evenly gap-5">
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={() => sobresDishpatch({ type: "remove", sobreId: id })}
        >
          Eliminar
        </Button>
        <Link to={`/sobre/${id}`} className="w-full">
          <Button className="w-full">
            Ver
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}