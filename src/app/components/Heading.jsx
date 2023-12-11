import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'] });

export default function Heading({ title }) {
	return (
		<h1 style={{ color: '#ea1100' }} className={fraunces.className}>
			{title}
		</h1>
	);
}
