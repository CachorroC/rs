import { Poiret_One } from "next/font/google";

export const poiret = Poiret_One({
  weight: "400",
  subsets: [
    "latin", "latin-ext"
  ],
  display: "swap",
});

export const Title = ({ title }: { title: string }) => (
  <h1 className={poiret.className}>{title}</h1>
);
