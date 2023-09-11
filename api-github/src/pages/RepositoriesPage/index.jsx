import React, {useState} from 'react'
import { Container, Sidebar, Main } from './styles';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { getLangsFrom } from '../../services/api';

function RepositoriesPage() {

  const [currentLanguage, setCurrentLanguage] = useState();


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
    {id: '1', name: 'Repo 1', description: 'Descrição', html_url: 'https://google.com', language: 'JavaScript'},
    {id: '2', name: 'Repo 2', description: 'Descrição', html_url: 'https://google.com', language: 'JavaScript'},
    {id: '3', name: 'Repo 3', description: 'Descrição', html_url: 'https://google.com', language: 'PHP'},
    {id: '4', name: 'Repo 4', description: 'Descrição', html_url: 'https://google.com', language: 'Java'},
    {id: '5', name: 'Repo 5', description: 'Descrição', html_url: 'https://google.com', language: 'Python'},
    {id: '6', name: 'Repo 6', description: 'Descrição', html_url: 'https://google.com', language: 'C#'},
    {id: '7', name: 'Repo 7', description: 'Descrição', html_url: 'https://google.com', language: 'Ruby'},
  ];

  
  const languages = getLangsFrom(repositories)

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container >
      <Sidebar >
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick}/>
      </Sidebar>
      <Main >
        <Repositories repositories={repositories} currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage;