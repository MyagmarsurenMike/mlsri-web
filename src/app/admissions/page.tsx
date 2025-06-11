// filepath: /Users/myagmarsurennyamkhuu/web/mslri-web/src/app/admissions/page.tsx
'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import { Layout } from 'antd';
import FooterComp from '@/components/Footer';
// You might want to import your Admissions component if it's meant for this page
// import AdmissionsComponent from '@/components/Admissions';


const { Footer, Content } = Layout;

export default function AdmissionsPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <Content style={{ padding: '0 48px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <h1 className="text-3xl font-bold">Элсэлтийн Мэдээлэл</h1>
          <p>Элсэлтийн журам, шаардлагатай бичиг баримтууд...</p>
          {/* <AdmissionsComponent /> */} {/* If your existing Admissions component is for this page */}
        </div>
      </Content>
      <FooterComp />
    </Layout>
  );
}