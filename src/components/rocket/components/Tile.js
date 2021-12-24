import React from "react";
import PropTypes from "prop-types";
import { formatISO, differenceInDays } from "date-fns";
import { Row, Col, Statistic, Spin } from "antd";
import { LoadingOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import FadeIn from "./FadeIn";


const LoadingTile = ({ showAverage }) => (
  <Row
    gutter={[8]}
    justify="center"
    className={showAverage ? "loading-average" : "loading-basic"}
  >
    <Col>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
        }
      />
    </Col>
  </Row>
);

LoadingTile.propTypes = {
  showAverage: PropTypes.bool,
};
LoadingTile.defaultProps = {
  showAverage: false,
};

const HeroTile = ({ isLoading, title, alerts }) => (
  <div className="tile-hero">
    <FadeIn show={!isLoading} fadeInOnly>
      <Statistic value={alerts} />
    </FadeIn>
    <h3>{title}</h3>
  </div>
);

HeroTile.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  alerts: PropTypes.number,
};
HeroTile.defaultProps = {
  isLoading: false,
  title: "",
  alerts: 0,
};

export default class Tile extends React.Component {
  static propTypes = {
    isHeroTile: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string,
    alertsClient: PropTypes.object.isRequired,
    showAverage: PropTypes.bool,
  };

  static defaultProps = {
    isHeroTile: false,
    title: "",
    subtitle: "",
    toDate: formatISO(new Date(), {
      representation: "date",
    }),
    showAverage: false,
  };

  state = { isLoading: true, isError: false, alerts: null };

  componentDidMount() {
    this.getAlerts();
  }

  getAlerts = () => {
    this.props.alertsClient
      .getTotalAlerts(this.props.fromDate, this.props.toDate)
      /*
        error: null
        payload: 7325
        success: true
      */
      // .getTotalAlertsByDay(this.props.fromDate, this.props.fromDate)
      /*
      [{
        alerts: 37
        timeStamp: "2014-07-24"
      }]
      */
      .then((res) => {
        if (this.props.isHeroTile) {
          this.setState({ alerts: 7325, isLoading: false });
        } else {
          if (this.props.showAverage) {
            const duration = differenceInDays(
              new Date(this.props.toDate),
              new Date(this.props.fromDate)
            );
            this.setState({
              average: Math.round(res.payload / duration),
            });
          }
          setTimeout(() => {
            this.setState({ alerts: res.payload, isLoading: false });
          }, Math.floor(Math.random() * 4) * 1000);
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isError: true });
      });
  };

  render() {
    const hasData = !this.state.isLoading && !this.state.isError;

    return (
      <>
        {this.props.isHeroTile ? (
          <HeroTile alerts={7325} />
        ) : (
          <div className="tile">
            <h3>{this.props.title}</h3>
            <div className="subtitle">{this.props.subtitle}</div>
            <div>
              {this.state.isLoading && <LoadingTile {...this.props} />}
              {hasData && this.props.showAverage && (
                <Row
                  gutter={[8]}
                  justify="center"
                  className="average-container"
                >
                  <Col>
                    <div className="alerts">
                      <FadeIn show={!this.state.isLoading} fadeInOnly>
                        <Statistic value={this.state.alerts} />
                      </FadeIn>
                    </div>
                    <div>רקטות</div>
                  </Col>
                  <Col className="separator">.</Col>
                  <Col>
                    <div className="average">
                      <FadeIn show={!this.state.isLoading} fadeInOnly>
                        <Statistic value={this.state.average} />
                      </FadeIn>
                    </div>
                    <div>ממוצע יומי</div>
                  </Col>
                </Row>
              )}
              {hasData && !this.props.showAverage && (
                <div className="alerts">
                  <FadeIn show={!this.state.isLoading} fadeInOnly>
                    <Statistic value={this.state.alerts} />
                  </FadeIn>
                </div>
              )}
              {this.state.isError && (
                <FadeIn show={!this.state.isLoading} fadeInOnly>
                  <ExclamationCircleOutlined
                    className={
                      this.props.showAverage
                        ? "loading-average"
                        : "loading-basic"
                    }
                  />
                  {" Error"}
                </FadeIn>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
