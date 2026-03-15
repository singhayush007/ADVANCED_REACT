import React, { Suspense, lazy } from "react";

const Hero = lazy(() => import("../components/Hero.jsx"));
const Courses = lazy(() => import("../components/Courses.jsx"));
const Stats = lazy(() => import("../components/Stats.jsx"));
const Testimonials = lazy(() => import("../components/Testimonials.jsx"));
const FAQ = lazy(() => import("../components/FAQ.jsx"));
const VideoSection = lazy(() => import("../components/VideoSection.jsx"));

const Home = () => {
  return (
    <div>

      <Suspense fallback={<h2>Loading Hero...</h2>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<h2>Loading Courses...</h2>}>
        <Courses />
      </Suspense>

      <Suspense fallback={<h2>Loading Stats...</h2>}>
        <Stats />
      </Suspense>

      <Suspense fallback={<h2>Loading Testimonials...</h2>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<h2>Loading FAQ...</h2>}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<h2>Loading Video...</h2>}>
        <VideoSection />
      </Suspense>

    </div>
  );
};

export default Home;