import styles from './Contact.module.scss';
import clsx from 'clsx';
import Layout from '../../common/layout/Layout';

export default function Contact() {
	return (
		<Layout title={'Contact'} styleName={styles.Contact}>
			<figure></figure>
			<p>콘텍트 페이지입니다</p>
		</Layout>
	);
}
