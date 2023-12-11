import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'Champagne Pages Link in Bio',
	description: 'Social Links for Champagne Pages',
};

import styles from './globals.module.scss';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} ${styles.body}`}>
				{children}
			</body>
		</html>
	);
}
