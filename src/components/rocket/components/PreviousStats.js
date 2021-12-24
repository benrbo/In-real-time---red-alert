import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Tile from "./Tile";
import {
  getYesterday,
  getWeekBack,
  getMonthBack,
  getYearBack,
} from "../date_helper";
import moment from 'moment';

const PreviousStats = (props) => (
  <section className="section">
    <h2>נתונים אחרונים</h2>
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"אתמול"}
          subtitle={moment(getYesterday()).format('D/MM/YYYY')}
          fromDate={getYesterday()}
          alertsClient={props.alertsClient}
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"בשבוע שעבר"}
          subtitle={moment(getWeekBack()).format('D/MM/YYYY')}
          fromDate={getWeekBack()}
          alertsClient={props.alertsClient}
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"בחודש שעבר"}
          subtitle={moment(getMonthBack()).format('D/MM/YYYY')}
          fromDate={getMonthBack()}
          alertsClient={props.alertsClient}
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Tile
          title={"בשנה שעברה"}
          subtitle={moment(getYearBack()).format('D/MM/YYYY')}
          fromDate={getYearBack()}
          alertsClient={props.alertsClient}
        />
      </Col>
    </Row>
  </section>
);

PreviousStats.propTypes = {
  alertsClient: PropTypes.object.isRequired,
};
export default PreviousStats;
