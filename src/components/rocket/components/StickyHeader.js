import React from "react";
import { Statistic } from "antd";
import logo from "../alert.png";

class StickyHeader extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <header className="sticky-header active">
        <div className="left-container">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="alerts">
            <Statistic value={7325} />
          </div>
        </div>
        <div className="right-container">

        </div>
      </header>
    );
  }
}

export default StickyHeader;
