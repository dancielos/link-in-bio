import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'] });

import styles from '../../app/globals.module.scss';

export default function Heading({ title }) {
	return <h1 className={`${fraunces.className} ${styles.h1}`}>{title}</h1>;
}
