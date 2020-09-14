import React, { useState, useEffect } from "react";
import Grid, { Card, Description } from "../../style/Grid";
import { useHistory } from "react-router-dom";

const Countries = ({ countries }) => {
  let history = useHistory();

  const onclickHandler = (country) => {
    history.push({ pathname: "/details", state: { country } });
  };
  return (
    <Grid>
      {countries.map((c) => (
        <Card onClick={() => onclickHandler(c)} key={c.name}>
          <div>
            <img src={c.flag} />
          </div>
          <Description>
            <h3>{c.name}</h3>
            <span>Population : {c.population.toLocaleString()}</span>
            <span>Region : {c.region}</span>
            <span>Capital : {c.capital}</span>
          </Description>
        </Card>
      ))}
    </Grid>
  );
};

export default Countries;
