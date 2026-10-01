import Image from "next/image";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const avatars = [1, 2, 3, 4, 5, 6].map((n) => `/images/Ellipse%20%28${n}%29.png`);

const bg = [
  "radial-gradient(320px 380px at 100% 5%, rgba(0,51,224,0.09), transparent 70%)",
  "radial-gradient(220px 420px at 0% 33%, rgba(0,51,224,0.06), transparent 70%)",
  "radial-gradient(460px 400px at 93% 95%, rgba(0,51,224,0.2), transparent 70%)",
].join(",");

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <circle cx="12" cy="12" r="12" className="fill-primary-600" />
      <path d="m7 12.5 3.5 3.5L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <rect x="1" y="6" width="2.4" height="5" rx="1" fill="currentColor" />
      <rect x="4.8" y="3" width="2.4" height="8" rx="1" fill="currentColor" />
      <rect x="8.6" y="1" width="2.4" height="10" rx="1" fill="currentColor" />
    </svg>
  );
}

const heading =
  "text-[32px] font-semibold leading-[40px] text-neutral-950 md:text-[40px] md:leading-[48px] lg:text-[44px] lg:leading-[53px]";
const para = "text-base leading-[29px] text-neutral-600";

export default function GrowthSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAFA] min-[1280px]:h-[1460px]"
      style={{ backgroundImage: bg }}
    >
      {/* lime glow 1: 1137 x 1137, top -466, left -152 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-[1137px] w-[1137px] backdrop-blur-[40px] max-lg:-left-[400px] max-lg:-top-[600px] lg:-left-[152px] lg:-top-[466px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.4) 0%, rgba(203,252,1,0.092) 53%, rgba(203,252,1,0.024) 75%, rgba(203,252,1,0) 100%)",
        }}
      />

      {/* blue glow: 1137 x 1137, top 183, left -508 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-[90vw] w-[90vw] max-w-[1137px] max-lg:-left-[40vw] max-lg:top-[183px] lg:-left-[508px] lg:top-[183px] lg:h-[1137px] lg:w-[1137px] backdrop-blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      {/* lime glow 2: 672 x 672, top 946, left -287 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[287px] top-[946px] z-0 hidden h-[672px] w-[672px] backdrop-blur-[40px] lg:block"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0.138) 53%, rgba(203,252,1,0.036) 75%, rgba(203,252,1,0) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* ================= BLOCK 1 : Your Path ================= */}
        <div className="flex flex-col gap-10 px-6  py-14 min-[1280px]:absolute min-[1280px]:inset-x-0 min-[1280px]:top-[120px] min-[1280px]:mx-auto min-[1280px]:h-[552px] min-[1280px]:w-[1258px] min-[1280px]:flex-row min-[1280px]:gap-[63px] min-[1280px]:p-0">
          {/* text */}
          <div className="flex flex-col gap-6 min-[1280px]:h-[404px] min-[1280px]:w-[574px] min-[1280px]:shrink-0 min-[1280px]:translate-y-[74px] min-[1280px]:gap-[40px]">
            <h2
              className="text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] md:text-[40px] min-[1280px]:text-[44px]"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Your Path to Professional <br className="hidden min-[1280px]:block" />
              Growth Starts Here!
            </h2>
            <p className="max-w-[480px] font-body text-[18px] font-normal leading-[1.6] text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex gap-14">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[32px] font-medium leading-[44px] text-primary-600 min-[1280px]:text-[36px]">{value}</p>
                  <p className="mt-0.5 text-base leading-6 text-neutral-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* visual (600 x 560, scaled down on small screens) */}
          <div className="mx-auto h-[280px] w-[300px] sm:h-[504px] sm:w-[540px] md:h-[560px] md:w-[600px] min-[1280px]:mx-0 min-[1280px]:h-[552px] min-[1280px]:w-[621px]">
            <div className="relative h-[560px] w-[600px] origin-top-left scale-50 sm:scale-90 md:scale-100">
              {/* course card 371 x 383 */}
              <div className="absolute left-0 top-0 z-0 h-[383px] w-[371px] rounded-[24px] border border-neutral-200 bg-white p-[15px]">
                <div className="relative h-[195px] overflow-hidden rounded-2xl">
                  <Image src="/images/course-figma.png" alt="" fill sizes="341px" className="object-cover" />
                  <div className="absolute bottom-[13px] left-3 flex gap-3.5 text-xs">
                    <span className="flex h-[30px] items-center rounded-full bg-neutral-300/70 px-3 text-neutral-500 backdrop-blur">
                      17 Lessons
                    </span>
                    <span className="flex h-[30px] items-center rounded-full bg-neutral-300/70 px-3 text-neutral-500 backdrop-blur">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>
                <p className="mt-[22px] text-xl font-semibold leading-[26px] text-neutral-950">Learn Figma from Basic</p>
                <p className="mt-1 text-xs leading-4 text-neutral-500">
                  by <span className="text-primary-600">purepearl studio</span>
                </p>
                <div className="mt-[17px] flex items-center">
                  <span className="flex h-[34px] items-center gap-2 rounded-full bg-neutral-100 px-4 text-xs text-neutral-700">
                    <BarsIcon />
                    Beginner
                  </span>
                  <div className="ml-3 flex items-center">
                    {avatars.slice(0, 2).map((src, i) => (
                      <Image key={src} src={src} alt="" width={34} height={34} className={`size-[34px] rounded-full object-cover ${i ? "-ml-2" : ""}`} />
                    ))}
                  </div>
                </div>
                <p className="mt-[13px] text-xl font-semibold leading-[26px] text-primary-600">
                  $25<span className="text-xs font-normal text-neutral-500">/lifetime</span>
                </p>
              </div>

              {/* student */}
              <Image
                src="/images/Image.png"
                alt="Smiling student with headset holding a laptop"
                width={578}
                height={541}
                sizes="560px"
                className="absolute left-[41px] top-[29px] z-10 h-auto w-[560px]"
                style={{ filter: "drop-shadow(30px 40px 40px rgba(0,0,0,0.15))" }}
              />

              {/* progress card 232 x 137 */}
              <div className="absolute left-[344px] top-[212px] z-20 w-[232px] rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(7,30,95,0.10)]">
                <p className="text-sm leading-6 text-neutral-950">Learning Progress</p>
                <p className="mt-[11px] text-[44px] font-semibold leading-[52px] text-neutral-950">55%</p>
                <div className="mt-[11px] h-2 w-full rounded-full bg-neutral-100">
                  <div className="h-full w-[56%] rounded-full bg-secondary-500" />
                </div>
              </div>

              {/* squiggle */}
              <Image
                src="/images/growth-progress-squiggle.webp"
                alt=""
                width={215}
                height={215}
                aria-hidden="true"
                className="pointer-events-none absolute left-[406px] top-[67px] z-30 h-[215px] w-[215px]"
              />
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2 : Create & Manage ================= */}
        <div className="flex flex-col gap-10 px-6 py-14 min-[1280px]:absolute min-[1280px]:inset-x-0 min-[1280px]:top-[780px] min-[1280px]:mx-auto min-[1280px]:h-[596px] min-[1280px]:w-[1200px] min-[1280px]:flex-row min-[1280px]:gap-[79px] min-[1280px]:p-0">
          {/* visual (560 x 580, scaled down on small screens) */}
          <div className="mx-auto h-[290px] w-[280px] sm:h-[522px] sm:w-[504px] md:h-[580px] md:w-[560px] min-[1280px]:mx-0 min-[1280px]:h-[596px] min-[1280px]:w-[560px] min-[1280px]:shrink-0">
            <div className="relative h-[596px] w-[560px] origin-top-left scale-50 sm:scale-90 md:scale-100">
              {/* Total Revenue (girl-er pichone) */}
              <div className="absolute left-0 top-[8px] z-0 h-[119px] w-[240px] rounded-2xl bg-primary-600 p-4 text-white">
                <p className="text-base leading-5">Total Revenue</p>
                <p className="text-[10px] leading-3 opacity-80">July 1-28</p>
                <p className="mt-1.5 text-[22px] font-semibold leading-8">$120.29</p>
                <div className="mt-[9px] h-2 w-full rounded-full bg-white">
                  <div className="h-full w-[54%] rounded-full bg-secondary-500" />
                </div>
              </div>

              {/* girl */}
              <Image
                src="/images/growth-creator.webp"
                alt="Smiling creator holding a tablet"
                width={435}
                height={596}
                sizes="435px"
                className="absolute left-[28px] top-0 z-10 h-[596px] w-[435px]"
                style={{
                  filter:
                    "drop-shadow(0.52px 0.74px 3.04px #0000000A) drop-shadow(2.23px 3.19px 5.72px #0000000F) drop-shadow(5.38px 7.69px 9.57px #00000012) drop-shadow(10.21px 14.58px 16.09px #00000014) drop-shadow(16.95px 24.21px 24px #00000017) drop-shadow(25.84px 36.91px 36px #0000001A) drop-shadow(37.12px 53.03px 56px #0000001B) drop-shadow(51.04px 72.91px 72px #00000021)",
                }}
              />

              {/* Year to Date (girl-er samne) */}
              <div className="absolute left-0 top-[158px] z-20 h-[135px] w-[134px] rounded-2xl bg-primary-600 pb-4 pl-4 pr-3 pt-4 text-white">
                <p className="text-base leading-5">Year to Date</p>
                <p className="text-[10px] leading-3 opacity-80">2023</p>
                <p className="mt-1.5 whitespace-nowrap text-[22px] font-semibold leading-8">$1,200.38</p>
                <span className="mt-2.5 flex h-[22px] w-[39px] items-center justify-center rounded-full bg-secondary-500 text-[10px] font-medium text-neutral-950">
                  +12$
                </span>
              </div>

              {/* squiggle */}
              <Image
                src="/images/growth-squiggle.webp"
                alt=""
                width={215}
                height={215}
                aria-hidden="true"
                className="pointer-events-none absolute left-[305px] top-[114px] z-20 h-[215px] w-[215px]"
              />

              {/* Happy Students 258 x 123 */}
              <div className="absolute left-[283px] top-[377px] z-30 w-[258px] rounded-2xl bg-white py-4 pl-4 pr-2.5 shadow-[0_8px_24px_rgba(7,30,95,0.10)]">
                <p className="text-base leading-6 text-neutral-950">Happy Students</p>
                <p className="flex items-center gap-1 text-[10px] leading-4 text-neutral-500">
                  <b className="font-semibold text-neutral-950">4.5</b> (240)
                  <Image src="/images/Star.svg" alt="" width={12} height={12} />
                </p>
                <div className="mt-2.5 flex items-center">
                  {avatars.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={42}
                      height={42}
                      className={`size-[42px] rounded-full object-cover ${i ? "-ml-[10px]" : ""}`}
                    />
                  ))}
                  <Image
                    src="/images/Group.png"
                    alt="2K+ students"
                    width={43}
                    height={43}
                    className="-ml-[13px] size-[43px] rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* text */}
          <div className="min-[1280px]:w-[561px] min-[1280px]:shrink-0 min-[1280px]:pt-[69px]">
            <h2 className={heading}>
              Create &amp; Manage <br className="hidden min-[1280px]:block" />
              Courses Easily.
            </h2>
            <p className={`${para} mt-6 min-[1280px]:mt-10`}>
              <b className="font-semibold text-neutral-950">ByteSpace</b> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 flex flex-col gap-4 min-[1280px]:mt-[42px]">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-lg leading-6 text-neutral-950">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
