import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
                Get timely updates from your favorite Funkos.
            </Description>
            <InputContainer>
                <Input  placeholder='Your email'/>
                <Icon>
                    <SendIcon />
                </Icon>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
 
// ==== STYLES ====

const Container = styled.div`
    width: 100%; 
    height: 60vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fffafa;
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 700;
`;

const Description = styled.p`
    font-size: 30px;
    font-weight: 300;
`;

const InputContainer = styled.div`
    width: 60%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.div`
    flex: 8;
    border: none;
`;

const Icon = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    font-size: 50px;
`;
