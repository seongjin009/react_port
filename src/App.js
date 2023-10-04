import Header from './components/common/header/Header';
import { Route, Switch } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import './styles/Global.scss';
import Members from './components/sub/members/Members';
import Contact from './components/sub/Contact/Contact';
import Gallery from './components/sub/gallery/Gallery';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					{/* 메인 페이지 전용 */}
					<Header />
				</Route>
				{/* 서브 페이지 전용 */}

				<Route path='/'>
					<Header />
				</Route>
			</Switch>
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/Members' component={Members} />
			<Route path='/Contact' component={Contact} />
			<Route path='/Gallery' component={Gallery} />
		</>
	);
}

export default App;
