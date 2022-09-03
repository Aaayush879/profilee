import React, { useState } from "react";
import "./Event.css";

function Blog({ event }) {
	const [registered, setRegistered] = useState(false);
	return (
		<>
			<div className='event-container'>
				<div className='event-header'>
					<p className='event-header-name'>{event.eventName}</p>
					
					<div className="date">
						<p className="b">{event.time}</p>
						<p className="b">{event.date}</p>
					</div>
				</div>
				
				<div className='event-main'>
					<p className='event-main-content'>{event.description}</p>
				</div>
				<div className='event-footer'>
					<div className="footer">
						<div className = 'mode'>
							<p>Mode: {event.mode}</p>

						</div>
						
						<div className="mode">
							<p>Venue: {event.venue}</p>
						</div>


					</div>
					<div className='blog-footer-button'>
						<button
							className='event-register-button'
							style={{
								background: registered ? "#5FCA64" : "#FFFFFF",
								color: registered ? "#FFFFFF" : "#5FCA64",
							}}
							onClick={() => setRegistered(true)}>
							<p className="r">Register</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blog;
