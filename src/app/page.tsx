import Hero from "@/components/sections/Hero";
import BrandStrip from "@/components/sections/BrandStrip";
import CourseIntro from "@/components/sections/CourseIntro";
import CourseCategories from "@/components/sections/CourseCategories";
import CourseGrid from "@/components/sections/CourseGrid";
import LearningPaths from "@/components/sections/LearningPaths";
import GrowthSection from "@/components/sections/GrowthSection";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <BrandStrip />
      <CourseIntro />
      <CourseCategories />
      <CourseGrid />
      <LearningPaths />
      <GrowthSection />
      <CallToAction></CallToAction>
      <Testimonials />
    </main>
  );
}
