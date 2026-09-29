import Image from "next/image";
import Button from "../ui/Button";
import FloatingCard from "../ui/FloatingCard";

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

export default function Hero() {
  return (
    <section className="relative flex min-h-[900px] flex-col items-center overflow-hidden bg-primary-600 text-white lg:min-h-[1024px]">
      {/* grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${grid} 1px, transparent 1px), linear-gradient(to bottom, ${grid} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Ellipse base, with the ornament layer above it */}
      <Image
        src="/images/Ellipse%207.svg"
        alt=""
        width={1149}
        height={1149}
        sizes="79.8vw"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[582px] z-10 h-[79.8vw] max-h-[1149px] w-[79.8vw] max-w-[1149px] -translate-x-1/2"
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
      <div className="relative z-30 mx-auto mt-[90px] flex h-auto w-full max-w-[1200px] flex-col items-center gap-6 px-6 text-center sm:mt-[110px] sm:gap-8 lg:mt-[130px] lg:h-[345px] lg:gap-[60px] lg:px-0">
        <h1 className="hero-title mx-auto w-full ">
          Get Access to Hundreds <br className="hidden md:block" />
          Courses Available
        </h1>
        <p className="body-l mx-auto w-full  text-center text-white/90">
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

      {/* visual stage */}
      <div className="relative z-30 mx-auto mt-16 h-[420px] w-full max-w-[1440px] flex-1 lg:h-[450px] lg:flex-none">
        <Image
          src="/images/Image.png"
          alt="Smiling student with headset holding a laptop"
          width={578}
          height={541}
          sizes="(min-width: 1440px) 578px, 90vw"
          priority
          className="absolute bottom-0 left-1/2 h-auto w-[360px] -translate-x-1/2 sm:w-[480px] lg:bottom-auto lg:top-[-59px] lg:h-[min(541px,84.2vw)] lg:w-[min(578px,90vw)]"
          style={{
            filter:
              "drop-shadow(0.52px 0.74px 3.04px #0000000A) drop-shadow(2.23px 3.19px 5.72px #0000000F) drop-shadow(5.38px 7.69px 9.57px #00000012) drop-shadow(10.21px 14.58px 16.09px #00000014) drop-shadow(16.95px 24.21px 24px #00000017) drop-shadow(25.84px 36.91px 36px #0000001A) drop-shadow(37.12px 53.03px 56px #0000001B) drop-shadow(51.04px 72.91px 72px #00000021)",
          }}
        />

        <FloatingCard className="absolute left-[calc(50%-336px)] top-[92px] hidden lg:block">
          <p className="label-m">UI/UX Design</p>
          <p className="body-xs mt-1 text-neutral-400">200 Courses &nbsp;&#8226;&nbsp; 1000+ Students</p>
        </FloatingCard>

        <FloatingCard className="absolute left-[58.47%] top-[109px] hidden h-[131px] w-[232px] flex-col justify-between gap-2 p-4 lg:flex">
          <p className="label-s">Learning Progress</p>
          <p className="heading-m">55%</p>
          <div className="h-2 w-full rounded-full bg-neutral-100">
            <div className="h-full w-[55%] rounded-full bg-secondary-500" />
          </div>
        </FloatingCard>

        <FloatingCard className="absolute bottom-4 left-1/2 flex h-[121px] w-full max-w-[258px] -translate-x-1/2 flex-col gap-2 p-4 lg:bottom-[44px] lg:left-[15.78%] lg:translate-x-0">
          <div className="flex flex-col gap-0.5">
            <p className="label-m text-black">Happy Students</p>
            <p className="body-xs flex items-center gap-1 text-neutral-500">
              4.5 (240)
              <Image src="/images/Star.svg" alt="" width={12} height={12} sizes="12px" />
            </p>
          </div>
          <div className="flex -space-x-[13px]">
            {studentAvatars.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={43}
                height={43}
                sizes="43px"
              />
            ))}
            <Image
              src="/images/Group.png"
              alt="2K+ students"
              width={43}
              height={43}
              sizes="43px"
            />
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}
