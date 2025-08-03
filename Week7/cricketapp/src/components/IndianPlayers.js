import React from 'react';

const IndianPlayers = () => {
  const allPlayers = [
    'Virat Kohli',
    'Rohit Sharma',
    'KL Rahul',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'Shubman Gill',
    'Rishabh Pant',
    'Jasprit Bumrah'
  ];

  // Destructuring Odd/Even players
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const [odd1, odd2, ...restOdd] = oddPlayers;
  const [even1, even2, ...restEven] = evenPlayers;

  // Merging T20 and Ranji players
  const T20players = ['Virat Kohli', 'Hardik Pandya', 'Shubman Gill'];
  const RanjiTrophyPlayers = ['Ajinkya Rahane', 'Cheteshwar Pujara'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Team Distribution</h2>
      <p><strong>Odd Team:</strong> {odd1}, {odd2}, {restOdd.join(', ')}</p>
      <p><strong>Even Team:</strong> {even1}, {even2}, {restEven.join(', ')}</p>

      <h3>Merged Team (T20 + Ranji)</h3>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
