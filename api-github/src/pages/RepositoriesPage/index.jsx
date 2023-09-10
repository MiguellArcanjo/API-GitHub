import React from 'react'
import { Container, Sidebar, Main } from './styles';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

function RepositoriesPage() {

  const user = {
    "login": "MiguellArcanjo",
    "name": "Miguel Arcanjo",
    "avatar_url": "https://avatars.githubusercontent.com/u/94648769?v=4",
    "followers": 2,
    "following": 4,
    "company": null,
    "blog": null,
    "location": null,
  };

  return (
    <Container >
      <Sidebar >
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main >
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage;