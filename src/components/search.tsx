import searchbar from "##/searchbar.module.css";
import { getBaseUrl } from "#@/lib/getBaseUrl";
import layout from "##/layout.module.css";
import { notFound } from "next/navigation";
import Card from "#@/components/card";
import { intProceso } from "../app/Procesos/procesos";
import { Suspense } from "react";
import CardSkeleton from "./card-skeleton";



export async function SearchItems ( { search }: { search: string; } ) {
  const rows: any[] = [];

  const procesos = (
    await fetch( `${ getBaseUrl() }/Procesos/api` ).then(
      ( res ) =>
        res.json()
    )
  ) as intProceso[];

  procesos.forEach(
    ( proceso, index, array ) => {
      const locateDemandado = proceso.sujetosProcesales.search( /(demandado|causante)+:(?:\s*?|'\s*?')/gi );
      const extractDemandado = proceso.sujetosProcesales.slice( locateDemandado + 10 ).toLocaleLowerCase();
      const trimDemandado = extractDemandado.replace( /^\s+|\s+$/gm,
        '' );
      const splitDemandado = trimDemandado.split( " " );
      const splitDemandadotoUnify = splitDemandado.map(
        ( noa ) => noa.replace( /^./,
          str => str.toUpperCase() )
      );
      const unifyDemandado = splitDemandadotoUnify.join( " " );
      const hasActuaciones = () => {
        if ( locateDemandado === -1 ) {
          return true;
        }
        return false;
      };
      const isPrivado = () => {
        if ( proceso.sujetosProcesales.match( /-+.*\[.*\].*-+/gi ) ) {
          return true;
        }
        return false;

      };
      const hasContent = () => {
        if ( proceso.fechaUltimaActuacion === null ) {
          return "no hay contenido";
        }
        if ( proceso.fechaUltimaActuacion === undefined ) {
          return "no se ha definido el contenido";
        }
        return proceso.fechaUltimaActuacion;
      };
      const titleFixed = () => {
        if ( hasActuaciones() ) {
          return proceso.sujetosProcesales;
        } if ( isPrivado() ) {
          return '';
        }
        return unifyDemandado;
      };
      if (
        proceso.sujetosProcesales.toLowerCase().indexOf( search.toLowerCase() ) ===
        -1
      ) {
        return;
      }

      rows.push(
        <Card
          key={ index }
          index={ index }
          array={ array }
          content={ hasContent() }
          href={ `/Procesos?${ proceso.llaveProceso }` }
          title={ titleFixed() } ultimaActDate={ hasContent() } />
      );
    }
  );

  return (
    <Suspense fallback={
      <div className={ layout.sidenav }>
        <CardSkeleton key={ 1 } />
        <CardSkeleton key={ 2 } />
        <CardSkeleton key={ 3 } />
        <CardSkeleton key={ 4 } />
        <CardSkeleton key={ 5 } />
        <CardSkeleton key={ 6 } />
        <CardSkeleton key={ 7 } />
        <CardSkeleton key={ 8 } />
        <CardSkeleton key={ 9 } />
        <CardSkeleton key={ 10 } />

      </div>
    }>
      <div className={ layout.sidenav }>{ rows }</div>
    </Suspense>
  )

    ;
}

