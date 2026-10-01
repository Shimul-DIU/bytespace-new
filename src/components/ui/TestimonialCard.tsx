import Image from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string; // e.g. "/images/avatar-sarah.png"
};

export default function TestimonialCard({ name, role, quote, avatar }: Testimonial) {
  return (
    <figure className="flex h-full w-full flex-col rounded-[28px] border border-[#E5E7EB] bg-white/80 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] backdrop-blur-sm">
      <div className="flex justify-center">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={80}
          height={80}
          className="size-20 rounded-full bg-white object-cover"
        />
      </div>

      <figcaption className="mt-6 text-center">
        <p className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-950">
          {name}
        </p>
        <p className="mt-1 font-body text-[16px] font-normal text-[#0033CC]">{role}</p>
      </figcaption>

      <blockquote className="mt-5 flex-1 font-body text-[17px] leading-[1.8] text-neutral-600">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
}
