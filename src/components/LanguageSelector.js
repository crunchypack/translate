import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select language:{" "}
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
          style={{ cursor: "pointer" }}
        />
        <i
          className="flag se"
          onClick={() => this.props.onLanguageChange("swedish")}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}
export default LanguageSelector;
