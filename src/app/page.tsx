import Image from "next/image";

import { Poiret_One } from "next/font/google";

import layout from "#@/styles/scss/layout.module.scss";
import CardSkeleton from "../components/card-skeleton";
import NavButton from "#@/app/context-click-counter";

const poiret = Poiret_One( {
  weight: "400",
  subsets: [
    "latin", "latin-ext"
  ],
  display: "swap",
} );

export default async function Page () {
  return (
    <div className={ layout.body }>
      <h1>Bienvenido a <strong> <strong> R&S </strong> consultoría jurídica </strong></h1>
      <p>Some enterprice cute little slogan shit.</p>
      <NavButton />
    </div>
  );
}
