import { NavLink } from 'react-router-dom';
import logo from '../imgs/twitter.png';

import { supabase } from '../client';
import { useEffect } from 'react';

export default function Menu() {

	useEffect(() => {
		fetchUsers();
	}, []);

	let fetchUsers = async () => {
		const {data: users, error} = await supabase
		.from('users')
		.select('*')
		console.log(users[0                                                                                                                                                                                                                  ]);
		if(error) {
			console.log(error);
		}
	}



	return (
		<div className="menu">
			<img src={logo} height={30} width={30} alt="twitter logo" />
			<ul>
				<li>
					<NavLink className="li-link" to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className="li-link" to="/explore">
						Explore
					</NavLink>
				</li>
				<li>
					<NavLink className="li-link" to="/notifications">
						Notifications
					</NavLink>
				</li>
				<li>
					<NavLink className="li-link" to="/messages">
						Messages
					</NavLink>
				</li>
				<li>
					<NavLink className="li-link" to="/bookmarks">
						Bookmarks
					</NavLink>
				</li>
				<li>
					<NavLink className="li-link" to="/profile">
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink className="li-link" to="/more">
						More
					</NavLink>
				</li>
			</ul>
			<button className="primary-button">Tweet</button>
			<div className="menu-footer">
				<div className="profile-user">
					<img
						src="https://pbs.twimg.com/profile_images/1302034886610628609/RBXxMky6_400x400.jpg"
						alt="profile-pic"
					/>
					<div className="profile-user-name">
						<p className="name">maurisio</p>
						<p className="username">@MauriiMonta</p>
					</div>
				</div>
			</div>
		</div>
	);
}
