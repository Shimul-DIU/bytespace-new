import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BrandStrip from "@/components/sections/BrandStrip";
import CourseIntro from "@/components/sections/CourseIntro";
import CourseCategories from "@/components/sections/CourseCategories";
import CourseGrid from "@/components/sections/CourseGrid";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <BrandStrip />
      <CourseIntro />
      <CourseCategories />
      <CourseGrid />
    </main>
  );
}
