'use client';

import React from 'react';
import NavBar from "@/components/NavBar";
import { Layout } from "antd";
import CarouselComponent from '@/components/Carousel';
import Professions from '@/components/Professions';
import Admissions from '@/components/Admissions';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

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

      <Footer className="text-center bg-gray-100">
        MLSRI ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}
