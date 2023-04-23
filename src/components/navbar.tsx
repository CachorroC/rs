"use client";

import styles from "##/navbar.module.css";

import React, { ReactNode, useState } from "react";

import Link from "next/link";

import { Drawer } from "@mui/material";

import { Poiret_One } from "next/font/google";

import "material-symbols";

import NavItem from "#@/components/link";

import layout from "#s/layout.module.scss";
import { Search } from "../app/context-input-search";
import { getProcesosOwn } from "../app/Procesos/api/getProcesos";

const poiret = Poiret_One({
  weight: "400",
  subsets: [
    "latin", "latin-ext"
  ],
  display: "swap",
});

export default function Navbar({ children }: { children: ReactNode }) {
  const [
    isOpen, setIsOpen
  ] = useState(false);

  const close = () => setIsOpen(false);

  const drawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const drawer = (
    <div className={styles.drawer} onClick={close}>
      {/* Procesos  */}
    </div>
  );

  return (
    <div className={layout.header}>
      <Link href="/" className={styles.button}>
        <span className="material-symbols-rounded">cabin</span>
      </Link>
      <button type="button" className={styles.button} onClick={drawerToggle}>
        {isOpen
          ? (
            <span className="material-symbols-rounded">pets</span>
          )
          : (
            <span className="material-symbols-rounded">star</span>
          )}
      </button>
      {children}

      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={drawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
