import React from "react";
import Foot from "./Foot";
import "./FootList.css";
import { FootContext } from "../context/FootContext";
import { ThemeContext } from "../context/ThemeContext";

class FootList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <FootContext.Consumer>
            {(contextFoot) => {
              const foots = contextFoot.footballers;
              const { isDarkTheme, dark, light, changeTheme } = contextTheme;
              const theme = isDarkTheme ? dark : light;

              return (
                <section
                  className="page-section"
                  style={{ background: theme.bg, color: theme.txt }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        Footballers
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Best Football Players
                      </h3>
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        style={{ marginTop: "-70px" }}
                        onClick={changeTheme}
                      >
                        Change Theme
                      </button>
                    </div>
                    <div className="row">
                      {foots.map((foot, i) => {
                        return <Foot foot={foot} key={i} />;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </FootContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default FootList;
