import TopBar from '@/components/Navbar/TopBar';
import DeepDive from '@/components/section/DeepDive';
import Faq from '@/components/section/Faq';
import Features from '@/components/section/Features';
import Home from '@/components/section/Home';
import OurWorkFlow from '@/components/section/OurWorkFlow';

import Pricing from '@/components/section/Pricing';
import Footer from '@/components/Footer/Footer';
import React, { useEffect } from 'react';

export default function Main() {
  // useEffect(() => {
  //   const width = screen.width;
  //   const height = screen.height;
  //   console.log(width, height);
  // }, []);

  return (
    <main className="text-zinc-300 font-buch">
      <TopBar />
      <div className="h-screen">
        <Home />
      </div>
      <div className="">
        <Features />
      </div>
      <div className="h-screen">
        <OurWorkFlow />
      </div>
      <div className="h-screen">
        <Pricing />
      </div>
      <div className="h-screen p-[50px]">
        <Faq />
      </div>
      <div className="h-screen p-[50px]">
        <DeepDive />
      </div>
      <div className="h-full pt-[200px] border-21">
        <Footer />
      </div>
    </main>
  );
}
