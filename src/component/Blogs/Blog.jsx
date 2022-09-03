import React, { useState } from "react";
import "./Blog.css";
import LIKE from "../../media/likeVector.svg";
import ACTIVELIKE from "../../media/activeLikeVector.svg";
import {HiOutlineChat ,HiOutlineBookmark } from 'react-icons/hi';
import { BsFillBookmarkFill} from 'react-icons/bs';
import { pink } from "@mui/material/colors";


function Blog({ blog }) {
	const [liked, setLiked] = useState(false);
	const [count , setCount] = useState(blog.likes)
	
	
	const onChange=()=>{
		setLiked((prev)=>!prev);
		setCount(count+1);
		
	}
	return (
		<>
			<div className='blog-container'>
				<div className='blog-header'>
					<p className='blog-header-name'>{blog.author.name}</p>
					<p className='blog-header-time'>{blog.createdAt}</p>
				</div>
				<div className='blog-main'>
					<p className='blog-main-content'>{blog.description}</p>
				</div>
				<div className='blog-footer'>
					<div className="we">
						<div className='blog-footer-like'>
							<img
							src={liked ? ACTIVELIKE : LIKE}
							alt='like'
							onClick={onChange}
							className='lik'
							/>
							<p className='blog-likesCounter'>{count}</p>
						</div>
						<div className="comments">
							<HiOutlineChat className="chat"/>
							<p className="blog-comment">{blog.comments}</p>
						</div>

					</div>
					<div>
						<HiOutlineBookmark className="book" color='black'
						/>
					</div>
					
					
				</div>
			</div>
		</>
	);
}

export default Blog;
