import React from 'react';

export default function Features() {
  return (
    <section className="mt-[100px] px-10">
      <div className="space-y-6 text-center">
        <h1 className="font-h1 ">Advanced Features</h1>
        <h3 className="font-body-lg">Designed to provide users with enhanced or specialized functionalities to specific needs or scenarios.</h3>
        <CardFeatures />
        <CardFeatures />
        <CardFeatures />
      </div>
    </section>
  );
}

function CardFeatures() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-[60px] max-w-screen-xl">
        <img src="/image/dummy-image.png" />
        <div className="space-y-6">
          <h2 className="text-left font-h2">Lorem Ipsum</h2>
          <p className="text-left font-body-lg">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          </p>
        </div>
      </div>
    </div>
  );
}
