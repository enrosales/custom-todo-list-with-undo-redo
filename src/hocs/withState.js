import React, { Component } from "react";
import { GlobalProvider } from "../context/GlobalState";
const withState = (Comp) => {
  return class extends Component {
    render() {
      return (
        <GlobalProvider>
          <Comp />
        </GlobalProvider>
      );
    }
  };
};

export default withState;
