import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    min-height: calc(100vh - 200px);
    padding: 0 30px;

    @media (max-width: 590px) {
        min-height: calc(100vh - 200px);
        padding: 0 20px;
        text-align: center;
    }

    @media (max-width: 360px) {
        min-height: calc(100vh - 220px);
    }
`;

export const NavigationContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        margin-right: 15px;
        color: black
    }

    a:hover {
        text-decoration: line-through;
    }
`;

export const Nothing = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;