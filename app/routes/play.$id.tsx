import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import App from "~/components/app";

export function loader({ params }: LoaderFunctionArgs) {
  return { sobreId: params.id }
}

export default function Play() {
  const sobreId = useLoaderData<typeof loader>();
  
  return (
    <App sobreId={Number(sobreId.sobreId)} />
  )
}