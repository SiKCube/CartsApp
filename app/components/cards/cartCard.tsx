import { useAppCtx } from "~/context/AppCtx";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title: string
  text: string
  id: number
}

export default function CartCard({ title, text, id }: Props) {
  const { cartsDishpatch } = useAppCtx()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <img src={text} alt={title} className="size-1/2" />
      </CardContent>
      <CardFooter>
        <Button
          variant={"destructive"}
          onClick={() => cartsDishpatch({ type: "remove", cartId: id })}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  )
}