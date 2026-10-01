import Image from "next/image";
import type { ReactNode } from "react";
import Button from "../ui/Button";

const grid = "rgba(79,157,255,0.35)";
const studentAvatars = [1, 2, 3, 4, 5, 6].map(
  (number) => `/images/Ellipse%20%28${number}%29.png`,
);

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

/* White info card.
   - Fills the free space beside the student, up to maxW.
   - `pull` = how far (as a fraction of the student width) the card tucks into
     the student image's transparent margin, so it sits right next to the
     person but never on top of them. */
function SideCard({
  children,
  maxW,
  side,
  pull,
}: {
  children: ReactNode;
  maxW: string;
  side: "left" | "right";
  pull: number;
}) {
  const p = `calc(var(--sw) * ${pull})`;
  return (
    <div
      className="pointer-events-auto rounded-[clamp(10px,1.5vw,16px)] bg-white p-[clamp(6px,1.1vw,16px)] text-neutral-950 shadow-[0_8px_24px_rgba(7,30,95,0.15)]"
      style={{
        width: `calc(100% + ${p})`,
        maxWidth: maxW,
        ...(side === "left"
          ? { marginRight: `calc(${p} * -1)` }
          : { marginLeft: `calc(${p} * -1)` }),
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[720px] flex-col items-center overflow-hidden bg-primary-600 text-white md:min-h-[760px] lg:min-h-[1024px]">
      {/* grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${grid} 1px, transparent 1px), linear-gradient(to bottom, ${grid} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* 3D ornaments */}
      <Image
        src="/images/3d_ornament.png"
        alt=""
        width={1440}
        height={804}
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[220px] z-20 hidden h-auto w-full md:block"
      />

      {/* text content */}
      <div className="relative z-30 mx-auto mt-[90px] flex h-auto w-full max-w-[1200px] flex-col items-center gap-4 px-6 text-center sm:mt-[110px] md:gap-8 lg:mt-[130px] lg:h-[345px] lg:gap-[60px] lg:px-0">
        <h1 className="hero-title mx-auto w-full">
          Get Access to Hundreds <br className="hidden md:block" />
          Courses Available
        </h1>
        <p className="body-l mx-auto w-full text-center text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form role="search" className="mx-auto flex w-full max-w-[582px] flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <label className="flex h-[52px] w-full items-center gap-3 rounded-full bg-white px-5 text-neutral-400 sm:flex-1">
            <SearchIcon />
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="body-m w-full bg-transparent text-neutral-950 outline-none placeholder:text-neutral-400"
            />
          </label>
          <Button type="submit" className="w-full sm:w-[104px] sm:flex-none">Search</Button>
        </form>
      </div>

      {/* visual stage. --sw = student width (578px on desktop, shrinks on smaller screens) */}
      <div className="relative z-30 mx-auto mt-auto h-[calc(var(--sw)*0.936+48px)] w-full max-w-[1440px] [--sw:clamp(170px,40vw,578px)] lg:mt-16 lg:h-[450px]">
        {/* student + ellipse share one wrapper so they always scale together.
            Same position as the original desktop layout. */}
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto aspect-[578/541] w-[var(--sw)] lg:bottom-0">
          <Image
            src="/images/Ellipse%207.svg"
            alt=""
            width={1149}
            height={1149}
            sizes="(min-width: 1440px) 1149px, 80vw"
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[18.85%] h-auto w-[198.8%] max-w-none -translate-x-1/2"
          />
          <Image
            src="/images/student.png"
            alt="Smiling student with headset holding a laptop"
            width={578}
            height={541}
            sizes="(min-width: 1440px) 578px, 40vw"
            priority
            className="absolute bottom-[-12%] left-1/2 z-20 h-auto w-[145%] max-w-none -translate-x-1/2"
            style={{
              filter:
                "drop-shadow(0.52px 0.74px 3.04px #0000000A) drop-shadow(2.23px 3.19px 5.72px #0000000F) drop-shadow(5.38px 7.69px 9.57px #00000012) drop-shadow(10.21px 14.58px 16.09px #00000014) drop-shadow(16.95px 24.21px 24px #00000017) drop-shadow(25.84px 36.91px 36px #0000001A) drop-shadow(37.12px 53.03px 56px #0000001B) drop-shadow(51.04px 72.91px 72px #00000021)",
            }}
          />
          <Image
            src="/images/Image.png"
            alt=""
            width={578}
            height={541}
            sizes="(min-width: 1440px) 578px, 40vw"
            aria-hidden="true"
            className="relative h-auto w-full opacity-0"
          />
        </div>

        {/* cards layer: same box as the student, but full width, so the
            cards stay level with the student and hug its left/right sides */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 grid h-[calc(var(--sw)*0.936)] grid-cols-[1fr_var(--sw)_1fr] lg:bottom-0">
          {/* left cards */}
          <div className="flex min-w-0 flex-col items-end justify-between gap-2 pl-2 sm:pb-[calc(var(--sw)*0.14)] sm:pl-3 sm:pt-[calc(var(--sw)*0.26)]">
            <SideCard side="left" pull={0.2} maxW="220px">
              <p className="label-m text-[clamp(11px,2.1vw,16px)]">UI/UX Design</p>
              <p className="body-xs mt-1 text-[clamp(8px,1.5vw,12px)] text-neutral-400">
                200 Courses &#8226; 1000+ Students
              </p>
            </SideCard>

            <SideCard side="left" pull={0.12} maxW="258px">
              <p className="label-m text-[clamp(11px,2.1vw,16px)] text-black">Happy Students</p>
              <p className="body-xs mt-0.5 flex items-center gap-1 text-[clamp(8px,1.5vw,12px)] text-neutral-500">
                4.5 (240)
                <Image src="/images/Star.svg" alt="" width={12} height={12} sizes="12px" />
              </p>
              <div className="mt-[clamp(4px,0.9vw,12px)] flex items-center">
                {studentAvatars.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={43}
                    height={43}
                    sizes="43px"
                    className={`size-[clamp(18px,3vw,43px)] rounded-full object-cover [&:not(:first-child)]:-ml-[clamp(5px,0.9vw,13px)] ${i >= 3 ? "hidden sm:block" : ""}`}
                  />
                ))}
                <Image
                  src="/images/Group.png"
                  alt="2K+ students"
                  width={43}
                  height={43}
                  sizes="43px"
                  className="-ml-[clamp(5px,0.9vw,13px)] size-[clamp(18px,3vw,43px)] rounded-full object-cover"
                />
              </div>
            </SideCard>
          </div>

          {/* empty middle column = the student */}
          <div aria-hidden="true" />

          {/* right cards */}
          <div className="flex min-w-0 flex-col items-start pr-2 pt-[calc(var(--sw)*0.12)] sm:pr-3 sm:pt-[calc(var(--sw)*0.29)]">
            <SideCard side="right" pull={0.24} maxW="232px">
              <p className="label-s text-[clamp(9px,1.9vw,14px)]">Learning Progress</p>
              <p className="heading-m mt-[clamp(2px,0.6vw,8px)] text-[clamp(20px,4vw,44px)]">55%</p>
              <div className="mt-[clamp(4px,0.9vw,12px)] h-[clamp(4px,0.6vw,8px)] w-full rounded-full bg-neutral-100">
                <div className="h-full w-[55%] rounded-full bg-secondary-500" />
              </div>
            </SideCard>
          </div>
        </div>
      </div>
    </section>
  );
}