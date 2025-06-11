'use client'

import { Card } from 'antd';
import React from 'react';

interface PostProps {
    src: string;
    title: string;
    text: string;
    description?: string;
}

export default function Post({ src, title, text, description }: PostProps) {
    return (
        <div className='flex w-full justify-center py-8'>
            <div className='w-full max-w-4xl bg-gray-100 p-4 md:p-8 rounded-lg shadow-md'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8'>
                    <div className="w-full md:w-1/3">
                        <Card
                            cover={<img alt={title} src={src} className="w-full h-auto object-cover rounded-t-lg" />} 
                            className="w-full" // Card takes full width of its wrapper
                        >
                            <Card.Meta title={title} description={description} />
                        </Card>
                    </div>

                    {/* Text content wrapper */}
                    <div className="w-full md:w-2/3">
                        <h2 className='text-2xl font-bold mt-4 md:mt-0'>{title}</h2>
                        <p className='text-gray-700 mt-2 leading-relaxed'>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}