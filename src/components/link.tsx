"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import navbar from "#@/styles/css/navbar.module.css";
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
  if ( locateDemandado === -1 ) throw new Error("missing demandado");
  const extractDemandado = name.slice( locateDemandado + 10 ).toLocaleLowerCase();
  const trimDemandado = extractDemandado.replace( /^\s+|\s+$/gm,
    '' );
  const splitDemandado = trimDemandado.split( " " );
  const splitDemandadotoUnify = splitDemandado.map(
    ( nombreOapellido, index ) => {
      if ( index >= 5 ) return;
      console.log( nombreOapellido );
      if ( nombreOapellido === '|' ) return;
      if ( nombreOapellido.includes( 's.a.s' ) ) return;
      if ( nombreOapellido.includes( '(emplazado)' ) ) return;
      return nombreOapellido.replace( /^./,
        str => str.toUpperCase() );
    }
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
