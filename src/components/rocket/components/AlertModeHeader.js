import PropTypes from "prop-types";
import Tile from "./Tile";
import { Row, Col } from "antd";
import logo from "../logoin.png";

const AlertModeHeader = (props) => (
  <header className="header alert-mode">
    <Row>
      <Col xs={24} sm={15} lg={15}>
        <div className="title">
          <img className="logo" src={logo} alt="" />
          <h2>התראות צבע אדום בזמן אמת</h2>
        </div>
        <Tile
          isHeroTile
          title={"התראות היום"}
          subtitle={props.getYesterday()}
          fromDate={props.getYesterday()}
          alertsClient={props.alertClient}
        />
      </Col>
      <Col xs={24} sm={9} lg={9}>
      </Col>
    </Row>
  </header>
);

AlertModeHeader.propTypes = {
  getYesterday() {},
  alertClient: PropTypes.object.isRequired,
};

AlertModeHeader.defaultProps = {
  getYesterday: () => {},
};

export default AlertModeHeader;
