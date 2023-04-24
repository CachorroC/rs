import typeface from "##/typeface.module.css";

import Link from "next/link";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import box from "##/box.module.css";

import { poiret } from "./typeface";

import card from "##/card.module.css";

import type { Route } from 'next';
import { intActuacion, intProceso } from "../app/Procesos/procesos";

export default function Card<T extends string> ( {
  index,
  array,
  content,
  title,
  href,
  ultimaActDate,
  icon,
}: {
  index: number;
  array: string[] | intActuacion[] | intProceso[] | any[];
  content: string | null | undefined;
  title: string;
  href?: Route<T> | URL;
  icon?: string;
  ultimaActDate: string;
} ) {
  const locateDemandado = title.search( /(demandado|causante)+:(?:\s*?|'\s*?')/gi );
  const extractDemandado = title.slice( locateDemandado + 10 ).toLocaleLowerCase();
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
    if ( title.match( /-+.*\[.*\].*-+/gi ) ) {
      return true;
    }
    return false;

  };
  const hasContent = () => {
    if ( content === null ) {
      return "no hay contenido";
    }
    if ( content === undefined ) {
      return "no se ha definido el contenido";
    }

    return content;
  };
  const titleFixed = () => {
    if ( hasActuaciones() ) {
      return title;
    } if ( isPrivado() ) {
      return '';
    }
    return unifyDemandado;
  };
  return (
    <div className={ card.layout }>
      <h2 className={ card.title }>{ titleFixed() }</h2>
      <p className={ card.content }>{ hasContent() }</p>
      <sub className={ card.sub }>{ `${ index } de ${ array.length }` }</sub>
      <sub className={ card.date }>{ ultimaActDate }</sub>

      { href
        ? (
          <Link href={ href } className={ card.link }>
            <span className="material-symbols-outlined">
              { icon
                ? icon
                : "star" }
            </span>
          </Link>
        )
        : (
          <hr className={ card.dummytxt }></hr>
        ) }
    </div>
  );
}
