export default function CourseIntro() {
  return (
    <section className="w-full bg-white pt-[72px]">
      <div className="site-container mx-auto flex min-h-[180px] max-w-[917px] flex-col items-center gap-4 px-6 text-center min-[1081px]:px-0">
        <h2 className="font-heading text-[32px] font-semibold leading-[1.2] text-black sm:text-[44px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="body-l text-neutral-800">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
          <br className="hidden min-[918px]:block" />
          fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>
    </section>
  );
}
