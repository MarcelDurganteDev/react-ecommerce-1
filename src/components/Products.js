import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { marvelItems } from '../db/data'

const Products = () => {
  return (
      <Container>
          {marvelItems.map(item => (
              <Product key={item.id} product={item}/>
          ))}
      </Container>
  );
}

export default Products;

// ======  STYLES  ======

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    background-color: #ffffff;
`;

