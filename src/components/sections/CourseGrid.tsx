import Image from "next/image";

const avatarImages = [1, 2, 3, 4].map(
  (number) => `/images/Ellipse%20%28${number}%29.png`,
);

const courses = [
  { title: "Learn Figma from Basic", image: "/images/course-figma.png" },
  { title: "Build Digital Asset", image: "/images/course-digital-assets.png" },
  { title: "the Power of Big Data", image: "/images/course-big-data.png" },
  { title: "Balancing Productivity and Mindfulness", image: "/images/course-productivity.png" },
  { title: "Mastering Money Management", image: "/images/course-money-management.png" },
  { title: "From Idea to Startup Success", image: "/images/course-startup.png" },
];

function CourseCard({ title, image }: (typeof courses)[number]) {
  return (
    <article className="min-h-[384px] rounded-[24px] border border-[#CED0D3] bg-white p-[15px]">
      <div className="relative aspect-[341/195] w-full overflow-hidden rounded-[12px]">
        <Image
          src={image}
          alt={`${title} course thumbnail`}
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc((100vw - 104px) / 2), calc(100vw - 64px)"
          className="object-cover"
        />
        <div className="absolute inset-x-3 bottom-5 z-10 flex items-center justify-between min-[1101px]:left-[13px] min-[1101px]:right-4">
          <span className="flex h-[26px] min-[1101px]:w-[81px] max-[1100px]:w-auto items-center justify-center rounded-[24px] border-0 bg-[#F6F6F699] px-3 font-body text-[12px] leading-[14px] text-neutral-600 backdrop-blur-[8px] max-[1100px]:px-2 max-[1100px]:text-[10px]">
            17 Lessons
          </span>
          <span className="flex h-[26px] min-[1101px]:w-[109px] max-[1100px]:w-auto items-center justify-center rounded-[24px] border-0 bg-[#F6F6F699] px-3 font-body text-[12px] leading-[14px] text-neutral-600 backdrop-blur-[8px] max-[1100px]:px-2 max-[1100px]:text-[10px]">
            2 hours 16 mins
          </span>
          <span className="flex h-[26px] min-[1101px]:w-[101px] max-[1100px]:w-auto items-center justify-center rounded-[24px] border-0 bg-[#F6F6F699] px-3 font-body text-[12px] leading-[14px] text-neutral-600 backdrop-blur-[8px] max-[1100px]:px-2 max-[1100px]:text-[10px]">
            59 Comments
          </span>
        </div>
      </div>

      <div className="mt-5 flex h-6 items-center justify-between gap-2">
        <h3 className="min-w-0 truncate font-heading text-[20px] font-semibold leading-6 text-black">
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-1 text-[18px] leading-6 text-neutral-600">
          <span>4.5</span>
          <Image src="/images/course-star.png" alt="" width={16} height={16} />
        </div>
      </div>

      <p className="h-4 font-body text-[12px] leading-4 text-neutral-500">
        by <span className="text-primary-700">purepearl studio</span>
      </p>

      <div className="mt-5 flex h-8 items-center gap-3">
        <span className="flex h-8 shrink-0 items-center gap-2 rounded-full bg-neutral-50 px-3 font-body text-[12px] leading-4 text-neutral-700">
          <Image src="/images/course-level.png" alt="" width={13} height={14} />
          Beginner
        </span>
        <div className="flex items-center">
          {avatarImages.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full object-cover [&:not(:first-child)]:-ml-2"
            />
          ))}
          <span className="z-10 -ml-2 flex size-8 items-center justify-center rounded-full bg-secondary-500 font-body text-[12px] font-medium text-neutral-950">
            26+
          </span>
        </div>
      </div>

      <p className="mt-4 flex h-6 items-center gap-1 font-body">
        <span className="text-[20px] font-bold leading-6 text-primary-700">$25</span>
        <span className="text-[12px] leading-4 text-neutral-500">/lifetime</span>
      </p>
    </article>
  );
}

export default function CourseGrid() {
  return (
    <section id="courses" aria-label="Featured courses" className="mt-[13px] w-full bg-white pb-[72px]">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}
