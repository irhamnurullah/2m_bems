import SplineSvg from '@/assets/svg/SplineSvg';
import React from 'react';

export default function Home() {
  return (
    <section className="relative">
      <div className="text-center space-y-6 ">
        <h1 className="font-display">Modular Design System</h1>
        <h3 className="font-body-lg">Creating each module to boost your productivity.</h3>
        <div className="absolute left-1/2 top-[65%] transform -translate-x-1/2">
          <SplineSvg />
        </div>
      </div>
    </section>
  );
}
