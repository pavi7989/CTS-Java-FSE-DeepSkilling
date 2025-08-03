import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 95 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Jasprit Bumrah', score: 50 },
    { name: 'Ravindra Jadeja', score: 75 },
    { name: 'Shubman Gill', score: 40 },
    { name: 'Rishabh Pant', score: 90 },
    { name: 'Shreyas Iyer', score: 65 },
    { name: 'Mohammed Shami', score: 55 },
    { name: 'Suryakumar Yadav', score: 80 },
  ];

  // Filter scores >= 70 using arrow function
  const topScorers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Top Performing Players (Score ≥ 70)</h2>
      <ul>
        {topScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
