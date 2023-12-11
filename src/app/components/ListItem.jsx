import Image from 'next/image';

export default function ListItem({
	href,
	target = '_blank',
	label,
	icon,
	rel = 'noopener nofollow',
}) {
	return (
		<li>
			<Image src={icon} />
			<a href={href} target={target} rel={rel}>
				{label}
			</a>
		</li>
	);
}
