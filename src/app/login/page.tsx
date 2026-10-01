import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-primary-600 pt-[100px] md:pt-[114px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,157,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(79,157,255,0.35) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-4 pb-10 pt-4 sm:px-8 lg:grid-cols-[1fr_579px] lg:gap-10 lg:px-[120px] lg:pb-16 lg:pt-6">
        <section className="flex flex-col text-white lg:pt-8" aria-label="ByteSpace sign in introduction">
          <div className="max-w-[480px]">
            <h1 className="heading-xs text-2xl">Sign in with ease</h1>
            <p className="body-l mt-4 lg:mt-6">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="mt-8 hidden sm:block">
            <Image
              src="/images/register-visual.png"
              alt="Course cards and happy students preview"
              width={500}
              height={560}
              sizes="(min-width: 1024px) 500px, 80vw"
              className="h-auto w-full max-w-[500px]"
            />
          </div>
        </section>

        <section className="flex" aria-label="Sign in">
          <div className="flex w-full flex-col rounded-[24px] bg-white p-6 sm:p-10 lg:rounded-[32px] lg:p-[63px]">
            <div>
              <p className="body-m text-primary-600">Sign In</p>
              <h2 className="heading-m mt-1 text-neutral-950">Welcome Back</h2>
            </div>

            <form className="mt-10 flex flex-col gap-6 lg:mt-12">
              <label className="font-body text-[12px] text-neutral-950">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="designer@example.com"
                  autoComplete="email"
                  required
                  className="mt-2 h-10 w-full rounded-[9px] border border-neutral-200 px-4 font-body text-[13px] outline-none focus:border-primary-500"
                />
              </label>
              <label className="font-body text-[12px] text-neutral-950">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  autoComplete="current-password"
                  required
                  className="mt-2 h-10 w-full rounded-[9px] border border-neutral-200 px-4 font-body text-[13px] outline-none focus:border-primary-500"
                />
              </label>

              <button
                type="submit"
                className="ml-auto rounded-full bg-secondary-500 px-6 py-2.5 font-body text-[14px] text-neutral-950 transition hover:bg-secondary-400"
              >
                Sign In
              </button>
            </form>

            <div className="mt-12 flex items-center gap-3 font-body text-[12px] text-neutral-400 lg:mt-16">
              <span className="h-px flex-1 bg-neutral-200" />
              <span>or</span>
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                type="button"
                aria-label="Continue with Facebook"
                className="flex size-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] transition hover:border-primary-500"
              >
                <Image src="/images/facebook.svg" alt="" width={40} height={40} />
              </button>
              <button
                type="button"
                aria-label="Continue with Google"
                className="flex size-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] transition hover:border-primary-500"
              >
                <Image src="/images/google.svg" alt="" width={40} height={40} />
              </button>
            </div>

            <p className="mt-auto pt-12 text-center font-body text-[12px] text-neutral-500 lg:pt-16">
              New user?{" "}
              <Link href="/signup" className="text-primary-500 hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}