"use client";
import React from "react";
import WhatWeDoSection from "./WhatWeDoSection";
import AboutUsSection from "./AboutUsSection";
import RecentWorkSection from "./RecentWorkSection";
import TestimonialsSection from "./TestimonialsSection";
import GetStartedSection from "./GetStartedSection";
import { AnimatePresence, motion } from "framer-motion";

const Homepage = () => {
  return (
    <AnimatePresence>
      <motion.div className="">
        <GetStartedSection />
        <WhatWeDoSection />
        <AboutUsSection />
        <RecentWorkSection />
        <TestimonialsSection />
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;
