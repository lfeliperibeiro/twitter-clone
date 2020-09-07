import React from 'react';

import List from '../List';
import FollowSugestion from '../FollowSugestion';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SerachIcon,
    Body
} from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SerachIcon />
            </SearchWrapper>
            <Body>
                <List
                title="Talvez você curta"
                elements={[
                   <FollowSugestion 
                   name="Mestre Yoda"
                   nickname="@yodamestre"
                   />
                ]}
                />

                <List
                title="Talvez você curta"
                elements={[
                   <FollowSugestion 
                   name="Luke"
                   nickname="@luke_skywalker"
                   />
                ]}
                />

                <List
                title="Talvez você curta"
                elements={[
                   <FollowSugestion 
                   name="Han Solo"
                   nickname="@solo_han"
                   />
                ]}
                />
               
            </Body>
        </Container>

    )
}

export default SideBar;