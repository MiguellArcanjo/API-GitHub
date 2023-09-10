import React, { useState } from "react";
import  { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form,Input, Button } from "./styles";

import GithubLogo from '../../assets/image/github-logo.svg';

export default function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={GithubLogo} alt="Logo do Github"/>
      <Title>API Github</Title>
      <Form>
        <Input 
          placeholder="usuário" 
          value={login} 
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to="/repositories">
          <MdSearch size={42}/>
        </Button>
      </Form>
    </Container>
  );
}
