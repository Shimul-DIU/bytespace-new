import Image from "next/image";
import Link from "next/link";

const grid = "rgba(79,157,255,0.35)";

const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    text: "Lay the groundwork with lessons like Understanding Digital Elements and Navigating Design Software Tools. Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    text: "Master the principles that drive impactful designs with lessons such as Color Theory in Digital Design and Typography Essentials.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    text: "Understand Design Thinking in Digital Creation and User Experience Essentials. Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    text: "Engage your audience with interactive presentations and multimedia elements. Master immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    text: "Perfect your presentation skills and embrace collaboration with peer critique. Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    text: "Adapt your digital creations for mobile platforms and social media to ensure accessibility and engagement.",
  },
];

const tabs = [
  { label: "About", href: "/course-details" },
  { label: "Lesson", href: "/course-lessons" },
  { label: "Reviews", href: "/course-reviews" },
];

function Icon({ d, className = "size-5" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={d} />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="label-m flex h-10 items-center gap-2 rounded-full bg-white px-5 text-neutral-950">{children}</span>;
}

function CourseSidebar() {
  return (
    <aside className="relative z-10 order-first rounded-[32px] border border-neutral-100 bg-white p-6 shadow-[0_8px_32px_rgba(7,30,95,0.08)] sm:p-10 lg:order-none lg:-mt-[543px]">
      <h2 className="font-heading text-2xl font-semibold leading-[1.2] text-neutral-950">112 Lessons (24 hours)</h2>
      <ul className="mt-5 flex flex-col gap-3 text-neutral-950">
        {[
          ["01", "Introduction to Digital Assets", "12 mins"],
          ["02", "Design Principles for Impacts", "21 mins"],
          ["03", "Advanced Techniques in Digital Creation", "16 mins"],
        ].map(([no, title, time]) => (
          <li key={no} className="flex items-start justify-between gap-4">
            <span className="body-m flex gap-4"><span>{no}</span><span className="max-w-[170px]">{title}</span></span>
            <span className="body-s mt-0.5 shrink-0 text-primary-600">{time}</span>
          </li>
        ))}
      </ul>
      <p className="body-m mt-3 text-neutral-600">99 more videos</p>
      <p className="body-m mt-8 text-neutral-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="mt-6 font-heading text-4xl font-semibold leading-none text-primary-600">$25<span className="body-s ml-0.5 font-normal text-neutral-600">/lifetime</span></p>
      <button type="button" className="label-l mt-6 h-[46px] w-full rounded-full bg-secondary-500 text-neutral-950">Enroll Now</button>
      <h3 className="heading-xs mt-8">This course include</h3>
      <ul className="mt-5 flex flex-col gap-4 text-neutral-600">
        {["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"].map((item) => (
          <li key={item} className="body-m flex items-center gap-3"><Icon className="size-5 text-primary-600" d="M5 12l4 4L19 6" />{item}</li>
        ))}
      </ul>
      <hr className="my-6 border-neutral-100" />
      <div className="flex items-center gap-3">
        <Image src="/images/Frame.png" alt="PurePearl Studio" width={48} height={48} className="size-12 rounded-full object-cover" />
        <div><p className="label-m text-neutral-950">PurePearl Studio</p><p className="body-s text-neutral-600">Professional Creator</p></div>
      </div>
      <Link href="/creator" className="label-s mt-5 inline-flex h-10 items-center rounded-full border border-neutral-200 px-5 text-neutral-950">See Full Profile</Link>
    </aside>
  );
}

export const metadata = { title: "Course Lessons | ByteSpace" };

export default function CourseLessonsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-primary-600 pb-12 pt-[100px] text-white md:pt-[114px] lg:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`, backgroundSize: "120px 120px" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
          <div className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row lg:pt-10">
            <div>
              <h1 className="font-heading text-[28px] font-semibold leading-[1.2] sm:text-[36px] lg:text-[44px]">Build Digital Asset: A Comprehensive Guide</h1>
              <p className="mt-1 font-heading text-lg font-semibold leading-[1.3] sm:text-xl">Unlock the Power of Digital Creation with Expert Guidance</p>
              <p className="body-m mt-5">by <span className="text-secondary-500">purepearl studio</span></p>
            </div>
            <button type="button" className="label-m flex h-10 items-center gap-2 rounded-full bg-secondary-500 px-5 text-neutral-950"><Icon d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />Share</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:gap-4">
            <Pill><Icon className="size-5 text-primary-600" d="M6 20v-6M12 20V8M18 20V4" />Intermediate</Pill>
            <Pill><span className="text-primary-600">★</span>4.8 (172 reviews)</Pill>
            <Pill><Icon className="size-5 text-primary-600" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />199 Students</Pill>
          </div>
          <div className="mt-10 grid lg:grid-cols-[1fr_412px] lg:gap-16">
            <div className="relative aspect-video overflow-hidden rounded-[24px] bg-[#443131] lg:aspect-auto lg:h-[479px]">
              <Image src="/images/Frame%20(6).png" alt="Course preview" fill sizes="(min-width: 1024px) 724px, 100vw" priority className="object-cover" />
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-8 lg:px-[120px] lg:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_412px] lg:gap-16">
          <div className="min-w-0">
            <nav aria-label="Course sections" className="flex gap-3">
              {tabs.map((tab) => <Link key={tab.label} href={tab.href} className={`label-m flex h-10 items-center rounded-full px-5 ${tab.label === "Lesson" ? "bg-secondary-500 text-neutral-950" : "bg-neutral-50 text-neutral-700"}`}>{tab.label}</Link>)}
            </nav>
            <div className="mt-10">
              <h2 className="heading-xs">Explore the Modules</h2>
              <p className="body-m mt-4 text-neutral-600">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
              <h3 className="heading-xs mt-8">Lesson List</h3>
              <ul className="mt-5 flex flex-col gap-6">
                {modules.map((module) => <li key={module.title} className="flex items-start gap-4"><span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-secondary-500 text-neutral-950"><Icon className="size-7" d="M23 7l-7 5 7 5V7zM3 5h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /></span><div><p className="label-m text-neutral-950">{module.title}</p><p className="body-m mt-1 text-neutral-600">{module.text}</p></div></li>)}
              </ul>
              <h3 className="heading-xs mt-10">Lesson Content</h3>
              <p className="body-m mt-4 text-neutral-600">Engage with each lesson through captivating video content, detailed explanations, interactive elements, assignments, and quizzes.</p>
              <h3 className="heading-xs mt-10">Lesson Progress Tracking</h3>
              <p className="body-m mt-4 text-neutral-600">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
            </div>
          </div>
          <CourseSidebar />
        </div>
      </section>
    </main>
  );
}
