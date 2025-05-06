import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || GoHub - Digital Agency
      </title>
      <meta
        name="description"
        content="GoHub - Digital Agency"
      />
    </Helmet>
  );
};

export default HelmetReact;
