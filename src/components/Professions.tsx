'use client'

import React from 'react';
import { Card, Row, Col } from 'antd';
import Image from 'next/image'; // Using Next.js Image for optimization

const { Meta } = Card;

const professionsData = [
	{
		name: 'Мэдээллийн технологийн инженер',
		imageSrc: '/template.png', // Replace with actual image path
		altText: 'Мэдээллийн технологийн инженер',
	},
	{
		name: 'Програм хангамжийн инженер',
		imageSrc: '/placeholder-image.png', // Replace with actual image path
		altText: 'Програм хангамжийн инженер',
	},
	{
		name: 'График дизайнер',
		imageSrc: '/placeholder-image.png', // Replace with actual image path
		altText: 'График дизайнер',
	},
];

export default function Professions() {
	return (
		<section className="py-8 px-4 md:px-8"> 
			<h2 className="text-2xl font-bold text-center mb-6">Мэргэжлүүд</h2> 
			<Row gutter={[16, 16]}> 
				{professionsData.map((profession, index) => (
					<Col key={index} xs={24} sm={12} md={8} lg={6}> 
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
										width={200} // Adjust as needed
										height={200} // Adjust as needed
										style={{ objectFit: 'cover' }} // or 'contain'
									/>
								</div>
							}
						>
							<Meta title={profession.name} />
						</Card>
					</Col>
				))}
			</Row>
		</section>
	);
}