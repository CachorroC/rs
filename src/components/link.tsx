"use client";

import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";



import navbar from "##/navbar.module.css";
import { useNavigator } from "#@/app/navigator-context";
import type { Route } from 'next';

export default function LinkCard<X extends string>({
  icon,
  name,
  href,
}: {
  icon: string;
  name: string;
  href: Route<X> | URL;
}) {
  const segment = useSelectedLayoutSegment();
  const [
    isOpen, setIsOpen
  ] = useNavigator();

  const isActive = href === segment;

  return (
    <Link
      onClick={() => {
        setIsOpen(false);
      }}
      href={href}
      className={navbar.link}
    >
      {icon && (
        <span className="material-symbols-outlined">
          {isActive
            ? "heart"
            : icon}
        </span>
      )}
      <p className={navbar.title}>{name}</p>
    </Link>
  );
}
