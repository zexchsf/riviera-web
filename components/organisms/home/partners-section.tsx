"use client";

import Interior1 from "@/assets/images/interior-1.jpg";
import Interior2 from "@/assets/images/interior-2.jpg";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function PartnersSection() {
  return (
    <div className="bg-[#FBFBFB]">
      <section className="max-w-7xl mx-auto py-12 lg:py-24 px-4">
        <div className="mt-32 rounded-2xl hidden xl:block">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            <div className="relative col-span-3 ">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 relative h-[300px] overflow-visible">
                  <Image
                    src={Interior1}
                    alt="Modern living room with elegant furniture"
                    className="rounded-[10px] object-cover w-full h-full shadow-lg relative z-10"
                    fill
                  />
                  <div className="absolute -bottom-5 -left-5 w-[170px] h-[118px] bg-[#54B959] rounded-tl-xl rounded-br-xl  opacity-80 z-0"></div>
                </div>
                <div className="relative col-span-1 mt-7 h-[300px]">
                  <Image
                    src={Interior2}
                    alt="Modern interior staircase with chandelier"
                    className="rounded-[10px] object-cover w-full h-full shadow-lg"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDownRight className="text-[#54B959] text-2xl" />
                <span className="text-[#6B6B6B] text-sm font-medium uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#010101] leading-tight mb-4">
                <span className="whitespace-nowrap">Built on Partnership</span>{" "}
                <span className="whitespace-nowrap">and Trust</span>
              </h2>

              <p className="text-xl text-[#6B6B6B] leading-relaxed mb-6">
                At Riviera Homes, we see our clients as partners, not just
                customers. We grow by working with others — from agents and
                developers to clients and communities — grounding every decision
                in empathy, honesty, and collaboration.
              </p>

              <Link
                href="/about-us"
                className="bg-[#181818] hover:bg-[#181818]/80 text-white !px-8 !py-4 rounded-full font-medium transition-colors duration-300 text-base"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
