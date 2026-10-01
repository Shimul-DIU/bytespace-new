import Link from "next/link";

const grid = "rgba(79,157,255,0.35)";

export const metadata = {
  title: "Page not found | ByteSpace",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden bg-primary-600 px-4 pb-16 pt-[100px] text-white md:pt-[114px] lg:min-h-[960px]">
      {/* grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative flex w-full max-w-[1000px] flex-col items-center text-center">
        {/* big 404 fading out toward the bottom */}
        <p
          aria-hidden="true"
          className="bg-clip-text font-heading font-semibold leading-[0.9] tracking-[0.02em] text-transparent select-none"
          style={{
            fontSize: "clamp(130px, 31vw, 450px)",
            backgroundImage:
              "linear-gradient(180deg, #d4fb20 15%, rgba(212,251,32,0.55) 60%, rgba(212,251,32,0) 95%)",
          }}
        >
          404
        </p>

        <h1 className="-mt-[0.35em] font-heading text-[clamp(30px,5vw,68px)] font-semibold leading-[1.15]">
          <span className="sr-only">Error 404. </span>
          The page you are looking
          <br />
          for doesn&rsquo;t exist
        </h1>

        <p className="body-m mt-6 max-w-[480px] text-white/90 sm:mt-8">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="label-l mt-8 flex h-[46px] items-center rounded-full bg-secondary-500 px-6 text-neutral-950 transition-colors hover:bg-secondary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}