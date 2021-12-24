import React from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import "./Login.css";
import Footer from "../../Footer"
import logo from '../../../logo.png';

const axios = require('axios');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {

    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios.post('http://localhost:5000/users/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      this.props.history.push('/Management');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }

  render() {

    return (
      <div>
        <Footer />
        <div style={{ marginTop: '10px', marginBottom: '10px', direction: "rtl" }}>
          <h2 className="heding">התחברות</h2>
          <br />

          <div>
            <TextField
              id="standard-basic"
              color="error"
              type="text"
              autoComplete="off"
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
              autoComplete="off"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="סיסמא"
              required
            />
            <br /><br />
            <Button
              className="button_style"
              variant="contained"
              color="error"
              size="small"
              disabled={this.state.username === '' && this.state.password === ''}
              onClick={this.login}
            >
              התחבר
            </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/register">
              לא רשום? לחץ כאן
            </Link>
          </div>
          <img src={logo} alt="logo" width="200px" object-position="top" />
        </div>
      </div>
    );
  }
}
