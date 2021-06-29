import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border: 1px solid black;
`;

export const TransactionTable = styled.table`
  width: inherit;
`;

export const HeadTable = styled.thead`
  background-color: aqua;
`;

export const TableRow = styled.tr`
  background-color: white;
  &:nth-child(2n) {
    background-color: silver;
  }
`;
