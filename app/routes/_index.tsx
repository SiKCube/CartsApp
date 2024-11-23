import type { MetaFunction } from "@remix-run/node";
import CreateSobreForm from "~/components/createSobreForm";
import SobreList from "~/components/sobreList";

export const meta: MetaFunction = () => {
  return [
    { title: "Carts App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
        <CreateSobreForm />
        <SobreList />
    </>
  );
}
