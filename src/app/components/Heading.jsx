import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'] });

export default function Heading({ title }) {
	return <h1 className={fraunces.className}>{title}</h1>;
}
