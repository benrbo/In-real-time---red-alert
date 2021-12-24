import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { orange } from "@mui/material/colors";
import swal from 'sweetalert';
import GoogleMapReact from 'google-map-react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TextField from '@mui/material/TextField';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AnyReactComponent = ({ text }) => <div><FmdGoodIcon /> </div>;


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.error.main,
}));

class EditAudio extends Component {
  constructor(props) {
    super(props);
    this.onChangeUrlRed = this.onChangeUrlRed.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleCheckClick2 = this.handleCheckClick2.bind(this);
    this.handleCheckClick3 = this.handleCheckClick3.bind(this);
    this.handleCheckClick4 = this.handleCheckClick4.bind(this);
    this.handleCheckClick5 = this.handleCheckClick5.bind(this);
    this.handleCheckClick6 = this.handleCheckClick6.bind(this);
    this.handleCheckClick7 = this.handleCheckClick7.bind(this);
    this.onChangeLongText = this.onChangeLongText.bind(this);

    this.state = {
      blobURL: '',
      Police: false,
      Mada: false,
      Firefighters: false,
      Hfc: false,
      StatusOpen: true,
      StatusClose: false,
      Statustreatment: false,
      latitude: 0,
      longitude: 0,
      LongText: ""
    }
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

  handleCheckClick5(e) {
    console.log(e.target.checked);
    this.setState({ StatusOpen: e.target.checked });
  }

  handleCheckClick6(e) {
    console.log(e.target.checked);
    this.setState({ StatusClose: e.target.checked });
  }

  handleCheckClick7(e) {
    console.log(e.target.checked);
    this.setState({ Statustreatment: e.target.checked });
  }

  onChangeLongText(e) {
    this.setState({
      LongText: e.target.value
    })
  }

  onChangeUrlRed(e) {
    this.setState({
      blobURL: e.target.value
    })
  }


  componentDidMount() {
    axios.get('http://localhost:5000/audioreds/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          blobURL: response.data.blobURL,
          Police: Boolean(response.data.Police),
          Mada: Boolean(response.data.Mada),
          Firefighters: Boolean(response.data.Firefighters),
          Hfc: Boolean(response.data.Hfc),
          StatusOpen: Boolean(response.data.StatusOpen),
          StatusClose: Boolean(response.data.StatusClose),
          Statustreatment: Boolean(response.data.Statustreatment),
          latitude: Number(response.data.latitude),
          longitude: Number(response.data.longitude),
          LongText: response.data.LongText
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onSubmit(e) {

    e.preventDefault();

    const audioredAlert = {
      blobURL: this.state.blobURL,
      Police: this.state.Police,
      Mada: this.state.Mada,
      Firefighters: this.state.Firefighters,
      Hfc: this.state.Hfc,
      StatusOpen: this.state.StatusOpen,
      StatusClose: this.state.StatusClose,
      Statustreatment: this.state.Statustreatment,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      LongText: this.state.LongText
    }

    console.log(audioredAlert);




    swal({
      title: 'האם אתה בטוח שברצונך לעדכן את הקריאה?',
      icon: "warning",
      dangerMode: true,
      buttons: ["חזור", "שלח"],

    })
      .then((willDelete) => {
        if (willDelete) {
          axios.post('http://localhost:5000/audioreds/update/' + this.props.match.params.id, audioredAlert)
            .then(res => console.log(res.data));
          window.location = '/Management';
          swal("הקריאה עודכנה בהצלחה", {
            icon: "success",
            buttons: false,
          });
        } else {
          swal("הקריאה לא עודכנה", {
            icon: "warning",
            buttons: false,
          });
        }
      });


  }

  render() {
    return (
      <Box container spacing={1}>
        <Item>
          <h2 id="fastcall" className="heding">עריכת קריאה</h2>
          <br />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '55ch', align: 'center' },
            }}
            Validate
            autoComplete="on"
          >
            <div className="boxes">

              <audio value={this.state.blobURL} onChange={this.onChangeUrlRed} src={this.state.blobURL} controls="controls" />
            </div>
            <TextField type="text"
              label="הערות כוחות הביטחון"
              required
              rows={4}
              multiline
              className="form-control"
              value={this.state.LongText}
              onChange={this.onChangeLongText}
            />
            <br />
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
            <br />
            <div className="boxes">
              <p>כוחות ביטחון:</p>
              <p>
                <Checkbox checked={this.state.Police}
                  {...label} onChange={this.handleCheckClick} /> משטרת ישראל
                <Checkbox checked={this.state.Mada} {...label} onChange={this.handleCheckClick3} color="error" /> מד״א
                <Checkbox checked={this.state.Firefighters} {...label} onChange={this.handleCheckClick2} color="error" />מכבי אש
                <Checkbox
                  {...label}
                  checked={this.state.Hfc}
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
              <p>מצב הקריאה:</p>
              <p>
                <Checkbox checked={this.state.StatusOpen}
                  {...label} onChange={this.handleCheckClick5} color="success" /> פתוחה
                <Checkbox checked={this.state.Statustreatment} {...label} onChange={this.handleCheckClick7} sx={{
                  color: orange[500],
                  '&.Mui-checked': {
                    color: orange[500],
                  },
                }} /> בטיפול
                <Checkbox checked={this.state.StatusClose} {...label} onChange={this.handleCheckClick6} color="error" />סגורה
              </p>
            </div>
            <br />
            <div className="boxes">
              <button className="square_btn40" onClick={this.onSubmit}>עדכן</button>
            </div>
          </Box>
        </Item>
      </Box>
    );
  }
}

export default withRouter(EditAudio);