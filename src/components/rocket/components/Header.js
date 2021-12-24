import PropTypes from "prop-types";
import Tile from "./Tile";

const Header = (props) => (
  <header className="header">
    <div className="top">
      <h2>מתחילת השנה נורו על מדינת ישראל:</h2>
    </div>
    <Tile
      isHeroTile
      title={"התראות היום"}
      subtitle={props.getYesterday()}
      fromDate={props.getYesterday()}
      alertsClient={props.alertClient}
    />
  </header>
);

Header.propTypes = {
  getYesterday() {},
  alertClient: PropTypes.object.isRequired,
};

Header.defaultProps = {
  getYesterday: () => {},
};

export default Header;
