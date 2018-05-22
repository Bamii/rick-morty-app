import styled from "styled-components";

export const Container = styled.div`
	height: 90px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	box-shadow: 0 1px 20px #dbdde0;
	background: white;
	box-sizing: border-box;
	padding: 0 10px 0 30px;

	a {
		color: green;
	}

	@media (max-width: 590px) {
		padding: 0 30px;
	}
`;

export const Img = styled.img`
	height: 70px;
	width: auto;
`;

export const Hamburger = styled.div`
	font-size: x-large !important;
	cursor: pointer;
	z-index: 1000;
`;

export const Cancel = styled.span`
	position: fixed;
	color: white;
	top: 36px;
	right: 30px;
	font-size: x-large;
	cursor: pointer;
`;

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: url('http://res.cloudinary.com/bambam/image/upload/v1526930291/portal.png');
	background-repeat: round;
	color: white;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	
	div {
		height: 40vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	a {
		color: white;
		font-size: large;
	}

	hr {
		border: 0;
		height: 1px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
		width: 80%;
	}
`;