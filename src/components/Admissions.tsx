'use client'

import React from 'react';
import GradientButton from './GradientButton';

export default function Admissions() {
  return (
    <section className="flex w-full">
      <div
        className="flex flex-col justify-center w-full p-4 md:p-8 bg-gray-100"
        style={{
          backgroundImage: "url('/admission_banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
        }}
      >
        <div className="flex flex-col justify-center bg-white bg-opacity-80 px-6 mt-12 my-12 py-12 rounded-xl h-fit w-full md:w-1/4 ml-4 md:ml-12 md:py-4">
            <h2 className="text-4xl font-bold text-left">Элсэлт</h2>
            <p className="text-xl text-left my-4">
                Манай сургуулийн элсэлтийн үйл явцын талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл доорх холбоосоор орно уу.
            </p>
            <GradientButton size="large" className='w-fit font-bold' href='/'>
                Дэлгэрэнгүй
            </GradientButton>
        </div>
      </div>
    </section>
  );
}
