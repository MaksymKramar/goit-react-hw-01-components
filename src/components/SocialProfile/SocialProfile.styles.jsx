import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: crimson;
  width: 400px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  border: 1px solid red;
  background-color: aquamarine;
  padding: 15px;
`;
