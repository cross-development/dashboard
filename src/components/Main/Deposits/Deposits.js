//Core
import React from 'react';
//Components
import Deposit from './Deposit';
import SortingBar from './SortingBar';
import AllDepositsBtn from './AllDepositsBtn';
//Styles
import styled from 'styled-components';

const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.textColor};
	font-size: 1.3rem;
	display: flex;
	align-items: center;
`;

const DepositsCount = styled.div`
	margin-left: 1rem;
	font-size: 1rem;
	background-color: ${({ theme }) => theme.header};
	color: ${({ theme }) => theme.headerNumber};
	width: 28px;
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
`;

const Deposits = ({ title, data, count }) => (
	<div>
		<Title>
			{title}
			<DepositsCount>{count}</DepositsCount>
		</Title>

		<SortingBar />
		{data.map(deposit => (
			<Deposit data={deposit} key={deposit.property.address.street} />
		))}

		<AllDepositsBtn title={title} />
	</div>
);

export default Deposits;
