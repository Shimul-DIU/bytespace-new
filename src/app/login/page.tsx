import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-white lg:bg-primary-600">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,157,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(79,157,255,0.35) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-[1440px] lg:grid-cols-[1fr_579px] lg:gap-10 lg:px-[120px]">
        <section className="hidden flex-col pb-10 pt-8 text-white lg:flex" aria-label="ByteSpace sign in introduction">
          <Link href="/" aria-label="ByteSpace home">
            <Image src="/images/logo.svg" alt="ByteSpace" width={32} height={32} priority />
          </Link>

          <div className="mt-[52px] max-w-[480px]">
            <h1 className="heading-xs text-2xl">Sign in with ease</h1>
            <p className="body-l mt-6">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="mt-8">
            <Image
              src="/images/register-visual.png"
              alt="Course cards and happy students preview"
              width={500}
              height={560}
              sizes="500px"
              className="h-auto w-full max-w-[500px]"
            />
          </div>
        </section>

        <section className="flex lg:py-[120px]" aria-label="Sign in">
          <div className="flex w-full flex-col bg-white px-6 py-16 sm:px-12 lg:rounded-[32px] lg:p-[63px]">
            <div>
              <p className="body-m text-primary-600">Sign In</p>
              <h2 className="heading-m mt-1 text-neutral-950">Welcome Back</h2>
            </div>

            <form className="mt-12 flex flex-col gap-6">
              <label className="font-body text-[12px] text-neutral-950">
                Email
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="mt-2 h-10 w-full rounded-[9px] border border-neutral-200 px-4 font-body text-[13px] outline-none focus:border-primary-500"
                />
              </label>
              <label className="font-body text-[12px] text-neutral-950">
                Password
                <input
                  type="password"
                  placeholder="********"
                  className="mt-2 h-10 w-full rounded-[9px] border border-neutral-200 px-4 font-body text-[13px] outline-none focus:border-primary-500"
                />
              </label>

              <button type="submit" className="mt-[-2px] ml-auto rounded-full bg-secondary-500 px-6 py-2.5 font-body text-[14px] text-neutral-950 transition hover:bg-secondary-400">
                Sign In
              </button>
            </form>

            <div className="mt-16 flex items-center gap-3 font-body text-[12px] text-neutral-400">
              <span className="h-px flex-1 bg-neutral-200" />
              <span>or</span>
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button type="button" aria-label="Continue with Facebook" className="flex size-14 items-center justify-center rounded-[16px] border border-neutral-200 font-heading text-[26px] font-semibold text-neutral-950 transition hover:border-primary-500">
                f
              </button>
              <button type="button" aria-label="Continue with Google" className="flex size-14 items-center justify-center rounded-[16px] border border-neutral-200 font-heading text-[24px] font-semibold text-neutral-950 transition hover:border-primary-500">
                G
              </button>
            </div>

            <p className="mt-auto pt-16 text-center font-body text-[12px] text-neutral-500">
              New user? <Link href="/signup" className="text-primary-500 hover:underline">Create an account</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
