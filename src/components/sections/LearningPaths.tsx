import Image from "next/image";

const categories = [
  { label: "Design", icon: "/images/learning-design.png" },
  { label: "Development", icon: "/images/learning-development.png" },
  { label: "IT & Software", icon: "/images/learning-it-software.svg" },
  { label: "Business", icon: "/images/learning-business.png" },
  { label: "Marketing", icon: "/images/learning-marketing.png" },
  { label: "Photography", icon: "/images/learning-photography.png" },
];

export default function LearningPaths() {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-0 lg:pt-0 lg:pb-[60px]">
      {/* heading: 917 x 117, gap 16 */}
      <div className="mx-auto flex w-full max-w-[917px] flex-col items-center gap-4 text-center lg:h-[117px]">
        <h2 className="text-[26px] font-semibold leading-tight text-neutral-950 md:text-[32px] lg:text-[40px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-sm text-neutral-400 md:text-base">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>
      </div>

      {/* cards: 1202 wide, 6 x 167, gap 40 (heading theke 68px niche) */}
      <ul className="mx-auto mt-10 grid w-full max-w-[1202px] grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[68px] lg:grid-cols-6 lg:gap-10">
        {categories.map(({ label, icon }) => (
          <li key={label}>
            <a
              href="#"
              className="flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-[24px] border border-neutral-200 bg-white text-neutral-950 transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(7,30,95,0.12)]"
            >
              <Image src={icon} alt="" aria-hidden="true" width={60} height={60} sizes="60px" />
              <span className="text-base font-medium md:text-lg">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
