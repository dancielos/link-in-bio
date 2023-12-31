import Image from 'next/image';
import styles from './listItem.module.scss';

import { motion } from 'framer-motion';

export default function ListItem({
	i,
	href,
	target = '_blank',
	label,
	icon,
	rel = 'noopener nofollow',
}) {
	const item = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 300 },
	};

	return (
		<motion.li
			className={styles['li-item']}
			variants={item}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.2 },
			}}
		>
			{/* <motion.div ini> */}
			<a className={styles.link} href={href} target={target} rel={rel}>
				<motion.div
					className={styles['link-div']}
					initial={{ transform: `translateY(3px)` }}
					animate={{ transform: `translateY(-3px)` }}
					transition={{
						delay: i + 0.5,
						repeat: Infinity,
						repeatType: 'mirror',
						duration: 2,
						ease: 'easeInOut',
					}}
				>
					<Image
						className={styles.icon}
						src={icon}
						alt={label + ' brand icon'}
					/>
					{label}
				</motion.div>
			</a>
			{/* </motion.div> */}
		</motion.li>
	);
}
