import Image from "next/image";

import { Poiret_One } from "next/font/google";

import layout from "#s/layout.module.scss";
import CardSkeleton from "../components/card-skeleton";

const poiret = Poiret_One({
  weight: "400",
  subsets: [
    "latin", "latin-ext"
  ],
  display: "swap",
});

export default async function Page() {
  return (
    <div className={layout.body}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
