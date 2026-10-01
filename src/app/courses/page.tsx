"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const grid = "rgba(79,157,255,0.35)";
const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];
const baseCourses = [
  { title: "Learn Figma from Basic", image: "/images/course-figma.png" },
  { title: "Build Digital Asset", image: "/images/course-digital-assets.png" },
  { title: "the Power of Big Data", image: "/images/course-big-data.png" },
  { title: "Balancing Productivity and SelfCare", image: "/images/course-productivity.png" },
  { title: "Mastering Money Management", image: "/images/course-money-management.png" },
  { title: "From Idea to Startup Success", image: "/images/course-startup.png" },
];
const allCourses = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  ...baseCourses[index % baseCourses.length],
  category: categories[(index % (categories.length - 1)) + 1],
  featured: index % 2 === 0,
}));
const avatars = [1, 2, 3, 4].map((n) => `/images/Ellipse%20(${n}).png`);

function Icon({ d, className = "size-5" }: { d: string; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}><path d={d} /></svg>;
}

function CourseCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="rounded-[24px] border border-neutral-200 bg-white p-4">
      <Link href="/course-details" className="block">
        <div className="relative aspect-[341/195] overflow-hidden rounded-2xl bg-neutral-100">
          <Image src={image} alt={title} fill sizes="(min-width: 1024px) 341px, 45vw" className="object-cover" />
          <div className="absolute inset-x-3 bottom-3 flex justify-between gap-1">
            {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((item) => <span key={item} className="body-xs whitespace-nowrap rounded-full bg-white/60 px-3 py-1 text-neutral-600 backdrop-blur-sm">{item}</span>)}
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3"><h2 className="heading-xs truncate">{title}</h2><span className="body-m shrink-0 text-neutral-500">4.5 ★</span></div>
        <p className="body-xs text-neutral-500">by <span className="text-primary-600">purepearl studio</span></p>
      </Link>
      <div className="mt-4 flex items-center gap-3"><span className="label-s flex h-8 items-center gap-2 rounded-full bg-neutral-50 px-3 text-neutral-600"><Icon className="size-4" d="M6 20v-6M12 20V8M18 20V4" />Beginner</span><div className="flex items-center">{avatars.map((src, index) => <Image key={src} src={src} alt="" width={32} height={32} className={`size-8 rounded-full border-2 border-white object-cover ${index > 0 ? "-ml-2" : ""}`} />)}<span className="label-xs -ml-2 flex size-8 items-center justify-center rounded-full border-2 border-white bg-secondary-500 text-neutral-950">26+</span></div></div>
      <p className="mt-4 font-heading text-xl font-semibold leading-none text-primary-600">$25<span className="body-xs ml-0.5 font-normal text-neutral-600">/lifetime</span></p>
    </article>
  );
}

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Featured");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => { const search = query.trim().toLowerCase(); return allCourses.filter((course) => (category === "Featured" ? course.featured : course.category === category) && (!search || course.title.toLowerCase().includes(search))); }, [query, category]);
  const pageSize = 18;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-primary-600 pb-12 pt-[100px] text-white md:pt-[114px] lg:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`, backgroundSize: "120px 120px" }} />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 pt-6 text-center sm:px-8 lg:pt-10"><h1 className="font-heading text-[32px] font-semibold sm:text-[44px]">Find Your Next Course</h1><form role="search" onSubmit={(event) => event.preventDefault()} className="mt-6 flex w-full max-w-[665px] flex-col gap-3 sm:flex-row"><label className="relative flex-1"><span className="sr-only">Search courses</span><Icon className="pointer-events-none absolute left-5 top-1/2 size-[17.49px] -translate-y-1/2 text-[#82868E]" d="M21 21l-4.3-4.3M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" /><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search" className="body-m h-12 w-full appearance-none rounded-full bg-white pl-12 pr-5 text-neutral-950 outline-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none" /></label><select value="Courses" aria-label="Search in" className="label-m h-12 cursor-pointer rounded-full bg-secondary-500 px-6 text-neutral-950 outline-none"><option>Courses</option></select></form></div>
      </section>
      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-8 lg:px-[120px] lg:pb-24 lg:pt-12"><div className="flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-4">{["Filter", "Level", "Category"].map((label) => <button key={label} type="button" className="label-m flex h-12 items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 text-neutral-950"><Icon d="M22 3H2l8 9.46V19l4 2v-8.54z" />{label}</button>)}</div><button type="button" className="label-m flex h-12 items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 text-neutral-950"><Icon d="M3 6h18M3 12h12M3 18h6" />Most relevant</button></div><div className="mt-6 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => { setCategory(item); setPage(1); }} className={`label-s h-10 shrink-0 rounded-full px-5 ${category === item ? "bg-secondary-500 text-neutral-950" : "bg-neutral-50 text-neutral-700"}`}>{item}</button>)}</div>{visible.length > 0 ? <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">{visible.map((course) => <CourseCard key={course.id} {...course} />)}</div> : <p className="body-l mt-16 text-center text-neutral-500">No courses found. Try a different search or category.</p>}<nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-4"><button type="button" aria-label="Previous page" disabled={current === 1} onClick={() => setPage(current - 1)} className="flex size-11 items-center justify-center rounded-full border border-neutral-200 disabled:opacity-40"><Icon d="M15 18l-6-6 6-6" /></button>{Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1).map((number) => <button key={number} type="button" onClick={() => setPage(number)} className={`label-l flex size-10 items-center justify-center rounded-full ${current === number ? "bg-secondary-500" : ""}`}>{number}</button>)}<button type="button" aria-label="Next page" disabled={current === totalPages} onClick={() => setPage(current + 1)} className="flex size-11 items-center justify-center rounded-full border border-neutral-200 disabled:opacity-40"><Icon d="M9 18l6-6-6-6" /></button></nav></section>
    </main>
  );
}
