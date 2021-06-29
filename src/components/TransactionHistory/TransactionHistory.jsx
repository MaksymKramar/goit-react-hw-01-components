import React from 'react';
import {
  Container,
  TransactionTable,
  HeadTable,
  TableRow,
} from './TransactionHistory.style';

function TransactionHistory({ items }) {
  return (
    <Container>
      <TransactionTable>
        <HeadTable>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </HeadTable>

        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          ))}
        </tbody>
      </TransactionTable>
    </Container>
  );
}

export default TransactionHistory;
