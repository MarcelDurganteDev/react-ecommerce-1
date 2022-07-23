import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../db/data';
import {
    ArrowBackIosNewOutlined,
    ArrowForwardIosOutlined
} from '@mui/icons-material';

export default function Slider () {
    
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = direction => {
        
        console.log( 'hi left' );
        
        if (direction === 'left') {
            console.log('hi left');
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2 );
        } else if (direction === 'right') {
            console.log('hi right');
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowBackIosNewOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id} bg={item.bg} slideIndex={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt={item.alt} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>Shop Now!</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    );
};

// ==== STYLES  =====

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0%;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: calc(100vh - 90px);
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
`;

const Image = styled.img`
    height: 80%;
    margin: auto;
`;

const InfoContainer = styled.div`
    flex: 1;
    margin-right: 40px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
`;

