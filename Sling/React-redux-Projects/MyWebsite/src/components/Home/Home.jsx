import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import './Home.scss';

function Home() {
    const headerImage = useSelector((state) => state.images.payload ? state.images.payload[4] : {});
    const contentImage = useSelector((state) => state.images.payload ? state.images.payload[0] : {});

    return (
        <StyledContainer>
            <StyledHeaderImage src={headerImage?.src?.large2x} alt={headerImage.alt}/>
            <StyledContentImage src={contentImage?.src?.medium} alt={contentImage.alt} />
            <HomeContentContainer>

                <HomeHeaderContainer>
                    <h1>~ Zachary Pierce ~</h1>
                </HomeHeaderContainer>

            </HomeContentContainer>
        </StyledContainer>
    )
}

export default Home

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 64px 0;
`;

const StyledHeaderImage = styled.img`
    width: -webkit-fill-available;
`;

const HomeContentContainer = styled.div`
    background-color: #1f2833;
    border-radius: 10px;
    color: #c5c6c7;
    padding: 10px;
    height: fit-content;
    width: 100%;
    max-width: 600px;

    p {
        margin: 32px;
        color: #45a29e;
        font-size: x-large;
        margin: 15px;
        text-align: -webkit-center;
        font-weight: 200;
    }

    @media(max-width: 990px) {
        overflow-y: auto;
    }
    @media (max-width: 480px) {
        width: auto;
    }
`;

const HomeHeaderContainer = styled.div`
text-align: center;
    text-decoration: underline;
`;
 
const HighlightedText = styled.span`
    font-weight: 400;
`;

const StyledContentImage = styled.img`

`;