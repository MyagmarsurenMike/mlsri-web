'use client'

import React from 'react';
import { Card, Row, Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Meta } = Card;

const professionsData = [
	{
		name: 'Бакалавр',
		imageSrc: '/template.png',
		altText: 'Мэргэжил1',
		link: '/bachelor', // Replace with actual page path
	},
	{
		name: 'Магистр',
		imageSrc: '/logo.png',
		altText: 'Мэргэжил2',
		link: '/master', // Replace with actual page path
	},
	{
		name: 'Мэргэжлийн сургалт',
		imageSrc: '/placeholder-image.png',
		altText: 'Мэргэжил3',
		link: '/training', // Replace with actual page path
	},
	{
		name: 'Бусад',
		imageSrc: '/placeholder-image.png',
		altText: 'Мэргэжил4',
		link: '/other', // Replace with actual page path
	},
];

export default function Professions() {
	return (
		<section className="py-8 px-4 md:px-8"> 
			<h2 className="text-2xl font-bold text-center mb-6">Хөтөлбөрүүд</h2> 
			<Row gutter={[16, 16]}> 
				{professionsData.map((profession, index) => (
					<Col key={index} xs={24} sm={12} md={8} lg={8}> 
						<Link href={profession.link}>
							<Card
								hoverable
								cover={
									<div
										style={{
											height: 200,
											overflow: 'hidden',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Image
											alt={profession.altText}
											src={profession.imageSrc}
											width={200} 
											height={200} 
											style={{ objectFit: 'cover' }} 
										/>
									</div>
								}
							>
								<Meta title={profession.name} />
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</section>
	);
}