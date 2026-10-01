import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      aria-labelledby="creator-cta-title"
      className="relative isolate flex min-h-[488px] flex-col items-center justify-center overflow-hidden bg-[#003BE2] px-6 py-16 text-center text-white lg:h-[488px] lg:min-h-0 lg:px-0 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cta-decoration-group.webp')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center">
        <h2
          id="creator-cta-title"
          className="w-full max-w-[710px] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F5F5F6] sm:text-[38px] lg:h-[106px] lg:text-[44px]"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Unlock Your Potential as a{" "}
          <br className="hidden sm:block" />Creator with ByteSpace
        </h2>

        <p className="mt-8 w-full max-w-[964px] font-body text-[16px] leading-[1.6] text-[#F5F5F6] sm:text-[18px] min-[1280px]:h-[87px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a{" "}
          <br className="hidden min-[1280px]:block" />part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your{" "}
          <br className="hidden min-[1280px]:block" />expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link
          href="/signup"
          className="mt-10 inline-flex min-h-[46px] items-center justify-center rounded-full bg-secondary-400 px-6 font-body text-[16px] font-medium text-neutral-950 transition-colors hover:bg-secondary-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
