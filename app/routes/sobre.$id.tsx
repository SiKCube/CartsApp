import { LoaderFunctionArgs } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import AddCartForm from "~/components/addCartForm";
import InfoCard from "~/components/cards/infoCard";
import CartList from "~/components/cartList";
import { Button } from "~/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useAppCtx } from "~/context/AppCtx"

export function loader({ params }: LoaderFunctionArgs) {
  return { sobreId: params.id }
}

export default function Sobre() {
  const sobreId = useLoaderData<typeof loader>();
  const { sobres } = useAppCtx()

  if (sobreId?.sobreId && sobres.find((sobre) => sobre.id === Number(sobreId.sobreId))) {
    return (
      <div className="m-5">
        <Tabs defaultValue="detalles" className="my-5">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="detalles">Detalles</TabsTrigger>
            <TabsTrigger value="new">Nueva carta</TabsTrigger>
            <TabsTrigger value="cartas">Cartas</TabsTrigger>
          </TabsList>
          <TabsContent value="detalles">
            <InfoCard
              title={sobres.find((sobre) => sobre.id == Number(sobreId?.sobreId))?.title}
              desc={sobres.find((sobre) => sobre.id == Number(sobreId?.sobreId))?.text}
            />
          </TabsContent>
          <TabsContent value="new">
            <AddCartForm sobreId={Number(sobreId.sobreId)} />
          </TabsContent>
          <TabsContent value="cartas">
            <CartList id={Number(sobreId.sobreId)} />
          </TabsContent>
        </Tabs>
        <Link to={`/play/${sobreId.sobreId}`} className="w-full">
          <Button className="w-full">Jugar</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Card className="m-5">
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>No existe el sobre</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link to={"/"}>
            <Button>Volver al inicio</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}