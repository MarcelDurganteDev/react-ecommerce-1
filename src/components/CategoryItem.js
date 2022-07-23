import React from 'react'
import styled from 'styled-components'

const CategoryItem = ( {item} ) => {

    return (
        <Container bg={item.bg}>
            <Image src={item.img} />
            <InfoContainer>
                <Title>{item.title}</Title>
                <Button>SHOP NOW!</Button>
            </InfoContainer>
        </Container>
    );
}

export default CategoryItem;

// ======  STYLES  ======

const Container = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #${props => props.bg};
    /* position: relative; */
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    object-fit:scale-down;
    /* filter: grayscale(100%); */
`;

const InfoContainer = styled.div`
    /* position: absolute; */
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Title = styled.h1`
    font-size: 60px;
    color: black;
    text-shadow: 0px 1px 5px #b4bbbb;
   
`;
const Button = styled.button`
    border: none;
    cursor: pointer;
    color: gray;
    background-color: white;
    font-weight: 600;
    padding: 10px;
`;

