import React from "react";
import "./Email.css";

const Email = () => {
	return (
		<div className="email">
			<div className="email__contents">
				<a
					className="email__anchor"
					href="mailto:astrokachi@gmail.com subject=subject text"
					target={"_blank"}
					rel="noreferrer"
				>
					astrokachi@gmail.com
				</a>
				<div className="email--line" />
			</div>
		</div>
	);
};

export default Email;
