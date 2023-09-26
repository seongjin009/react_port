import styles from './layout.module.scss';
import clsx from 'clsx';

export default function layout({ title, children }) {
	return (
		<section className={clsx(styles.layout)}>
			<figure></figure>

			<div className={clsx(styles.content)}>
				<h1>{title}</h1>
				{/*해당 컴포넌트로 특정 컨텐프를 감싸주면 감싸진내용들이 props.children으로 전달됨 */}
				{children}
			</div>
		</section>
	);
}
