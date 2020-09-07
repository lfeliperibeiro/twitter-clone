import React from 'react';

import StickBox from 'react-sticky-box';

import News from '../News';
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
            <StickBox>
            <Body>
                <List
                title="Talvez você curta"
                elements={[
                   <FollowSugestion 
                   name="Mestre Yoda"
                   nickname="@yodamestre"
                   />,
                   <FollowSugestion 
                   name="Luke"
                   nickname="@luke_skywalker"
                   />,
                   <FollowSugestion 
                   name="Han Solo"
                   nickname="@solo_han"
                   />
                   
                ]}
                />

                <List
                title="O que está acontecendo"
                elements={[
                   <News />,
                   <News />,
                   <News />
                ]}
                />
                <List
                title="O que está acontecendo"
                elements={[
                   <News />,
                   <News />,
                   <News />
                ]}
                />
                <List
                title="O que está acontecendo"
                elements={[
                   <News />,
                   <News />,
                   <News />
                ]}
                />

               

               
            </Body>
            </StickBox>
        </Container>

    )
}

export default SideBar;