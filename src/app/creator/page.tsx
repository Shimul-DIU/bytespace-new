"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const grid = "rgba(79,157,255,0.35)";

const courses = [
  { title: "Learn Figma from Basic", image: "/images/course-figma.png" },
  { title: "Build Digital Asset", image: "/images/course-digital-assets.png" },
  { title: "the Power of Big Data", image: "/images/course-big-data.png" },
  { title: "Balancing Productivity and Life", image: "/images/course-productivity.png" },
  { title: "Mastering Money Management", image: "/images/course-money-management.png" },
  { title: "From Idea to Startup Success", image: "/images/course-startup.png" },
];

const avatars = [1, 2, 3, 4].map((n) => `/images/Ellipse%20(${n}).png`);

function Icon({ d, className = "size-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

function FilterChip({ label, d }: { label: string; d: string }) {
  return (
    <button
      type="button"
      className="label-m flex h-12 items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 text-neutral-950 transition-colors hover:bg-neutral-50"
    >
      <Icon d={d} />
      {label}
    </button>
  );
}

function CourseCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="rounded-[24px] border border-neutral-200 bg-white p-4">
      <Link href="/course-details" className="block">
        <div className="relative aspect-[341/195] overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 flex justify-between gap-1">
            {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
              <span
                key={t}
                className="body-xs whitespace-nowrap rounded-full bg-white/60 px-3 py-1 text-neutral-600 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <h3 className="heading-xs truncate">{title}</h3>
          <span className="body-m flex shrink-0 items-center gap-1 text-neutral-500">
            4.5
            <svg viewBox="0 0 24 24" className="size-5 fill-neutral-300" aria-hidden="true">
              <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
            </svg>
          </span>
        </div>
        <p className="body-xs text-neutral-500">
          by <span className="text-primary-600">purepearl studio</span>
        </p>
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <span className="label-s flex h-8 items-center gap-2 rounded-full bg-neutral-50 px-3 text-neutral-600">
          <Icon className="size-4" d="M6 20v-6M12 20V8M18 20V4" />
          Beginner
        </span>
        <div className="flex items-center">
          {avatars.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className={`size-8 rounded-full border-2 border-white object-cover ${i > 0 ? "-ml-2" : ""}`}
            />
          ))}
          <span className="label-xs -ml-2 flex size-8 items-center justify-center rounded-full border-2 border-white bg-secondary-500 text-neutral-950">
            26+
          </span>
        </div>
      </div>

      <p className="mt-4 font-heading text-xl font-semibold leading-none text-primary-600">
        $25<span className="body-xs ml-0.5 font-normal text-neutral-600">/lifetime</span>
      </p>
    </article>
  );
}

export default function CreatorProfilePage() {
  const [following, setFollowing] = useState(false);

  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-primary-600 pb-12 pt-[100px] text-white md:pt-[114px] lg:pb-[82px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
          {/* identity */}
          <div className="flex items-center gap-5 pt-4 lg:pt-10">
            <Image
              src="/images/creator_img.png"
              alt="PurePearl Studio"
              width={96}
              height={96}
              priority
              className="size-24 shrink-0 rounded-[24px] bg-pink-200 object-cover"
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-heading text-[28px] font-semibold leading-[1.2] sm:text-[36px] lg:text-[44px]">
                  PurePearl Studio
                </h1>
                <span className="label-m rounded-full bg-secondary-500 px-5 py-1.5 text-neutral-950">
                  Creator
                </span>
              </div>
              <p className="body-l mt-1">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          {/* bio */}
          <div className="body-l mt-10 max-w-[1200px]">
            <p>
              Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the
              passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore
              and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From
              digital designs to multimedia projects, each piece tells a unique story. Explore the
              world of creativity with me.
            </p>
          </div>

          {/* stats + follow */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {[
                { n: "3", t: "Products" },
                { n: "12", t: "Followers" },
              ].map((s) => (
                <span
                  key={s.t}
                  className="label-l flex h-[46px] items-center gap-2 rounded-full bg-white px-6 text-neutral-950"
                >
                  <span className="text-primary-600">{s.n}</span>
                  {s.t}
                </span>
              ))}
            </div>

            <button
              type="button"
              aria-pressed={following}
              onClick={() => setFollowing((v) => !v)}
              className="label-l h-[46px] rounded-full bg-secondary-500 px-6 text-neutral-950 transition-colors hover:bg-secondary-400"
            >
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* ===== COURSES ===== */}
      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-8 lg:px-[120px] lg:pb-24 lg:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <FilterChip label="Filter" d="M22 3H2l8 9.46V19l4 2v-8.54z" />
            <FilterChip label="Level" d="M6 20v-6M12 20V8M18 20V4" />
            <FilterChip label="Category" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17.5 14l3.5 7h-7z" />
          </div>
          <FilterChip label="Most relevant" d="M3 6h18M3 12h12M3 18h6" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </section>
    </main>
  );
}