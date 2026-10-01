"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/course-details" },
  { label: "Creators", href: "/creator" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <nav className="site-container mx-auto flex h-[100px] items-center justify-between px-6 md:h-[114px]">
        <Link href="/" aria-label="ByteSpace home" className="flex items-center  gap-[10px]">
          <Image src="/images/logo.svg" alt="" width={29} height={32} priority />
          <span className="flex h-[30px] pt-2 w-[134px] items-center font-clash-display text-[24px] font-bold leading-[1] tracking-[0px]">
            ByteSpace
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <Link href={l.href} className={`label-m transition-opacity hover:opacity-100 ${i === 0 ? "opacity-100" : "opacity-80"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login" className="label-m opacity-80 hover:opacity-100">Sign In</Link>
          <Link href="/signup" className="label-m opacity-80 hover:opacity-100">Join Us</Link>
          <button aria-label="Shopping cart" className="relative h-6 w-6 hover:opacity-80">
            <Image
              src="/images/shopping-bag.svg"
              alt=""
              width={16}
              height={20}
              className="absolute left-1 top-0.5"
            />
          </button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-6 rounded-2xl bg-primary-950 p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {[...links, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/signup" }].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="label-l" onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
