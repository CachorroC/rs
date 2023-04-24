"use client";

import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";



import navbar from "##/navbar.module.css";
import { useNavigator } from "#@/app/navigator-context";
import type { Route } from 'next';

export default function LinkCard<T extends string> ( {
  icon,
  name,
  href,
}: {
  icon: string;
  name: string;
  href: Route<T> | URL;
} ) {

  const locateDemandado = name.search( /(demandado|causante)+:(?:\s*?|'\s*?')/gi );
  const extractDemandado = name.slice( locateDemandado + 10 ).toLocaleLowerCase();
  const trimDemandado = extractDemandado.replace( /^\s+|\s+$/gm,
    '' );
  const splitDemandado = trimDemandado.split( " " );
  const splitDemandadotoUnify = splitDemandado.map(
    ( noa ) => noa.replace( /^./,
      str => str.toUpperCase() )
  );
  const unifyDemandado = splitDemandadotoUnify.join( " " );
  const isPrivado = () => {
    if ( name.match( /-+.*\[.*\].*-+/gi ) ) {
      return true;
    }
    return false;

  };
  const segment = useSelectedLayoutSegment();
  const [
    isOpen, setIsOpen
  ] = useNavigator();

  const isActive = href === segment;

  return (
    <Link
      onClick={ () => {
        setIsOpen( false );
      } }
      href={ href }
      className={ navbar.link }
    >
      { icon && (
        <span className="material-symbols-outlined">
          { isActive
            ? "heart"
            : icon }
        </span>
      ) }
      <p className={ navbar.name }>{ isPrivado()
        ? ''
        : unifyDemandado }</p>
    </Link>
  );
}
