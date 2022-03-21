import React, { Component } from "react";
import "./Foot.css";
import { ThemeContext } from "../context/ThemeContext";

class Foot extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkTheme, dark, light } = contextTheme;
          const theme = isDarkTheme ? dark : light;

          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-link">
                  <div
                    className="portfolio-hover"
                    style={{ background: theme.hover, padding: "20px" }}
                  >
                    <div className="portfolio-hover-content">
                      <p>{this.props.foot.about}</p>
                      <span style={{ color: "#2d0436" }}>
                        {this.props.foot.birth_day}
                      </span>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={this.props.foot.imageURL}
                    alt="..."
                  />
                </div>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    {this.props.foot.name}
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    {this.props.foot.team}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Foot;
