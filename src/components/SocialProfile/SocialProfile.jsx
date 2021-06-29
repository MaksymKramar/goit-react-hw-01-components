import React from 'react';
import { Container, Avatar, Stats, StatsItem } from './SocialProfile.styles';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </Stats>
    </Container>
  );
};

export default Profile;
