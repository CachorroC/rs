"use client";

import { useParams } from "next/navigation";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const SearchContext = createContext<
  [string, Dispatch<SetStateAction<string>>] | null
>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const params = useParams();

  const [
    search, setSearch
  ] = useState("");

  const [
    hasUltimaActuacion, setUltimaActuacion
  ] = useState(false);

  return (
    <SearchContext.Provider value={[
      search, setSearch
    ]}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (context === null) {
    throw new Error(" no sirvio");
  }

  return context;
}
