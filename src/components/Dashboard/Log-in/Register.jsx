import React from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import "./Login.css";
import Footer from "../../Footer"
const axios = require('axios');

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {

    axios.post('http://localhost:5000/users/register', {
      username: this.state.username,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      this.props.history.push('/Login');
    }).catch((err) => {
      swal({
        text: "err.response.data.errorMessage",
        icon: "error",
        type: "error"
      });
    });
  }

  render() {

    return (
      <div>
        <Footer />


        <div style={{ marginTop: '10px', marginBottom: '10px', direction: "rtl" }}>
          <h2 className="heding">הרשמה</h2>
          <br />
          <div>
            <TextField
              id="standard-basic"
              color="error"
              type="text"
              autoComplete="on"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              placeholder="שם משתמש"
              required
            />
            <br /><br />
            <TextField
              id="standard-basic"
              color="error"
              type="password"
              autoComplete="on"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="סיסמא"
              required
            />
            <br /><br />
            <TextField
              id="standard-basic"
              color="error"
              type="password"
              autoComplete="off"
              name="confirm_password"
              value={this.state.confirm_password}
              onChange={this.onChange}
              placeholder="הזן סיסמא בשנית"
              required
            />
            <br /><br />
            <Button
              className="button_style"
              variant="contained"
              color="error"
              size="small"
              disabled={this.state.username === '' && this.state.password === ''}
              onClick={this.register}
            >
              הירשם
            </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/login">
              כבר רשום? לחץ כאן
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
