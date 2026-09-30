import Image from "next/image";

export default function BrandStrip() {
  return (
    <section
      aria-label="Partner brands"
      className="flex h-[202px] w-full items-center bg-[#F5F5F6]"
    >
      <Image
        src="/images/Frame-2.svg"
        alt="Partner brand logos"
        width={1440}
        height={202}
        sizes="(min-width: 1440px) 1440px, 100vw"
        className="mx-auto h-auto w-full max-w-[1440px]"
      />
    </section>
  );
}
