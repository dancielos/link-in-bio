'use client';

import { links } from '@/data/data';
import ListItem from './components/ListItem';
import Heading from './components/Heading';

import styles from './globals.module.scss';
import Image from 'next/image';
import champagnePagesSVG from '../../public/icons/champagne-pages-favicon_256px.svg';

import { motion } from 'framer-motion';

export default function Home() {
	const list = {
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
		hidden: { opacity: 0 },
	};

	return (
		<main className={styles.main}>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className={styles['logo-container']}>
					<Image
						className={styles['brand-logo']}
						width='64'
						height='64'
						src={champagnePagesSVG}
						alt='Champagne Pages Logo'
					/>
				</div>
				<Heading title='Champagne Pages' />
			</motion.div>
			<motion.ul
				className={styles.ul}
				initial='hidden'
				animate='visible'
				variants={list}
			>
				{links.map((link, i) => (
					<ListItem
						i={i}
						key={link.label + i}
						href={link.href}
						label={link.label}
						rel={link.rel}
						icon={link.icon}
					/>
				))}
			</motion.ul>
		</main>
	);
}
