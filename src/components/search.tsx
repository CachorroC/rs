import searchbar from "##/searchbar.module.css";
import { getBaseUrl } from "#@/lib/getBaseUrl";
import layout from "##/layout.module.css";
import { notFound } from "next/navigation";
import Card from "#@/components/card";
import { intProceso } from "../app/Procesos/procesos";

export async function fetchProceso() {
  const res = await fetch(`${getBaseUrl()}/api/procesos`);

  if (!res.ok) {
    notFound();
  }
}

export async function SearchItems({ search }: { search: string }) {
  const rows: any[] = [];

  const procesos = (await fetch(`${getBaseUrl()}/api/procesos`).then((res) =>
    res.json()
  )) as intProceso[];

  procesos.forEach((proceso, index, array) => {
    if (
      proceso.sujetosProcesales.toLowerCase().indexOf(search.toLowerCase()) ===
      -1
    ) {
      return;
    }

    rows.push(
      <Card
        key={index}
        index={index}
        array={array}
        content={proceso.fechaUltimaActuacion}
        href={`/Procesos/${proceso.llaveProceso}`}
        title={proceso.sujetosProcesales}
      />
    );
  });

  return (
    <>
      <div className={searchbar.itemscontainer}>{rows}</div>
    </>
  );
}

function ItemSkeleton() {
  return (
    <div className={layout.card}>
      <h1 className={searchbar.title}>{"Deudor"}</h1>
      <span className="material-symbols-outlined">loading</span>
      <i>
        <strong>{"dia/mes/año"}</strong>
      </i>
    </div>
  );
}

export function SearchItemsEskeleton() {
  return (
    <div className="space-y-6 pb-[5px]">
      <div className="grid grid-cols-4 gap-6">
        <ItemSkeleton key={1} />
        <ItemSkeleton key={2} />
        <ItemSkeleton key={3} />
        <ItemSkeleton key={4} />
      </div>
    </div>
  );
}
