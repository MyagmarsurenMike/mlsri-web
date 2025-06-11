'use client';

import React from 'react';
import NavBar from "@/components/NavBar";
import { Layout } from "antd";
import CarouselComponent from '@/components/Carousel';
import Professions from '@/components/Professions';
import Admissions from '@/components/Admissions';
import FooterComp from '@/components/Footer';
import Post from '@/components/Post';



const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#fff', 
  fontFamily: 'Noto Sans, sans-serif', 
  color: '#333', // Dark text color for better readability
  fontSize: '16px', // Base font size
};

export default function Home() {
  return (
    <Layout style={layoutStyle} className="min-h-screen grid grid-rows-[auto_1fr_auto]">

      <NavBar />

      <CarouselComponent/>

      <Professions />

      <Admissions />

      <Post 
        src='/logo.png' 
        title='ХНХИС' 
        text='1993 оноос эхлэн дээд боловсролын сургалт явуулж буй Хөдөлмөр, нийгмийн харилцааны дээд сургууль нь Монгол Улсад хөдөлмөр, 
        нийгмийн харилцааны чиглэлээр мэргэшсэн боловсон хүчин бэлтгэхэд тэргүүлэх үүрэг гүйцэтгэж ирсэн. Тус сургууль нь хөдөлмөрийн эдийн засаг, хөдөлмөрийн аюулгүй байдал, эрүүл ахуй, нийгмийн хамгаалал, хүний нөөц, нягтлан бодох бүртгэл, бизнесийн удирдлага зэрэг салбарт шаардлагатай мэдлэг, ур чадварыг эзэмшүүлж, онол, практикийг хослуулан, олон улсын түвшинд өрсөлдөх чадвартай, 
        мэргэжлийн ёс зүйтэй, хариуцлагатай мэргэжилтэн бэлтгэхийг эрхэм зорилгоо болгодог.'
      /> 
      <FooterComp />
    </Layout>
  );
}
