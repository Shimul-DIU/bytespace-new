"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";

const grid = "rgba(79,157,255,0.35)";

function FormField({
  label,
  id,
  ...props
}: { label: string; id: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-s text-neutral-950">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="body-m h-[52px] w-full rounded-xl border border-neutral-100 bg-white px-6 text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20"
        {...props}
      />
    </div>
  );
}

export default function signup() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      password: String(data.get("password") ?? ""),
    };

    setLoading(true);
    setMessage("");
    // TODO: replace with a real API call
    await new Promise((r) => setTimeout(r, 600));
    console.log("register payload", payload);
    setLoading(false);
    setMessage("Account created! (demo only, no backend connected)");
  }

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-primary-600 pt-[100px] md:pt-[114px]">
      {/* grid background (all devices) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-4 pb-10 pt-4 sm:px-8 lg:grid-cols-[1fr_579px] lg:gap-10 lg:px-[120px] lg:pb-16 lg:pt-6">
        {/* left panel */}
        <section className="flex flex-col text-white lg:pt-8">
          <div className="max-w-[480px]">
            <h2 className="heading-xs text-2xl">Sign up and come in</h2>
            <p className="body-l mt-4 lg:mt-6">
              The registration process is straightforward, uncomplicated, and efficient, allowing
              users to sign up quickly, easily, and at no cost
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

        {/* right: form card (rounded box on every device) */}
        <section className="flex">
          <div className="flex w-full flex-col rounded-[24px] bg-white p-6 sm:p-10 lg:rounded-[32px] lg:p-[63px]">
            <div>
              <p className="body-m text-primary-600">Create an Account</p>
              <h1 className="heading-m mt-1 text-neutral-950">
                Welcome to
                <br />
                ByteSpace
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 lg:mt-12">
              <FormField
                label="Full Name"
                id="fullName"
                type="text"
                placeholder="Jamie Davis"
                autoComplete="name"
                required
              />
              <FormField
                label="Email"
                id="email"
                type="email"
                placeholder="designer@example.com"
                autoComplete="email"
                required
              />
              <FormField
                label="Password"
                id="password"
                type="password"
                placeholder="********"
                autoComplete="new-password"
                minLength={8}
                required
              />

              <div className="flex flex-col items-end gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="label-l h-[46px] rounded-full bg-secondary-500 px-6 text-neutral-950 transition-colors hover:bg-secondary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-60"
                >
                  {loading ? "Please wait..." : "Continue"}
                </button>
                {message && (
                  <p role="status" className="body-s text-neutral-600">
                    {message}
                  </p>
                )}
              </div>
            </form>

            <p className="body-m mt-auto pt-12 text-center text-neutral-600 lg:pt-16">
              Already have an account?{" "}
              <Link href="/login" className="text-primary-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}