"use client";

import { useNavigator } from "#@/app/navigator-context";

import React, { Suspense } from "react";

import box from "##/box.module.css";

import layout from "#s/layout.module.scss";

import { useSearch } from "#@/app/search-context";

import Link from "next/link";

import Card from "#@/components/card";

import { intProceso } from "#@/app/Procesos/procesos";
import CardSkeleton from "#@/components/card-skeleton";
import { notFound } from "next/navigation";
import LinkCard from "../components/link";
const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Junio",
  "Julio",
  "Ago",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const NavButton = () => {
  const [
    isOpen, setIsOpen
  ] = useNavigator();

  if ( isOpen ) {
    return (
      <button onClick={ () => setIsOpen( false ) } className={ layout.NavButton }>
        <span className="material-symbols-outlined">close</span>
      </button>
    );
  }

  return (
    <button onClick={ () => setIsOpen( true ) } className={ layout.NavButton }>
      <span className="material-symbols-outlined">menu</span>
    </button>
  );
};

export const Nav = ( { procesos }: { procesos: intProceso[]; } ) => {
  const [
    isOpen, setIsOpen
  ] = useNavigator();

  const [ search ] = useSearch();

  const rows: any[] = [];

  procesos.forEach( ( proceso, index, array ) => {
    const ultimAct = new Date(
      proceso.fechaUltimaActuacion
        ? proceso.fechaUltimaActuacion
        : ""
    );
    const month = months[ ultimAct.getMonth() ];
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

    if (
      proceso.sujetosProcesales.toLowerCase().indexOf( search.toLowerCase() ) ===
      -1
    ) {
      return;
    }
    rows.push(
      <LinkCard
        name={ unifyDemandado }
        href={ `/Procesos/${ proceso.llaveProceso }` } icon={ "book" } />
    );
  } );
  if ( isOpen ) {
    return <div className={ layout.sidenav }>{ rows }</div>;
  }
  if ( !isOpen ) {
    return (
      <div className={ layout.sidenav }>
        <button
          className={ layout.button }
          onClick={
            () => {
              setIsOpen( true );
            }
          }
        >
          <span className="material-symbols-outlined">heart_plus</span>
        </button>

        <h1>
          Bienvenido a <strong>R&S Consultoría Jurídica S.A.S</strong>
        </h1>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={ layout.sidenav }>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      }
    >
      <div className={ layout.sidenav }>{ rows }</div>
    </Suspense>
  );
};

export default NavButton;
