import React from 'react';
import './Record.css';
import MicRecorder from 'mic-recorder-to-mp3';
import swal from 'sweetalert';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import { orange } from "@mui/material/colors";
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import GoogleMapReact from 'google-map-react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AnyReactComponent = ({ text }) => <div><FmdGoodIcon /> </div>;


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUrlRed = this.onChangeUrlRed.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleCheckClick2 = this.handleCheckClick2.bind(this);
    this.handleCheckClick3 = this.handleCheckClick3.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCheckClick4 = this.handleCheckClick4.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidMountMap = this.componentDidMountMap(this);

    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
      Police: false,
      Mada: false,
      Firefighters: false,
      Hfc: false,
      StatusOpen: true,
      StatusClose: false,
      Statustreatment: false,
      latitude: 0,
      longitude: 0,
      LongText: ''
    };
  }

  componentDidMountMap() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude is :", position.coords.latitude);
        let myLat = position.coords.latitude;
        console.log("Longitude is :", position.coords.longitude);
        let myLon = position.coords.longitude;
        this.setState({
          latitude: myLat
        });
        this.setState({
          longitude: myLon
        });
      });
  }


  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  onChangeUrlRed(e) {
    this.setState({
      blobURL: e.target.value
    })
  }

  handleCheckClick(e) {
    console.log(e.target.checked);
    this.setState({ Police: e.target.checked });
  }

  handleCheckClick2(e) {
    console.log(e.target.checked);
    this.setState({ Firefighters: e.target.checked });
  }

  handleCheckClick3(e) {
    console.log(e.target.checked);
    this.setState({ Mada: e.target.checked });
  }

  handleCheckClick4(e) {
    console.log(e.target.checked);
    this.setState({ Hfc: e.target.checked });
  }


  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  onSubmit(e) {

    e.preventDefault();
    console.log(this.state.blobURL);

    const audioredAlert = {
      blobURL: this.state.blobURL,
      Police: this.state.Police,
      Mada: this.state.Mada,
      Firefighters: this.state.Firefighters,
      Hfc: this.state.Hfc,
      StatusOpen: this.state.StatusOpen,
      StatusClose: this.state.StatusClose,
      Statustreatment: this.state.Statustreatment,
      LongText: this.state.LongText,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    }

    console.log(audioredAlert);


    swal({
      title: 'אשר את הקריאה שלך',
      text: 'חוק העונשין בסעיפים 240 ו-243 אוסר להעיד עדויות סותרות ולמסור ידיעות כוזבות למשטרה. אדם המגיש תלונה שקרית, במטרה להטעות את המשטרה, עובר בעבירה פלילית אשר עונשה בין 3 ל-5 שנים מאסר.',
      icon: "warning",
      dangerMode: true,
      buttons: ["חזור", "שלח"],

    })
      .then((willDelete) => {
        if (willDelete) {
          axios.post('http://localhost:5000/audioreds/add', audioredAlert)
            .then(res => console.log(res.data));
          swal("‎הקריאה נפתחה בהצלחה", {
            icon: "success",
            buttons: false,
          });
        } else {
          swal("הקריאה לא נפתחה", {
            icon: "warning",
            buttons: false,
          });
        }
      });


    this.setState({
      blobURL: '',
      Police: false,
      Mada: false,
      Firefighters: false,
      Hfc: false,
      StatusOpen: true,
      StatusClose: false,
      Statustreatment: false,
      LongText: ''
    })
  }

  render() {
    return (
      <div>
        <br></br>
        <button className="myButton" onClick={this.start} disabled={this.state.isRecording}><MicIcon />הקלט</button>
        <button className="myButton" onClick={this.stop} disabled={!this.state.isRecording}><MicOffIcon />הפסק</button>
        <br></br>
        <br></br>
        <form
          onSubmit={this.onSubmit.bind(this)}>
          <audio value={this.state.blobURL} onChange={this.onChangeUrlRed} src={this.state.blobURL} controls="controls" />
          <br />
          <div className="boxes">
            <p>כוחות ביטחון:</p>
            <p>
              <Checkbox {...label} onChange={this.handleCheckClick} /> משטרת ישראל
              <Checkbox {...label} onChange={this.handleCheckClick3} color="error" /> מד״א
              <Checkbox {...label} onChange={this.handleCheckClick2} color="error" />מכבי אש
              <Checkbox
                {...label}
                onChange={this.handleCheckClick4}
                sx={{
                  color: orange[500],
                  '&.Mui-checked': {
                    color: orange[500],
                  },
                }}
              />
              פקע״ר
            </p>
          </div>
          <div className="boxes">
            <h2 className="heding">מפה</h2>
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBZyIZclODNqoyiJ9-p2OxavGVfJx6Jsb8" }}
                defaultCenter={{ lat: 32.2, lng: 34.83 }}
                defaultZoom={6}
              >
                <AnyReactComponent
                  lat={this.state.latitude}
                  lng={this.state.longitude}
                  text="המיקום שלי"
                />
              </GoogleMapReact>
            </div>
          </div>
          <button className="square_btn40" onClick={this.onSubmit}>שלח</button>
        </form>
      </div>
    );
  }
}

export default Record;
