import { HomeIcon } from "lucide-react";

import React from "react";
import LinkTo from "./LinkTo";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav className="bg-primary fixed z-10 w-full h-14">
        <li className="flex items-center px-5 font-semibold size-full">
          <LinkTo text="Inicio" icon={<HomeIcon className="size-4" />} />
        </li>
      </nav>
      <div className="h-14" />
      <section>
        {children}
      </section>
    </main>
  )
}