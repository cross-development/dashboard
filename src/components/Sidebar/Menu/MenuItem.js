//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styled from 'styled-components';

const Container = styled.div`
	border-left: 3px solid ${props => (props.active ? props.theme.activeMenu : 'transparent')};
	width: 100%;
	padding: 0.3rem;
	padding-left: 2rem;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 1rem;
	transition: 0.2s all ease-in-out;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const Icon = styled.span`
	color: ${props => (props.active ? props.theme.activeMenu : '#aaa5a5')};
	font-size: 1rem;
	margin-right: 1rem;
`;

const Title = styled.h1`
	color: ${props => (props.active ? props.theme.activeMenu : '#aaa5a5')};
	font-size: 0.9rem;
	font-weight: 300;
`;

const MenuItem = ({ title, active, icon }) => (
	<Container active={active}>
		<Icon
			active={active}
			className="iconify"
			data-inline="false"
			data-icon={`mdi-light:${icon}`}
		></Icon>

		<Title active={active}>{title}</Title>
	</Container>
);

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	active: PropTypes.bool,
	icon: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
	active: false,
};

export default MenuItem;
