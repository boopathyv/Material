import React from 'react';
import '../styles/components/ScreenBackGround.css';

function ScreenBackGround(props){
	return <div className={props.classes?props.classes+' screen_background':'screen_background'}
				style={{justifyContent:props.position}}>
				<div className="login_content_div">
					{props.children}
				</div>
			</div>;
}


ScreenBackGround.defaultProps = {
	classes: "",
	position: "center",//{flex-start/center/flex-end}
	height:"500",
	width:"350"
};

export default ScreenBackGround;