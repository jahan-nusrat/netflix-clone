import styled from 'styled-components';

export const StyleRow = styled.div`
	margin-left: 20px;
	color: #fff;
`;

export const ImgPoster = styled.img`
	width: 100%;
	object-fit: contain;
	max-height: 100px;
	margin-right: 10px;
	transition: transform 450ms;
	&:hover {
		transform: scale(1.08);
	}
`;

export const RowPosters = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px;
	::-webkit-scrollbar {
		display: none;
	}
	.large-row {
		max-height: 250px;
		&:hover {
			transform: scale(1.09);
		}
	}
`;
