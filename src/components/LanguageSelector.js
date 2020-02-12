import React from "react";
import LanguageContext from '../contexts/LanguageContex';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    
    return (
      <div>
        Select language:{" "}
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
          style={{ cursor: "pointer" }}
        />
        <i
          className="flag se"
          onClick={() => this.context.onLanguageChange("swedish")}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}
export default LanguageSelector;
