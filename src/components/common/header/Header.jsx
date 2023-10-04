//className에 문자가 변수가 치환되고 있기 때문에 여러개의 변수값을 클래스로 등록하기 편하고, 클래스연결을 상황연산자로 조건처리도 가능

import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

export default function Header({ isMain }) {
	console.log(isMain);
	return (
		// header메인에서 호출되면 main클래스 추가, 서브에서 호출되면 sub클래스 추가
		<header className={clsx(styles.header, isMain ? styles.main : styles.sub)}>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul>
				<li>
					<NavLink to='/department' activeClassName={styles.active}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={styles.active}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={styles.active}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeClassName={styles.active}>
						Members
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={styles.active}>
						Contact
					</NavLink>
				</li>
			</ul>
		</header>
	);
}
