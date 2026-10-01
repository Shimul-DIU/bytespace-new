"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const grid = "rgba(79,157,255,0.35)";

const lessons = [
  { no: "01", title: "Introduction to Digital Assets", time: "12 mins" },
  { no: "02", title: "Design Principles for Impacts", time: "21 mins" },
  { no: "03", title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

const includes = [
  { label: "Learning Resources", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8" },
  { label: "Quality Lesson Videos", d: "M23 7l-7 5 7 5V7zM3 5h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" },
  { label: "Certificate of Completion", d: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12" },
  { label: "Private Consultation", d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" },
];

const descriptions = [
  `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
  `In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.`,
  `As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
];

const sneakPeek = [
  "/images/Rectangle (3).png",
  "/images/Rectangle (2).png",
  "/images/Rectangle (1).png",
  "/images/Rectangle.png",
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

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

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="12" className="fill-primary-600" />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-m flex h-10 items-center gap-2 rounded-full bg-white px-5 text-neutral-950">
      {children}
    </span>
  );
}

export default function CourseDetailsPage() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-primary-600 pb-12 pt-[100px] text-white md:pt-[114px] lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
          {/* title row */}
          <div className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row lg:pt-10">
            <div>
              <h1 className="font-heading text-[28px] font-semibold leading-[1.2] sm:text-[36px] lg:text-[44px]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-1 font-heading text-lg font-semibold leading-[1.3] sm:text-xl">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="body-m mt-5">
                by <span className="text-secondary-500">purepearl studio</span>
              </p>
            </div>

            <button
              type="button"
              className="label-m flex h-10 shrink-0 items-center gap-2 rounded-full bg-secondary-500 px-5 text-neutral-950 transition-colors hover:bg-secondary-400"
            >
              <Icon
                className="size-5"
                d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
              />
              Share
            </button>
          </div>

          {/* badges */}
          <div className="mt-5 flex flex-wrap gap-3 lg:gap-4">
            <Pill>
              <Icon className="size-5 text-primary-600" d="M6 20v-6M12 20V8M18 20V4" />
              Intermediate
            </Pill>
            <Pill>
              <svg viewBox="0 0 24 24" className="size-5 fill-primary-600" aria-hidden="true">
                <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
              </svg>
              4.8 (172 reviews)
            </Pill>
            <Pill>
              <Icon
                className="size-5 text-primary-600"
                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
              />
              199 Students
            </Pill>
          </div>

          {/* video (left column; right column is filled by the sidebar that is pulled up) */}
          <div className="mt-10 grid lg:grid-cols-[1fr_412px] lg:gap-16">
            <div className="relative aspect-video overflow-hidden rounded-[24px] bg-[#443131] lg:aspect-auto lg:h-[479px]">
              <Image
                src="/images/Frame%20(6).png"
                alt="Course preview"
                fill
                sizes="(min-width: 1024px) 724px, 100vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-8 lg:px-[120px] lg:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_412px] lg:gap-16">
          {/* left column */}
          <div className="min-w-0">
            <div role="tablist" aria-label="Course sections" className="flex gap-3">
              {tabs.map((t) => (
                <button
                  key={t}
                  role="tab"
                  type="button"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`label-m h-10 rounded-full px-5 transition-colors ${tab === t
                    ? "bg-secondary-500 text-neutral-950"
                    : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === "About" && (
              <div className="mt-10">
                <h2 className="heading-xs">Description</h2>
                <div className="mt-6 flex flex-col gap-8">
                  {descriptions.map((p, i) => (
                    <p key={i} className="body-m text-neutral-600">
                      {p}
                    </p>
                  ))}
                </div>

                <h2 className="heading-xs mt-10">Sneak Peak</h2>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {sneakPeek.map((src, i) => (
                    <div key={src} className="relative aspect-[167/125] overflow-hidden rounded-[16px] bg-[#D9D9D9]">
                      <Image
                        src={src}
                        alt={`Course sneak peek ${i + 1}`}
                        fill
                        sizes="(min-width: 1024px) 170px, 45vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h2 className="heading-xs mt-10">Key Points</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {keyPoints.map((k) => (
                    <li key={k} className="body-m flex items-center gap-3 text-neutral-600">
                      <CheckCircle />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "Lessons" && (
              <ul className="mt-10 flex flex-col gap-4">
                {lessons.map((l) => (
                  <li
                    key={l.no}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-100 p-5"
                  >
                    <span className="body-m flex gap-4">
                      <span className="text-neutral-400">{l.no}</span>
                      {l.title}
                    </span>
                    <span className="body-s text-primary-600">{l.time}</span>
                  </li>
                ))}
                <li className="body-m text-neutral-500">99 more videos</li>
              </ul>
            )}

            {tab === "Reviews" && (
              <p className="body-m mt-10 text-neutral-600">
                4.8 average rating from 172 reviews. Detailed reviews will appear here.
              </p>
            )}
          </div>

          {/* sidebar: pulled up over the hero on desktop (video height 479 + hero bottom padding 64) */}
          <aside className="relative z-10 order-first rounded-[32px] border border-neutral-100 bg-white p-6 shadow-[0_8px_32px_rgba(7,30,95,0.08)] sm:p-10 lg:order-none lg:-mt-[543px]">
            <h2 className="font-heading text-2xl font-semibold leading-[1.2] text-neutral-950">
              112 Lessons (24 hours)
            </h2>

            <ul className="mt-5 flex flex-col gap-3">
              {lessons.map((l) => (
                <li key={l.no} className="flex items-start justify-between gap-4">
                  <span className="body-m flex gap-4 text-neutral-950">
                    <span>{l.no}</span>
                    <span className="max-w-[170px]">{l.title}</span>
                  </span>
                  <span className="body-s mt-0.5 shrink-0 text-primary-600">{l.time}</span>
                </li>
              ))}
            </ul>
            <p className="body-m mt-3 text-neutral-600">99 more videos</p>

            <p className="body-m mt-8 text-neutral-600">
              Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            <p className="mt-6 font-heading text-4xl font-semibold leading-none text-primary-600">
              $25<span className="body-s ml-0.5 font-normal text-neutral-600">/lifetime</span>
            </p>

            <button
              type="button"
              className="label-l mt-6 h-[46px] w-full rounded-full bg-secondary-500 text-neutral-950 transition-colors hover:bg-secondary-400"
            >
              Enroll Now
            </button>

            <h3 className="heading-xs mt-8">This course include</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {includes.map((i) => (
                <li key={i.label} className="body-m flex items-center gap-3 text-neutral-600">
                  <Icon className="size-5 shrink-0 text-primary-600" d={i.d} />
                  {i.label}
                </li>
              ))}
            </ul>

            <hr className="my-6 border-neutral-100" />

            <div className="flex items-center gap-3">
              <Image
                src="/images/purepearl.png"
                alt="PurePearl Studio"
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <p className="label-m text-neutral-950">PurePearl Studio</p>
                <p className="body-s text-neutral-600">Professional Creator</p>
              </div>
            </div>

            <p className="body-m mt-5 text-neutral-600">
              Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            <Link
              href="#"
              className="label-s mt-5 inline-flex h-10 items-center rounded-full border border-neutral-200 px-5 text-neutral-950 transition-colors hover:bg-neutral-50"
            >
              See Full Profile
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}