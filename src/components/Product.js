import React from 'react';
import styled from 'styled-components';
import {
    FavoriteBorderOutlined,
    ShoppingCartOutlined,
    SearchOutlined
} from '@mui/icons-material';

const Product = ({ product }) => {
    return (
        <Container>
            <Image src={product.img} />
            <Title>{product.title}</Title>
            <InfoContainer>
                <Icons>
                    <ShoppingCartOutlined />
                   
                </Icons>
                <Icons>
                    <SearchOutlined />
                </Icons>
                <Icons>
                    <FavoriteBorderOutlined />
                </Icons>
            </InfoContainer>
        </Container>
    );
};

// ======  STYLES  ======

const InfoContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    min-width: 280px;
    height: 300px;
    margin: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover ${InfoContainer} {
        opacity: 1;
    }

    
`;

const Image = styled.img`
    height: 70%;
    object-fit: scale-down;
`;

const Title = styled.h1`
    color: black;
    font-size: 20px;
`;

const Icons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: all 0.5s ease;
        box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
    }
`;

export default Product;