import { getProcesosOwn } from "#@/app/Procesos/api/getProcesos";
import layout from "##/layout.module.css";
import { ReactNode } from "react";
import { Search } from "#@/app/context-input-search";
export default async function Layout ( { children }: { children: ReactNode; } ) {
  const procesos = await getProcesosOwn();

  return (
    <div className={ layout.body }>
      { children }
      <Search procesos={ procesos } />
    </div>
  );
}
