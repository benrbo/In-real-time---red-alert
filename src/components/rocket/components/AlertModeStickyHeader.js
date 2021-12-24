import React from "react";
import FadeInOut from "./FadeInOut";
import { Statistic } from "antd";
import logo from "../alert.png";

class AlertModeStickyHeader extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    shouldRefresh: false,
    location: "",
    locations: [
      "Nahal Oz",
      "Nativ Haasara",
      "Sderot",
      "Beersheba",
      "Mefalsim",
      "Tkuma",
    ],
  };

  componentDidMount() {
    let i = 0;
    setInterval(() => {
      this.refreshLocation(this.state.locations[i++]);
      if (i === this.state.locations.length) {
        i = 0;
      }
    }, 2500);
  }

  refreshLocation = (location) => {
    setTimeout(() => {
      this.setState({ location, shouldRefresh: true });
      setTimeout(() => {
        this.setState({ shouldRefresh: false });
      }, 2000);
    }, 1);
  };

  render() {
    return (
      <header className="sticky-header alert-mode active">
        <div className="left-container">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="alerts">
            <Statistic value={7325} />
          </div>
          <div>
            <FadeInOut show={this.state.shouldRefresh}>
              {`התראת צבע אדום: ${this.state.location}`}
            </FadeInOut>
          </div>
        </div>
        <div className="right-container">

        </div>
      </header>
    );
  }
}

export default AlertModeStickyHeader;
