import React from 'react';

import {Container, Banner, Avatar, ProfileData, LocationIcon, CalendarIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Felipe Ribeiro</h1>
                <h2>@lfeliperib</h2>
                <p>Front-end Developer and designer</p>
                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CalendarIcon />
                        Ingressou em novembro de 2013
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>67</strong>
                    </span>
                    <span>
                        <strong>600 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    )
}

export default ProfilePage;