import React from 'react';
import styled from 'styled-components';
import { categories } from '../db/data';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item} bg={item.bg}/>
            ))}
        </Container>
    );
};

export default Categories;

// ======  STYLES  ======

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #f5fafd;
`;

