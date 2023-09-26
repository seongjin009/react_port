import clsx from 'clsx';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

//className에 문자가 변수가 치환되고 있기 때문에 여러개의 변수값을 클래스로 등록하기 편하고, 클래스연결을 상황연산자로 조건처리도 가능

export default function Footer() {
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>
			<ul>
				<li>
					<NavLink to='/department'>Department</NavLink>{' '}
				</li>
				<li>
					<NavLink to='/Gallery'>Gallery</NavLink>
				</li>
				<li>
					<NavLink to='/Youtube'>Youtube</NavLink>
				</li>
				<li>
					<NavLink to='/Members'>Members</NavLink>
				</li>
				<li>
					<NavLink to='/Contact'>Contact</NavLink>
				</li>
			</ul>
		</header>
	);
}
