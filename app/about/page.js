"use client";
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="About Us">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-12 col-xl-6 col-lg-6 d-flex flex-column gap-4">
              <div>
                <h6>MISSION</h6>

                <p>To design and build spaces that are not only functional and beautiful, but also revitalizing—spaces that breathe new life into how people live, work, and connect. We are committed to delivering architectural and construction solutions that inspire, endure, and elevate everyday experiences.</p>
              </div>

              <div>
                <h6>VISION</h6>

                <p>To be a leading force in transforming the built environment by blending creativity, innovation, and integrity—redefining what it means to create spaces that matter, for generations to come.</p>
              </div>
            </div>

            <div className="col-12 col-xl-6 col-lg-6">
              
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
