import React from 'react';
import { Container, Selector, Clear } from './styles';

function Filter() {
    const langs = [
        {name: 'JavaScript', count: 5, color: '#f1c40f'},
        {name: 'Shell', count: 2, color: '#95a6a6'},
        {name: 'PHP', count: 1, color: '#3498db'},
    ]

    const selectors = langs.map(({name, count, color}) => (
        <Selector key={name.toLowerCase()} color={color}>
            <span>{name}</span>
            <span>{count}</span>
        </Selector>
    ));

    return (
        <Container>
            {selectors}
            <Clear>Limpar</Clear>
        </Container>
        // <div>teste</div>
    );
}

export default Filter;