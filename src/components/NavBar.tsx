'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Drawer, Button } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
	{
		label: <Link href="/">Нүүр</Link>,
		key: 'home',
	},
	{
		label: <Link href="/about">Бидний тухай</Link>,
		key: 'about',
	},
	{
		label: <Link href="/academics">Сургалт</Link>,
		key: 'academics',
	},
	{
		label: <Link href="/admissions">Элсэлт</Link>,
		key: 'admissions',
	},
	{
		label: <Link href="/contact">Холбоо барих</Link>,
		key: 'contact',
	},
];

const NavBar: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onCloseDrawer = () => {
		setVisible(false);
	};

	useEffect(() => {
		const handleResize = () => {
			// You can adjust the breakpoint (768px) as needed
			setIsMobile(window.innerWidth < 768);
		};

		// Set initial state
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="flex items-center justify-between w-full bg-white px-8 shadow-2xl z-20 mb-1 top-0 sticky">
			<div className="flex items-center">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="School Logo"
						width={80}
						height={80}
					/>
				</Link>
			</div>

			{isMobile ? (
				<>
					<Button
						type="primary"
						onClick={showDrawer}
						icon={<MenuOutlined />}
					/>
					<Drawer
						title="Menu"
						placement="right"
						onClose={onCloseDrawer}
						open={visible}
						styles={{ body: { padding: 0 } }} // Changed from bodyStyle
					>
						<Menu
							mode="inline"
							items={items}
							onClick={onCloseDrawer}
							className="border-r-0"
						/>
					</Drawer>
				</>
			) : (
				<Menu mode="horizontal" items={items} className="border-b-0 " />
			)}
		</div>
	);
};

export default NavBar;