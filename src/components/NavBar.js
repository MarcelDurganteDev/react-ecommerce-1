import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;

export const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam officia libero natus vero placeat eum temporibus,
                    explicabo modi dolor praesentium suscipit odio minus
                    architecto earum animi nostrum sed optio itaque.
                </Left>
                <Center>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam officia libero natus vero placeat eum temporibus,
                    explicabo modi dolor praesentium suscipit odio minus
                    architecto earum animi nostrum sed optio itaque.
                </Center>
                <Right>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam officia libero natus vero placeat eum temporibus,
                    explicabo modi dolor praesentium suscipit odio minus
                    architecto earum animi nostrum sed optio itaque.
                </Right>
            </Wrapper>
        </Container>
    );
};
