//Core
import React from 'react';
//styled
import styled from 'styled-components';

const AddButton = styled.button`
	background-color: ${({ theme }) => theme.colorGreen};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	position: absolute;
	top: 6rem;
	right: 7rem;
	border: none;
	cursor: pointer;
`;

const AddIcon = styled.span`
	color: #fff;
	font-size: 30px;
`;

const NewDepositBtn = () => (
	<AddButton>
		<AddIcon className="iconify" data-inline="false" data-icon={`mdi-light:plus`}>
			+
		</AddIcon>
	</AddButton>
);

export default NewDepositBtn;
