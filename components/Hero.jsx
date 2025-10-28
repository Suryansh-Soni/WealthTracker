"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ Add this line
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="pb-20 px-4 text-center max-w-3xl mx-auto">
      <div>
        <h1 className="text-5xl md:text-8xl lg:text-[150px] pb-6 gradient-title">
          Manage your Finances <br /> with Intelligence.
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          consequuntur aut laborum sit possimus, omnis nulla quidem quasi
          quaerat a molestiae nam facere quo beatae error voluptate commodi
          sequi! Sunt!
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-10">
          <Image
            src="/banner.jpg"
            alt="Banner"
            width={1280}
            height={720}
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
