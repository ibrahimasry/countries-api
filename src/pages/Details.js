import React, { useState, useEffect } from "react";
import Button from "../style/Button";
import DetailsCard from "../style/DetailsCard";
import InfoWrapper from "../style/InfoWrapper";
import ContentWrapper from "../style/ContentWrapper";

import Border from "../style/Border";

import Info from "../style/Info";
import CountryBorder from "../style/CountryBorder";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Details = (props) => {
  const [data, setData] = useState({});
  const history = useHistory();
  let country = props.location.state.country;
  useEffect(() => {
    if (country) {
      console.log(country);
      const newData = { ...country };
      newData.languages = country.languages.map((l) => l.name).join(", ");
      newData.currencies = country.currencies.map((l) => l.name).join(", ");
      setData(newData);
    }
  }, []);
  return (
    <>
      <Container>
        <Button onClick={() => history.goBack()}>
          {" "}
          <span className="back">&#8592;</span>
          <span>Back</span>
        </Button>

        <DetailsCard>
          <div>
            <img src={data.flag}></img>
          </div>
          <ContentWrapper>
            <h2>{data.name}</h2>
            <InfoWrapper>
              <Info>
                <li>
                  {" "}
                  <strong>Native Name</strong> : {data.nativeName}
                </li>
                <li>
                  {" "}
                  <strong>Capital</strong> : {data.capital}
                </li>
                <li>
                  {" "}
                  <strong>Currencies</strong> : {data.currencies}
                </li>
                <li>
                  {" "}
                  <strong>languages</strong> : {data.languages}
                </li>

                <li>
                  {" "}
                  <strong>Population</strong> : {data.population}
                </li>
              </Info>

              <Info>
                <li>
                  {" "}
                  <strong>Region</strong> :{data.region}
                </li>
                <li>
                  {" "}
                  <strong>Sub Region</strong> : {data.subregion}
                </li>
                <li>
                  {" "}
                  <strong>Top Level Domain</strong> : {data.topLevelDomain}
                </li>
              </Info>
            </InfoWrapper>
            <CountryBorder>
              <strong>Border Countries:</strong>{" "}
              {data.borders &&
                data.borders.map((b) => <Border key={b}> {b}</Border>)}
            </CountryBorder>
          </ContentWrapper>
        </DetailsCard>
      </Container>
    </>
  );
};

export default Details;
