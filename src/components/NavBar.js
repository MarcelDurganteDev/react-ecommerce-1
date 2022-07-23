import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@mui/icons-material';

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <BsSearch style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MARCEL . DEV</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={5}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default NavBar;

// ======  STYLES  ======

const Container = styled.div`
    min-height: 60px;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: inherit;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    min-height: inherit;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid #cecccc;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

