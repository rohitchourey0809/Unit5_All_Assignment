import React from "react";
import ContentContainer from "./components/ContentContainer";
import Title from "./components/Title.jsx";
import TopBar from "./components/TopBar.jsx";
import { ThemeStore } from "./contexts/ThemeStore.jsx";
import Theme from "./Theme.jsx";

const App = () => {
  return (
    <>
    rohit
      <ThemeStore>
        <Theme>
          <TopBar />
          <ContentContainer>
            <Title>THEME SWITCHING WITH STYLED-COMPONENTS</Title>
          </ContentContainer>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default App;
