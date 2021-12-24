import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Deletitem from "./Deletitem";
import moment from 'moment';
import swal from 'sweetalert';
import { Link } from "@chakra-ui/react";
import EditIcon from '@mui/icons-material/Edit';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function deleteProduct(id) {
    swal({
        title: 'האם אתה בטוח שברצונך למחוק את הקריאה?',
        icon: "warning",
        dangerMode: true,
        buttons: ["לא", "כן"],

    })
        .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/redalerts/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                    });
                swal("הקריאה נמחקה בהצלחה", {
                    icon: "success",
                    buttons: false,
                });
                window.location.reload();
            } else {
                swal("הקריאה לא נמחקה", {
                    icon: "warning",
                    buttons: false,
                });
            }
        });

}


export default function TableRed() {
    const [redalerts, setTodos] = useState()

    useEffect(() => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const response = JSON.parse(request.response)
                setTodos(response)
            }
        };
        request.open('GET', 'http://localhost:5000/redalerts', true);
        request.send();
    }, [])

    useEffect(() => {
        console.log(redalerts)
    }, [redalerts])


    return (
        <div>
            <br />
            <h2 id="ragcall" className="heding">דיווחים על נפילות</h2>
            <br />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">תאריך הקריאה</StyledTableCell>
                            <StyledTableCell align="right">שעת פתיחת הקריאה</StyledTableCell>
                            <StyledTableCell align="right">תעודת זהות</StyledTableCell>
                            <StyledTableCell align="right">שם פרטי</StyledTableCell>
                            <StyledTableCell align="right">שם משפחה</StyledTableCell>
                            <StyledTableCell align="right">כתובת</StyledTableCell>
                            <StyledTableCell align="right">עיר</StyledTableCell>
                            <StyledTableCell align="right">טלפון</StyledTableCell>
                            <StyledTableCell align="right">כמות פצועים</StyledTableCell>
                            <StyledTableCell align="right">כוחות הביטחון</StyledTableCell>
                            <StyledTableCell align="right">תיאור הקריאה</StyledTableCell>
                            <StyledTableCell align="right">סטטוס</StyledTableCell>
                            <StyledTableCell align="right">עריכה</StyledTableCell>
                        </TableRow>


                    </TableHead>
                    <TableBody>
                        {
                            redalerts
                                ? redalerts.map(redalert => (
                                    <TableRow>
                                        <TableCell align="right">
                                            <button onClick={() => deleteProduct(`${redalert._id}`)}>
                                                <Deletitem />
                                            </button>
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(redalert.createdAt).format('D-MM-YYYY')}
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(redalert.createdAt).format('LTS')}
                                        </TableCell>
                                        <TableCell align="right">{redalert.Id}</TableCell>
                                        <TableCell align="right">
                                            {redalert.FirstName}
                                        </TableCell>
                                        <TableCell align="right">{redalert.LastName}</TableCell>
                                        <TableCell align="right">{redalert.Address}</TableCell>
                                        <TableCell align="right">{redalert.City}</TableCell>
                                        <TableCell align="right">{redalert.Phone}</TableCell>
                                        <TableCell align="right">{redalert.AmountofWounded}</TableCell>
                                        <TableCell align="right">
                                            <div className="myButton-pol">{redalert.Police ? 'משטרת ישראל' : null}</div>
                                            <div className="myButton-mda">{redalert.Mada ? 'מד״א' : null}</div>
                                            <div className="myButton-mda">{redalert.Firefighters ? 'מכבי אש' : null}</div>
                                            <div className="myButton-hfc">{redalert.Hfc ? 'פיקוד העורף' : null}</div>
                                        </TableCell>
                                        <TableCell align="right">{redalert.ReadingDescription}</TableCell>
                                        <TableCell align="right">
                                            <div className="myButton-open">{redalert.StatusOpen ? 'פתוח' : null}</div>
                                            <div className="myButton-close">{redalert.StatusClose ? 'סגור' : null}</div>
                                            <div className="myButton-streatment">{redalert.Statustreatment ? 'בטיפול' : null}</div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Link href={"/edit/" + redalert._id}><EditIcon />   </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                                : null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
        </div>
    );
}


