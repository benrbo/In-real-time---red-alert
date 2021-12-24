import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Tile from "./Tile";

const PreviousOperations = (props) => (
  <section className="section">
    <h2>מבצעים קודמים</h2>
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"מבצע עופרת יצוקה"}
          subtitle={"18/01/2009 - 27/12/2008"}
          fromDate={"2008-12-27"}
          toDate={"2009-01-18"}
          alertsClient={props.alertsClient}
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"מבצע עמוד ענן"}
          subtitle={"21/11/2012 - 14/11/2012"}
          fromDate={"2012-11-14"}
          toDate={"2012-11-21"}
          alertsClient={props.alertsClient}
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"צוק איתן"}
          subtitle={"26/08/2014 - 08/07/2014"}
          fromDate={"2014-07-08"}
          toDate={"2014-08-26"}
          alertsClient={props.alertsClient}
          showAverage
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"חגורה שחורה"}
          subtitle={"16/11/2019 - 12/11/2019"}
          fromDate={"2019-11-12"}
          toDate={"2019-11-16"}
          alertsClient={props.alertsClient}
          showAverage
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"שומר חומות"}
          subtitle={"21/05/2021 - 10/5/2021"}
          fromDate={"2021-05-10"}
          toDate={"2021-05-21"}
          alertsClient={props.alertsClient}
          showAverage
        />
      </Col>
    </Row>
  </section>
);

PreviousOperations.propTypes = {
  alertsClient: PropTypes.object.isRequired,
  showAverage: PropTypes.bool,
};
PreviousOperations.defaultProps = {
  showAverage: false,
};
export default PreviousOperations;
