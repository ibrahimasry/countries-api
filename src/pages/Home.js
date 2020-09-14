import React, { useState, useEffect } from "react";
import axios from "axios";

import { Input, Wrapper, Icon } from "../style/Input";
import Query from "../style/Query";
import Select, { Option } from "../style/Select";
import SearchIcon from "@material-ui/icons/Search";
import Countries from "./components/Countries";
import { Container } from "@material-ui/core";

let countriesList = [];

function searchAndFilter(search, target) {}
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {
      countriesList = data;
      setCountries(data);
    });
  }, []);
  useEffect(() => {
    if (!countriesList.length) return;
    let data = countriesList.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    setCountries(data);
  }, [search]);
  useEffect(() => {
    if (!countriesList.length) return;
    let data = countriesList.filter(({ region }) =>
      region.toLowerCase().includes(filter.toLowerCase())
    );
    setCountries(data);
  }, [filter]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onSelectHandler = (e) => {
    setFilter(e.target.value);
  };
  return (
    <Container>
      <Query>
        <Wrapper>
          <Input
            placeholder="search for a country"
            value={search}
            onChange={onChangeHandler}
          />
          <Icon>
            <SearchIcon></SearchIcon>
          </Icon>
        </Wrapper>
        <Select onChange={onSelectHandler}>
          <Option disabled selected value style={{ display: "none" }}>
            {" "}
            filter by region{" "}
          </Option>

          <Option value="Asia">Asia</Option>
          <Option value="Africa">Africa</Option>
          <Option value="America">America</Option>
          <Option value="Europe">Europe</Option>
          <Option value="America">America</Option>
          <Option value="Oceania">Oceania</Option>
        </Select>
      </Query>
      <Countries countries={countries}></Countries>
    </Container>
  );
};

export default Home;
