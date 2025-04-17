import React from 'react'
import { socialImgs } from '../constants'

const FooterSection = () => {
  return (
		<footer className="footer">
			<div className="footer-container">
				<div className="flex flex-col justify-center items-center md:items-start">
					<a href='#hero'>Milestack - Journey of Mine</a>
				</div>
				<div className="socials">
					{socialImgs.map((img) => (
						<a href={img.url} className="icon " target="_blank" key={img.url}>
							<img src={img.imgPath} alt={img.name} />
						</a>
					))}
				</div>
				<div className="flex flex-col justify-center">
					<p
						className="text-center md:text-end"
                     
					>
						©️ {new Date().getFullYear()} @codeprnv. All rights reserved. <br />
					</p>
				</div>
			</div>
		</footer>
	);
}

export default FooterSection