// filepath: /Users/myagmarsurennyamkhuu/web/mslri-web/src/app/contact/page.tsx
'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import { Layout } from 'antd';
import FooterComp from '@/components/Footer';

const { Footer, Content } = Layout;

export default function ContactPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <Content style={{ padding: '0 48px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <h1 className="text-3xl font-bold">Холбоо Барих</h1>
          <p>Манай хаяг, утасны дугаар, имэйл хаяг...</p>
          {/* Add contact form or map here */}
        </div>
      </Content>
      <FooterComp />
    </Layout>
  );
}