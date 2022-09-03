import React from "react";
import "./Header.css";
import CreateIcon from '@mui/icons-material/Create';

function Header() {
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);

	const handleImageUpload = (e) => {
		const [file] = e.target.files;
		if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = (e) => {
				current.src = e.target.result;
			};
			reader.readAsDataURL(file);
		}
		
	};

	return (
		<>
			<div className='Header-upper-container'></div>
			
			
			<img ref={uploadedImage} className='Header-profile-photo'  />
			<div className="pen">
			<input
				type='file'
				id='img'
				onChange={handleImageUpload}
				accept='image/*'
				
				ref={imageUploader}
			/>
				<CreateIcon/>
			</div>
			<div className='header-profile-name'>
				<p>Dummy Name</p>
			</div>
			<div className='Header-profile-line'></div>
			
		</>
	);
}

export default Header;
