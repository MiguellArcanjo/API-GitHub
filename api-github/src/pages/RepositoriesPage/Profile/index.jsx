import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Name, Login, Header, Avatar, Inner, Data } from './styles';

function Profile() {
  return (
    <div>
        <Container >
            <Header>
                <Avatar src='https://avatars.githubusercontent.com/u/94648769?v=4'/>
                <Login>miguelarcanjo</Login>
                <Name>Miguel Arcanjo</Name>
            </Header>

            <Inner>
              <Data>
                <MdGroup size={20}/>
                30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp; <i>seguindo</i>
              </Data>

              <Data>
                <MdWork size={20}/>
                Google
              </Data>

              <Data>
                <MdLocationCity size={20}/>
                Vale do Silicio
              </Data>

              <Data>
                <MdLink size={20}/>
                <a href="https://google.com">Google</a>
              </Data>
            </Inner>
        </Container>
    </div>
  )
}

export default Profile;