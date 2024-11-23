import { useAppCtx } from "~/context/AppCtx";
import SobreCard from "./cards/sobreCard";

export default function SobreList() {
  const { sobres } = useAppCtx();

  return (
    <div className="m-5">
      <h1 className="text-3xl mb-5 font-semibold">Sobres Actuales</h1>
      <div className="flex flex-col gap-5">
        {sobres.map((sobre, index) => {
          return (
            <SobreCard
              title={sobre.title}
              text={sobre.text}
              id={sobre.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
