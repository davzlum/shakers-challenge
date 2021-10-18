import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Ranking = () => {
  const ranking = useSelector((store) => store.rankingReducer);
  console.log(ranking);
  return (
    <>
      <Link to="/">Go back</Link>
    </>
  );
};

export default Ranking;
