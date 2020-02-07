import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContex";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select language:{" "}
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
            style={{ cursor: "pointer" }}
          />
          <i
            className="flag se"
            onClick={() => this.onLanguageChange("swedish")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
