"use client";

import React from "react";
import form from "#@/styles/css/searchbar.module.css";
import { intProceso } from "#@/app/Procesos/procesos";
import navbar from "#@/styles/css/navbar.module.css";
import Link from "next/link";
import { poiret } from "#@/components/typeface";
import layout from "#s/layout.module.scss";

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
  procesos.forEach( ( proceso, index, array ) => {
    if (
      proceso.sujetosProcesales.toLowerCase().indexOf( search.toLowerCase() ) ===
      -1
    ) {
      return;
    }
    rows.push(
      <LinkCard
        key={ index }
        icon='switch_access_shortcut_add'
        name={ proceso.sujetosProcesales }
        href={ ( "/Procesos/" + proceso.llaveProceso ) as Route }
      />
    );
  } );
  return (
    <Suspense fallback={ <div className={ layout.procesossearchbox }>
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
