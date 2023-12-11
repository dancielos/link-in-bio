import { links } from '@/data/data';
import ListItem from './components/ListItem';
import Heading from './components/Heading';

export default function Home() {
	return (
		<main>
			<div>
				<img width='124' height='124' />
				<Heading title='Champagne Pages' />
			</div>
			<ul>
				{links.map((link, i) => (
					<ListItem
						key={link.label + i}
						href={link.href}
						label={link.label}
						rel={link.rel}
						icon={link.icon}
					/>
				))}
			</ul>
		</main>
	);
}
