'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import { Collapse, CollapseProps, Layout } from 'antd';
import FooterComp from '@/components/Footer';
import CarouselComponent from '@/components/Carousel';

const itemsNest: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel nest panel',
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime alias iure voluptatum dolores suscipit fuga impedit facere ipsam, itaque atque ratione beatae similique rem nulla eligendi deserunt molestiae veniam nostrum.</p>,
  },
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Бакалаврын хөтөлбөр',
    children: <Collapse defaultActiveKey="1" size='large' items={itemsNest} expandIconPosition='end'/>,
  },
  {
    key: '2',
    label: 'Магистрын хөтөлбөр',
    children: <p>2</p>,
  },
  {
    key: '3',
    label: 'Ажлын байранд суурилсан сургалт',
    children: <p>3</p>,
  },
  {
    key: '4',
    label: 'Танилцах дадлага',
    children: <p>4</p>,
  },
  {
    key: '5',
    label: 'Мэргэжлийн дадлага',
    children: <p>5</p>,
  },
  {
    key: '6',
    label: 'Мэргэшүүлэх дадлага',
    children: <p>6</p>,
  },
  {
    key: '7',
    label: 'Олон улсын хятад хэлний ассоциацтай хамтарсан сургалт',
    children: <p>7</p>,
  },
];

const { Content } = Layout;

export default function AcademicsPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <CarouselComponent />
      <Content style={{ padding: '0 48px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }} className='mb-3 rounded-lg shadow-md'>
          <h1 className="text-3xl mb-8 font-bold">Сургалтын Хөтөлбөр</h1>
          <Collapse 
            items={items} 
            defaultActiveKey={['1']} 
            size='large' 
            expandIconPosition='end'
          />
        </div>
      </Content>
      <FooterComp />
    </Layout>
  );
}