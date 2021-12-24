import React from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.error.main,
}));


export default function BoxComponent() {
  return (
    <Box container spacing={1}>
      <Box>
        <Item>
          <h2 className="heding">כפתורי חירום</h2>
          <br />
          <Link href="tel:100">
            <button className="btn_police">
              <center>
                <img src={"../imeges/police.png"} alt="" width="25px" height="25px" />
                משטרת ישראל
              </center>
            </button>
          </Link>
          <Link href="tel:101">
            <button className="btn_mda">
              <center>
                <img src={"../imeges/mda.png"} alt="" width="25px" height="25px" />
                מד״א
              </center>
            </button>
          </Link>
          <Link href="tel:102">
            <button className="btn_mda">
              <center>
                <img src={"../imeges/firefighter.png"} alt="" width="25px" height="25px" />
                מכבי אש
              </center>
            </button>
          </Link>
          <Link href="tel:1221">
            <button className="btn_hzala">
              <center>
                <img src={"../imeges/hzala.png"} alt="" width="25px" height="25px" />
                איחוד הצלה
              </center>
            </button>
          </Link>
        </Item>
      </Box>
      <Box>
        <Item>
          <h2 className="heding">מי אנחנו?</h2>
          <p>כיום ובעצם מאז שאנחנו זוכרים את עצמנו, מדינת ישראל ואזרחיה נמצאים תחת איום תמידי. האפליקציה שלנו תעזור לתת לאזרח אפשרות דיווח מיידי בזמן אמת על אירוע ירי רקטי ותעזור לדווח על כך במהירות לרשויות הרלוונטיות.
            דיווח על מיקום נפילה על מנת שכוחות הביטחון יוכלו להגיע מהר יותר לזירה, דיווח על נפגעים אשר יגיע לכוחות ההצלה במהרה בזמן מלחמה או בזמן ירי רקטי לעבר מדינת ישראל.
          </p>
        </Item>
      </Box>
      <Box>
        <Item>
          <h2 className="heding">הגבלות</h2>
          <p>אין הגבלות מיוחדות כעת.</p>
        </Item>
      </Box>
      <Box>
        <Item>
          <h2 className="heding">מפת התגוננות</h2>
          <br />
          <center>
            <img src={"../imeges/map.jpeg"} alt="" />
          </center>
        </Item>
      </Box>
    </Box>
  );
}