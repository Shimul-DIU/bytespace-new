import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#25253A]">
      <div className="mx-auto min-h-[525px] max-w-[1440px] px-6 py-16 md:px-12 xl:px-[120px]">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
            <div className="w-full max-w-[505px]">
              <Link href="/" aria-label="ByteSpace home" className="flex items-center gap-2">
                <Image src="/images/logo.svg" alt="" width={29} height={32} priority />
                <span className="font-clash-display text-[28px] font-bold leading-none tracking-[-0.04em] text-[#25253A]">
                  ByteSpace
                </span>
              </Link>

              <p className="mt-6 font-body text-[14px] leading-6 text-[#25253A]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              <form className="mt-11 flex max-w-[505px] items-center gap-6">
                <label className="flex h-[52px] min-w-0 flex-1 items-center rounded-full border border-[#CED0D3] px-6">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent font-body text-[14px] text-[#25253A] outline-none placeholder:text-[#4B4C53]"
                  />
                </label>
                <button type="submit" className="h-[48px] shrink-0 rounded-full bg-[#CBFC01] px-6 font-body text-[16px] font-medium text-[#25253A] transition hover:bg-[#B8E900]">
                  Search
                </button>
              </form>

              <p className="mt-6 max-w-[470px] font-body text-[12px] leading-5 text-[#25253A]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-[96px] lg:pt-12">
              {footerGroups.map((group) => (
                <div key={group.links[0]}>
                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="font-body text-[14px] text-[#25253A] transition hover:text-[#003BE2]">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-[#CED0D3] pt-6 text-[12px] text-[#25253A]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>@ 2023 ByteSpace. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="transition hover:text-[#003BE2]">Privacy Policy</Link>
                <Link href="#" className="transition hover:text-[#003BE2]">Terms of Service</Link>
                <Link href="#" className="transition hover:text-[#003BE2]">Cookies Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
