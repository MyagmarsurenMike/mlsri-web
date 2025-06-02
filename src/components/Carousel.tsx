import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const carouselImages = [
//   {
//     src: "/482321154_1156355746277713_2950412439530384056_n.jpg", 
//     alt: "Carousel Image 2",
//   },
  {
    src: "/template.png",
    alt: "Carousel Image 3",
  },
  {
    src: "/template2.png",
    alt: "Carousel Image 4",
  }
];

export default function CarouselComponent() {
  return (
    <Carousel autoplay className="mb-4 bg-gray-200">
      {carouselImages.map((image, index) => (
        <div key={index}>
          <div className='flex items-center justify-center w-full h-full'>
            <Image
              src={image.src}
              alt={image.alt}
              width={1080}
              height={566}
              className="object-contain" 
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}