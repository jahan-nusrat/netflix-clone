import styled from 'styled-components';

export const BannerStyle = styled.div`
	color: #fff;
	object-fit: contain;
	height: 448px;
	position: relative;
`;

export const BannerContent = styled.div`
	position: absolute;
	top: 50%;
	left: 2rem;
	transform: translateY(-50%);
`;

export const BannerTitle = styled.h2`
	font-size: 3rem;
	font-weight: 800;
	padding-bottom: 0.3rem;
`;

export const BannerDes = styled.h1`
	width: 45rem;
	font-size: 0.9rem;
	line-height: 1.3;
	padding-top: 1rem;
	max-width: 400px;
`;

export const BannerBtn = styled.button`
	cursor: pointer;
	color: #fff;
	outline: none;
	border: none;
	font-weight: 700;
	border-radius: 3px;
	padding: 0.5rem 2rem;
	margin-right: 1rem;
	background-color: rgba(51, 51, 51, 0.5);
	transition: all 0.3s;
	&:hover {
		color: #000;
		background-color: #e6e6e6;
	}
`;

export const BannerFade = styled.div`
	height: 7.4rem;
	background-image: linear-gradient(360deg, transparent, rgba(37, 37, 37, 0.61), #111);
`;
