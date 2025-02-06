import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  const handleAddFighter = (fighter) => {
    setTeam([...team, fighter]);
    setZombieFighters(zombieFighters.filter((z) => z.id !== fighter.id));
    setMoney(() => {
      if (money <= 0 || money < fighter.price) {
        console.log('not enough money');
        return;
      } else {
        return money - fighter.price;
      }
    });
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((f) => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
  };

  const totalStrength = team.reduce(
    (total, currentValue) => (total = total + currentValue.strength),
    0
  );

  const totalAgility = team.reduce(
    (total, currentValue) => (total = total + currentValue.agility),
    0
  );

  return (
    <>
      <h2>Money: ${money}</h2>
      <p>Pick Your Team</p>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt='' />
            <p> Name: {fighter.name}</p>
            <p> Price: {fighter.price}</p>
            <p> Strength: {fighter.strength}</p>
            <p> Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      {team.length === 0 ? (
        <>
          <h3>Add members to your team</h3>
          <p>Team Strength: {totalStrength}</p>
          <p>Team Agility: {totalAgility}</p>
        </>
      ) : (
        <>
          <h3>My Team</h3>
          <p>Team Strength: {totalStrength}</p>
          <p>Team Agility: {totalAgility}</p>
          <ul>
            {team.map((fighter) => (
              <li key={fighter.id}>
                <img src={fighter.img} alt='' />
                <p> Name: {fighter.name}</p>
                <p> Price: {fighter.price}</p>
                <p> Strength: {fighter.strength}</p>
                <p> Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default App;
