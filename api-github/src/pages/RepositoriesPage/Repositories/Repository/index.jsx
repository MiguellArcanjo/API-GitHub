import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

function Repository() {
  return (
    <Container color='#FE8C00'>
        <Name>Repostory Name</Name>
        <Description>Repostory Description</Description>
        <Footer color='#FE8C00'>
            <Lang>Repository Lang</Lang>
            <Link href='https://google.com' target='_blank'>Ver</Link>
        </Footer>
    </Container>
  )
}

export default Repository;