import React from 'react'
import { Container, Sidebar, Main } from './styles';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { getLangsFrom } from '../../services/api';

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

  const repositories = [
    {name: 'Repo 1', description: 'Descrição', html_url: 'https://google.com', language: 'JavaScript'},
    {name: 'Repo 2', description: 'Descrição', html_url: 'https://google.com', language: 'JavaScript'},
    {name: 'Repo 3', description: 'Descrição', html_url: 'https://google.com', language: 'PHP'},
    {name: 'Repo 4', description: 'Descrição', html_url: 'https://google.com', language: 'Java'},
    {name: 'Repo 5', description: 'Descrição', html_url: 'https://google.com', language: 'Python'},
    {name: 'Repo 6', description: 'Descrição', html_url: 'https://google.com', language: 'C#'},
    {name: 'Repo 7', description: 'Descrição', html_url: 'https://google.com', language: 'Ruby'},
  ];

  
  const languages = getLangsFrom(repositories)

  return (
    <Container >
      <Sidebar >
        <Profile user={user} />
        <Filter languages={languages}/>
      </Sidebar>
      <Main >
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage;