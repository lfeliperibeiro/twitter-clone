import styled, {css} from 'styled-components';

import {LocationOn, Cake} from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    scrollbar-width: none;
    
    ::-webkit-scrollbar {
        display: none;
    }

`;

export const Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);

    background: var(--twitter);
    position: relative;
`;

export const Avatar = styled.div`
    width: max(45px min(135px , 22px));
    height: max(45px min(135px , 22px));
    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;
    position: absolute;

    bottom: max(-60pc, -10vw);
    left: 15px;

`;

export const ProfileData = styled.div``;

const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`

export const LocationIcon = styled(LocationOn)`${iconCSS}`;

export const CakeIcon = styled(Cake)`${iconCSS}`;

export const Followage = styled.div``;
