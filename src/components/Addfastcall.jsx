import React from 'react';
import Record from '../mp3-audio/src/Record'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.error.main,
}));

class Addnfastcall extends React.Component {


  render() {
    return (
      <Box container spacing={1}>
        <Item>
          <h2 className="heding">דיווח קריאה מהירה</h2>
          <p>קריאה מהירה מטרתה להגיש קריאה במקרה חירום ממשי, אם אין באפשרותכם לכתוב והינכם נמצאים במצב חירום קיים, יש באפשרוכתם להגיש את הקריאה הנ״ל. </p>
          <p>נא לציין בקריאתכם את הפרטים הבאים: שם, מספר טלפון, כתובת מלאה, עיר, כמות נפגעים (במידה ויש) ופרטים מלאים על הקריאה.</p>
          <center>
            <Record />
          </center>
        </Item>
      </Box>


    );
  }
}

export default Addnfastcall;