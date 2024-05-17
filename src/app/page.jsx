"use client";
import {
  Banner,
  ClientSlider,
  Product,
  Metrics,
  Thenative,
  Piechat,
  Mechanism,
  Technology,
} from "@/components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Banner />
      <ClientSlider />
      <Product />
      <Metrics />
      <Thenative />
      <Piechat />
      <Mechanism />
      <Technology />
    </>
  );
}
