import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import React from "react";
import CustomTheme from "./assets/CustomTheme";
import "./assets/fonts/css/fontiran.css";
import "./assets/styles.css";
import ConcertInfo from "./components/concertinfo";
import Featured from "./components/featured";
import Header from "./components/header_footer/Header";
import Highlights from "./components/highlights";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <div style={{ height: "auto", width: "100%", overflow: "hidden" }}>
          <Header />
          <Featured />
          <ConcertInfo />
          <Highlights />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
