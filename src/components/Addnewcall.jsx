import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { orange } from "@mui/material/colors";
import axios from 'axios';
import swal from 'sweetalert';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GoogleMapReact from 'google-map-react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.error.main,
}));


const AnyReactComponent = ({ text }) => <div><FmdGoodIcon /> </div>;


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class Addnewcall extends React.Component {

  handleReset = e => {
    this.setState({
      FirstName: '',
      LastName: '',
      Id: '',
      Phone: '',
      Address: '',
      City: '',
      AmountofWounded: '',
      ReadingDescription: '',
      Police: false,
      Mada: false,
      Firefighters: false,
      Hfc: false,
      StatusOpen: true,
      StatusClose: false,
      Statustreatment: false,
    })
  }

  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAmountofWounded = this.onChangeAmountofWounded.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleCheckClick2 = this.handleCheckClick2.bind(this);
    this.handleCheckClick3 = this.handleCheckClick3.bind(this);
    this.handleCheckClick4 = this.handleCheckClick4.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);


    this.state = {
      FirstName: '',
      LastName: '',
      Id: '',
      Phone: '',
      Address: '',
      City: '',
      AmountofWounded: '',
      ReadingDescription: '',
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
    }
  }


  componentDidMount() {
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

  onChangeFirstName(e) {
    console.log(e.target.value);
    this.setState({
      FirstName: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      LastName: e.target.value
    })
  }
  onChangeId(e) {
    this.setState({
      Id: e.target.value,
    })
  }
  onChangePhone(e) {
    this.setState({
      Phone: e.target.value
    })
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }
  onChangeCity(e) {
    this.setState({
      City: e.target.value
    })
  }
  onChangeAmountofWounded(e) {
    this.setState({
      AmountofWounded: e.target.value
    })
  }

  onChangedescription(e) {
    this.setState({
      ReadingDescription: e.target.value
    })
  }


  onSubmit(e) {

    e.preventDefault();

    const redalert = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Id: this.state.Id,
      Phone: this.state.Phone,
      Address: this.state.Address,
      City: this.state.City,
      AmountofWounded: this.state.AmountofWounded,
      ReadingDescription: this.state.ReadingDescription,
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

    console.log(redalert);


    swal({
      title: 'אשר את הקריאה שלך',
      text: 'חוק העונשין בסעיפים 240 ו-243 אוסר להעיד עדויות סותרות ולמסור ידיעות כוזבות למשטרה. אדם המגיש תלונה שקרית, במטרה להטעות את המשטרה, עובר בעבירה פלילית אשר עונשה בין 3 ל-5 שנים מאסר.',
      icon: "warning",
      dangerMode: true,
      buttons: ["חזור", "שלח"],

    })
      .then((willDelete) => {
        if (willDelete) {
          axios.post('http://localhost:5000/redalerts/add', redalert)
            .then(res => console.log(res.data));
          swal("הקריאה נפתחה בהצלחה", {
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
      FirstName: '',
      LastName: '',
      Id: '',
      Phone: '',
      Address: '',
      City: '',
      AmountofWounded: '',
      ReadingDescription: '',
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
    })

  }

  render() {
    return (
      <Box container spacing={1}>
        <Item>
          <h2 className="heding">דיווח על נפילה</h2>
          <p>בעת דיווח על נפילה נא לדווח פרטים מלאים על מנת שכוחות הביטחון יוכלו להגיע לסייע בהקדם.</p>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '55ch', align: 'center' },
            }}
            Validate
            autoComplete="on"
          >
            <TextField required value={this.state.FirstName} onChange={this.onChangeFirstName} id="outlined-basic" color="error" placeholder="*שם פרטי" variant="outlined" />
            <TextField required value={this.state.LastName} onChange={this.onChangeLastName} id="outlined-basic" color="error" placeholder="*שם משפחה" variant="outlined" />
            <TextField required value={this.state.Id} onChange={this.onChangeId} id="outlined-basic" type="number" color="error" placeholder="*תעודת זהות" variant="outlined" />
            <TextField required value={this.state.Phone} onChange={this.onChangePhone} id="outlined-basic" ref="phone" type="number" color="error" placeholder="*טלפון" variant="outlined" />
            <TextField required value={this.state.Address} onChange={this.onChangeAddress} id="outlined-basic" color="error" placeholder="*כתובת" variant="outlined" />
            <TextField required value={this.state.City} onChange={this.onChangeCity} id="outlined-basic" color="error" placeholder="*עיר" variant="outlined" />
            <TextField value={this.state.AmountofWounded} onChange={this.onChangeAmountofWounded} id="outlined-basic" type="number" color="error" placeholder="כמות נפגעים" />
            <br></br>
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
            <br></br>
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
            <br></br>
            <TextField
              fullWidth
              required
              id="outlined-multiline-static"
              placeholder="*פרטים על האירוע"
              multiline
              rows={4}
              color="error"
              value={this.state.ReadingDescription} onChange={this.onChangedescription}
            />
            <br></br>
            <div className="boxes">
              <button className="square_btn40" onClick={this.onSubmit}>שלח</button>
              <button className="square_btn40" onClick={this.handleReset}>איפוס</button>
            </div>
          </Box>
        </Item>
      </Box>
    );
  }
}

export default Addnewcall;