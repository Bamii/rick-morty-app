import React from 'react';
import styled from 'styled-components';
import { NavigationContainer } from './PageContainer';

const Navigation = () => {
    return (
        <NavigationContainer>
            <a href="/characters"> Characters </a>
            <a href="/locations"> Locations </a>
            <a href="/episodes"> Episodes </a>
            <a href="/about"> About </a>
        </NavigationContainer>
    );
}

export default Navigation;