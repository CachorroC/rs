"use client";

import React from "react";
import form from "#@/styles/css/searchbar.module.css";
import { intProceso } from "#@/app/Procesos/procesos";
import navbar from "#@/styles/css/navbar.module.css";
import Link from "next/link";
import { poiret } from "#@/components/typeface";
import layout from "#@/styles/scss/layout.module.scss";

import Card from "#@/components/card";
import { useSearch } from "#@/app/search-context";
import { useNavigator } from "#@/app/navigator-context";
import { Suspense } from 'react';
import LinkCardSkeleton from "#@/components/link-skeleton";
import type { Route } from 'next';
import LinkCard from "#@/components/link";

const SearchBar = () => {
  const [
    search, setSearch
  ] = useSearch();
  const [
    isOpen, setIsOpen
  ] = useNavigator();

  return (
    <form className={ layout.SearchBar }>
      <input
        type="text"
        className={ form.input }
        value={ search }
        placeholder="Search..."
        onBeforeInput={ () => {
          setIsOpen( true );
        } }
        onChange={ ( input ) => {
          setSearch( input.target.value );
        } }
      ></input>
    </form>
  );
};

export const Search = ( { procesos }: { procesos: intProceso[]; } ) => {
  const [ search ] = useSearch();
  const rows: any[] = [];
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

      if (
        proceso.sujetosProcesales.toLowerCase().indexOf( search.toLowerCase() ) ===
        -1
      ) {
        return;
      }
      isPrivado() === false && rows.push(
        <LinkCard
          icon={ hasContent()
            ? hasContent()
            : 'switch_access_shortcut_add'
          }
          name={ proceso.sujetosProcesales }
          href={ ( "/Procesos/" + proceso.llaveProceso ) as Route }
        />
      );
    } );
  return (
    <Suspense fallback={ <div className={ layout.sidenav }>
      <LinkCardSkeleton key={ 1 } />
      <LinkCardSkeleton key={ 2 } />
      <LinkCardSkeleton key={ 3 } />
      <LinkCardSkeleton key={ 4 } />
      <LinkCardSkeleton key={ 5 } />
      <LinkCardSkeleton key={ 6 } />
      <LinkCardSkeleton key={ 7 } />
    </div> }>
      <div className={ layout.procesossearchbox }>{ rows }</div>
    </Suspense>
  );
};
export default SearchBar;
