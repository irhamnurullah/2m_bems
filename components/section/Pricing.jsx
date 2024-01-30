import PriceTag from '@/assets/svg/PriceTag';
import React from 'react';

export default function Pricing() {
  return (
    <section className="mt-[100px] px-10">
      <div className="space-y-6 text-center mb-20">
        <h1 className="font-h1 ">Pricing</h1>
        <h3 className="font-body-lg">Pay once, yours forever</h3>
      </div>
      <div className="grid grid-cols-2 ">
        <div className=" place-self-center">
          <PriceTag />
        </div>
        <div className="space-y-6">
          <PriceCard />
          <PriceCard />
        </div>
      </div>
    </section>
  );
}

function PriceCard() {
  return (
    <div>
      <h3 className="p-1 bg-purple-600 inline-block">BEST VALUE</h3>
      <div className="border border-purple-400 p-4 space-y-2 rounded-b-[10px]">
        <h4>Plan A</h4>
        <h3>$2.500 USD</h3>
        <ul className="pt-2 space-y-2">
          <li>Interactive Components</li>
          <li>Auto Layout, Properties, Variants</li>
          <li>Specialy made for one company</li>
          <li>Get 30+ modules</li>
          <li>Get maintenance treatment</li>
        </ul>
      </div>
    </div>
  );
}
