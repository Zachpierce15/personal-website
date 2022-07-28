import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

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
    display: grid;
    grid-template-areas:
    'headerImage headerImage'
    'pageContent pageContent';
    margin: 0 0 64px 0;
`;

const StyledHeaderImage = styled.img`
    width: -webkit-fill-available;
    z-index: 0;
    grid-area: headerImage;
`;

const HomeContentContainer = styled.div`
    background-color: #1f2833;
    border-radius: 10px;
    color: #c5c6c7;
    padding: 10px;
    height: fit-content;
    width: 100%;
    max-width: 600px;
    z-index: 1;
    grid-area: pageContent;

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
 
const StyledContentImage = styled.img`
`;