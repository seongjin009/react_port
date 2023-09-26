import styles from './Header.module.scss';

export default function Footer() {
	return (
		<header className={styles.header}>
			<h1>LOGO</h1>
			<ul>
				<li>Department</li>
				<li>Gallery</li>
				<li>Youtube</li>
				<li>Members</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}
