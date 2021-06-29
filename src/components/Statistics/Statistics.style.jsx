import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border: 1px solid black;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0px;
`;

export const StatItem = styled.li`
  border: 1px solid red;
  width: 80px;
  background-color: aquamarine;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1px;
`;
