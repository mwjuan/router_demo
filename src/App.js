import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Menu, Tabs } from 'antd';
import 'antd/dist/antd.css';
import Back from './Back'
const { TabPane } = Tabs;

function App() {
	let location = useLocation();
	const [selectedKeys, setSelectedKeys] = useState('home');

	React.useEffect(() => {
		let paths = location.pathname.split('/');
		setSelectedKeys(paths[1] ? paths[1] : 'home');
	}, [location])

	return (
		<div className="App" style={{ margin: 30 }}>
			<h1>{location.pathname}</h1>
			<Menu mode="horizontal" style={{ padding: '0 24px' }} selectedKeys={[selectedKeys]}>
				<Menu.Item key='home'><Link to="/">home</Link></Menu.Item>
				<Menu.Item key='user'><Link to="/user">user</Link></Menu.Item>
				<Menu.Item key='about'><Link to="/about">about</Link></Menu.Item>
			</Menu>
			<Switch>
				<Route path='/user/info'>
					<UserInfo />
				</Route>
				<Route path='/user'>
					<User />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
			<Back />
		</div >
	);
}

let Home = () => {
	return (
		<h1>home</h1>
	);
}

let User = () => {
	return (
		<div>
			<h1>user</h1>
			<Link to='/user/info'>get info</Link>
		</div>
	);
}

let About = () => {
	return (
		<div>
			<Tabs>
				<TabPane tab='tab1' key='t1'>tab1</TabPane>
				<TabPane tab='tab2' key='t2'>tab2</TabPane>
				<TabPane tab='tab3' key='t3'>tab3</TabPane>
				<TabPane tab='tab4' key='t4'>tab4</TabPane>
			</Tabs>
		</div>
	);
}

let UserInfo = () => {
	return (
		<div>
			<h1>userInfo</h1>
			<p>mwj</p>
		</div>
	);
}

export default App;
