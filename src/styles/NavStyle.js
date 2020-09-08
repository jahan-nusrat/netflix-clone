import styled from 'styled-components';

export const NavLogo = styled.img`
	width: 110px;
	object-fit: contain;
	margin-left: 10px;
`;

export const StyleNav = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	transition: all 0.4s ease-in;
`;
