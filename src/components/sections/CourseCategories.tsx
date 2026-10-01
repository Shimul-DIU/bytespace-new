const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

export default function CourseCategories() {
  return (
    <section aria-label="Course categories" className="w-full bg-white pt-[42px] pb-16">
      <div className="site-container mx-auto flex max-w-[1086px] flex-col items-center gap-[21px] px-4 min-[1081px]:px-0">
        {categoryRows.map((row, rowIndex) => (
          <ul key={rowIndex} className="flex w-full flex-wrap items-center justify-center gap-4">
            {row.map((category, index) => {
              const isMore = category === "+ More";
              return (
                <li
                  key={category}
                  className={`flex h-[43px] shrink-0 items-center font-body text-[14px] font-medium leading-[1.2] ${
                    isMore
                      ? "text-primary-700"
                      : `rounded-full px-4 text-neutral-800 ${
                          rowIndex === 0 && index === 0 ? "bg-secondary-500" : "bg-neutral-50"
                        }`
                  }`}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </section>
  );
}
