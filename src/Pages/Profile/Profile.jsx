import React, { useState } from "react";
import "./Profile.css";
import Header from "../../component/Header/Header";
import EditProfile from "../../component/EditProfile/EditProfile";
import Blogs from "../../component/Blogs/Blogs";
import Events from "../../component/Events/Events";

function Profile() {
	const [state, setState] = useState("BLOGS");

	return (
		<div className='profile-main-container'>
			<div className='profile-main-header'>
				<Header />
				<div className='profile-main-navbar'>
					<div
						className='profile-main-navbar-blog'
						style={{ background: state === "BLOGS" ? "#ffc776" : "#FFFFFF" }}
						onClick={() => setState("BLOGS")}>
						<p className="ab">My blogs</p>
					</div>
					<div
						className='profile-main-navbar-events'
						style={{ background: state === "EVENTS" ? "#ffc776" : "#FFFFFF" }}
						onClick={() => setState("EVENTS")}>
						<p className="ab">Registered events</p>
					</div>
				</div>
				<div className='Header-profile-line'></div>
				{state === "BLOGS" ? <Blogs /> : <Events />}
			</div>
			<EditProfile />
		</div>
	);
}

export default Profile;
