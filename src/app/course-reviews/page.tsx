"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const grid = "rgba(79,157,255,0.35)";
const ratingBreakdown = [
  { stars: 5, count: 720, pct: 92 },
  { stars: 4, count: 120, pct: 35 },
  { stars: 3, count: 21, pct: 8 },
  { stars: 2, count: 12, pct: 4 },
  { stars: 1, count: 16, pct: 5 },
];
const reviews = [
  { name: "PurePearl Studio", role: "UI/UX Designer", avatar: "/images/Frame.png", rating: 5, text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { name: "Albert Flores", role: "UI/UX Designer", avatar: "/images/Ellipse%20(1).png", rating: 5, text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience." },
  { name: "Cody Fisher", role: "UI/UX Designer", avatar: "/images/Ellipse%20(4).png", rating: 4, text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills." },
  { name: "Brooklyn Simmons", role: "UI/UX Designer", avatar: "/images/Ellipse%20(5).png", rating: 5, text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The engaging content kept me motivated throughout." },
];

function Stars({ value, small = false }: { value: number; small?: boolean }) {
  return <span className="flex gap-1" aria-label={`${value} out of 5 stars`}>{[1, 2, 3, 4, 5].map((star) => <svg key={star} viewBox="0 0 24 24" aria-hidden="true" className={`${small ? "size-4" : "size-5"} ${star <= value ? "fill-neutral-700" : "fill-neutral-200"}`}><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-6.9-1z" /></svg>)}</span>;
}

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true"><path d={d} /></svg>;
}

const tabs = [
  { label: "About", href: "/course-details" },
  { label: "Lesson", href: "/course-lessons" },
  { label: "Reviews", href: "/course-reviews" },
];

export default function CourseReviewsPage() {
  const [filter, setFilter] = useState<number | "all">("all");
  const visible = filter === "all" ? reviews : reviews.filter((review) => review.rating === filter);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-primary-600 pb-12 pt-[100px] text-white md:pt-[114px] lg:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`, backgroundSize: "120px 120px" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
          <div className="flex flex-col gap-4 pt-6 lg:pt-10 sm:flex-row sm:items-start sm:justify-between">
            <div><h1 className="font-heading text-[28px] font-semibold leading-[1.2] sm:text-[36px] lg:text-[44px]">Build Digital Asset: A Comprehensive Guide</h1><p className="mt-1 font-heading text-lg font-semibold">Unlock the Power of Digital Creation with Expert Guidance</p><p className="body-m mt-5">by <span className="text-secondary-500">purepearl studio</span></p></div>
            <button type="button" className="label-m flex h-10 items-center gap-2 rounded-full bg-secondary-500 px-5 text-neutral-950"><Icon d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />Share</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3"><span className="label-m rounded-full bg-white px-5 py-2 text-neutral-950">Intermediate</span><span className="label-m rounded-full bg-white px-5 py-2 text-neutral-950">★ 4.8 (172 reviews)</span><span className="label-m rounded-full bg-white px-5 py-2 text-neutral-950">199 Students</span></div>
          <div className="mt-10 grid lg:grid-cols-[1fr_412px] lg:gap-16"><div className="relative aspect-video overflow-hidden rounded-[24px] bg-[#443131] lg:aspect-auto lg:h-[479px]"><Image src="/images/Frame%20(6).png" alt="Course preview" fill sizes="(min-width: 1024px) 724px, 100vw" priority className="object-cover" /></div><div className="hidden lg:block" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-8 lg:px-[120px] lg:pt-14"><div className="grid items-start gap-10 lg:grid-cols-[1fr_412px] lg:gap-16"><div className="min-w-0"><nav aria-label="Course sections" className="flex gap-3">{tabs.map((tab) => <Link key={tab.label} href={tab.href} className={`label-m flex h-10 items-center rounded-full px-5 ${tab.label === "Reviews" ? "bg-secondary-500 text-neutral-950" : "bg-neutral-50 text-neutral-700"}`}>{tab.label}</Link>)}</nav>
        <div className="mt-10"><h2 className="heading-xs">What Learners Are Saying</h2><p className="body-m mt-4 text-neutral-600">Discover what our learners have to say about their experience with Build Digital Assets: A Comprehensive Guide. Read reviews and ratings from individuals who have mastered digital asset creation.</p>
          <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-neutral-200 p-5 sm:flex-row sm:items-center sm:gap-8"><div className="flex h-[120px] w-full shrink-0 flex-col items-center justify-center rounded-xl bg-secondary-500 sm:w-[120px]"><span className="label-xs">Ratings</span><span className="font-heading text-[40px] font-semibold">4.7</span></div><ul className="flex flex-1 flex-col gap-2">{ratingBreakdown.map((rating) => <li key={rating.stars} className="flex items-center gap-4"><div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100"><div className="h-full rounded-full bg-secondary-500" style={{ width: `${rating.pct}%` }} /></div><Stars value={rating.stars} small /><span className="body-s w-9 text-right text-neutral-600">{rating.count}</span></li>)}</ul></div>
          <h3 className="mt-10 font-heading text-base font-semibold">Individual Reviews:</h3><div className="mt-4 flex flex-wrap gap-3">{(["all", 5, 4, 3, 2, 1] as const).map((rating) => <button key={rating} type="button" aria-pressed={filter === rating} onClick={() => setFilter(rating)} className={`label-s flex h-9 items-center gap-1.5 rounded-full px-4 ${filter === rating ? "bg-secondary-500 text-neutral-950" : "bg-neutral-50 text-neutral-700"}`}>{rating === "all" ? "All rating" : <><span>★</span>{rating}</>}</button>)}</div>
          <ul className="mt-6 flex flex-col gap-6">{visible.map((review) => <li key={review.name} className="rounded-2xl border border-neutral-200 p-5 sm:p-6"><div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><Image src={review.avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" /><div><p className="label-m text-neutral-950">{review.name}</p><p className="body-xs text-neutral-600">{review.role}</p></div></div><span className="body-xs text-neutral-600">a year ago</span></div><div className="mt-5"><Stars value={review.rating} /></div><p className="body-s mt-5 text-neutral-600">{review.text}</p></li>)}</ul>
        </div></div>
        <aside className="relative z-10 order-first rounded-[32px] border border-neutral-100 bg-white p-6 shadow-[0_8px_32px_rgba(7,30,95,0.08)] sm:p-10 lg:order-none lg:-mt-[543px]"><h2 className="font-heading text-2xl font-semibold">112 Lessons (24 hours)</h2><p className="body-m mt-5 text-neutral-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p><p className="mt-6 font-heading text-4xl font-semibold text-primary-600">$25<span className="body-s ml-0.5 font-normal text-neutral-600">/lifetime</span></p><button type="button" className="label-l mt-6 h-[46px] w-full rounded-full bg-secondary-500 text-neutral-950">Enroll Now</button><hr className="my-6 border-neutral-100" /><div className="flex items-center gap-3"><Image src="/images/Frame.png" alt="PurePearl Studio" width={48} height={48} className="size-12 rounded-full object-cover" /><div><p className="label-m text-neutral-950">PurePearl Studio</p><p className="body-s text-neutral-600">Professional Creator</p></div></div><Link href="/creator" className="label-s mt-5 inline-flex h-10 items-center rounded-full border border-neutral-200 px-5 text-neutral-950">See Full Profile</Link></aside>
      </div></section>
    </main>
  );
}
