import TestimonialCard, { type Testimonial } from "@/components/ui/TestimonialCard";

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/Ellipse%20(1).png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/Ellipse%20(2).png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/Ellipse%20(3).png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F4F6] py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_10%,rgba(214,247,101,0.8),rgba(214,247,101,0.2)_35%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 xl:px-[120px]">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <h2 className="max-w-[520px] font-heading text-[46px] font-semibold leading-[0.96] tracking-[-0.03em] text-neutral-950 lg:text-[72px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[560px] pt-4 font-body text-[18px] leading-[1.7] text-neutral-600 lg:pt-8">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
