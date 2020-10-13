//Core
import React from 'react';
//Assets
import Image from 'assets/images/user.png';
//Styles
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 5rem;
`;

const ProfileImg = styled.img`
	height: 5rem;
`;

const ProfileName = styled.h1`
	font-size: 1rem;
	font-weight: 300;
	color: ${({ theme }) => theme.textColor};
`;

const Profile = () => (
	<Container>
		<ProfileImg src={Image} />
		<ProfileName>Vitaliy Derda</ProfileName>
	</Container>
);

export default Profile;
