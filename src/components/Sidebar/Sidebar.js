//Core
import React from 'react';
//Components
import Menu from './Menu/Menu';
import Profile from './Profile';
import ToggleSwitch from './ToggleSwitch';
//Styles
import styled from 'styled-components';

const Container = styled.div`
	background-color: ${({ theme }) => theme.secondary};
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 16rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Sidebar = () => (
	<Container>
		<Profile />
		<Menu />
		<ToggleSwitch />
	</Container>
);

export default Sidebar;
