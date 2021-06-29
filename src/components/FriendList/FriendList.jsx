import React from 'react';
import {
  Container,
  ListFriends,
  ItemFriends,
  OnlineSpan,
  OfflineSpan,
} from './FriendList.style';

function FriendList({ friends }) {
  return (
    <Container>
      <ListFriends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ItemFriends key={id}>
            {isOnline ? <OnlineSpan></OnlineSpan> : <OfflineSpan></OfflineSpan>}

            <img src={avatar} alt="{name}" width="48" />
            <p>{name}</p>
          </ItemFriends>
        ))}
      </ListFriends>
    </Container>
  );
}

export default FriendList;
