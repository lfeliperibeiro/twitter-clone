import React from 'react';

import { 
    Container,
    Retweeted, 
    UbuntuIcon, 
    Body, 
    Avatar, 
    Header, 
    Content, 
    Dot,
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <UbuntuIcon />
                Você retweeetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Ubuntu</strong>
                        <span>@ubuntu</span>
                        <Dot />
                        <time>6 de set</time>
                    </Header>
                    <Description>
                        The best solution of Linux
                    </Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            20
                        </Status>
                        <Status>
                            <RetweetIcon />
                            20
                        </Status>
                        <Status>
                            <LikeIcon />
                            2000
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;