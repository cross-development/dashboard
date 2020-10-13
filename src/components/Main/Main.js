//Core
import React from 'react';
//Components
import Nav from './Nav';
import Deposits from './Deposits/Deposits';
import NewDepositBtn from './NewDepositBtn';
//Data
import depositsData from 'data/deposits.json';
//Styled
import styled from 'styled-components';

const Container = styled.div`
	width: auto;
	margin-left: 16rem;
	position: relative;
	padding: 0 4rem;
`;

const Main = () => (
	<Container>
		<Nav />
		<NewDepositBtn />
		<Deposits title="Active Deposits" count={2} data={depositsData.active} />
		<Deposits title="Closed Deposits" count={8} data={depositsData.closed} />
	</Container>
);

export default Main;
