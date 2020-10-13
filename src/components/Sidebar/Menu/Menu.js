//Core
import React from 'react';
//Components
import MenuItem from './MenuItem';
//Styles
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 2rem;
	width: 100%;
`;

const Menu = () => (
	<Container>
		<MenuItem title="Home" icon="home" />
		<MenuItem title="Deposits" icon="file-multiple" active />
		<MenuItem title="Offers" icon="gift" />
		<MenuItem title="Payments" icon="bank" />
		<MenuItem title="Settings" icon="cog" />
	</Container>
);

export default Menu;
