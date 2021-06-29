import React from 'react';
import PropTypes from 'prop-types';
import { Container, StatList, StatItem } from './Statistics.style';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {typeof title === 'string' ? (
        <h2>{title}</h2>
      ) : (
        <StatList>
          {stats.map(stat => (
            <StatItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </StatItem>
          ))}
        </StatList>
      )}
    </Container>
  );
};

// Statistics.propTypes = {
//     title: PropTypes.string,
//     id: PropTypes.number,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
// }

export default Statistics;
