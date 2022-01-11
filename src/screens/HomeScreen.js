import React from "react";
import Heading from "../components/HomeScreen/Heading";
import Banner from "../components/HomeScreen/Banner";
import List from "../components/HomeScreen/List";

const HomeScreen = () => {
  return (
    <div>
      <Heading />
      <Banner />
      {/* <Banner2 /> */}
      <List />
    </div>
  );
};

export default HomeScreen;
