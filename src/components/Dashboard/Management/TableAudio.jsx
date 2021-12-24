import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import swal from 'sweetalert';
import Deletitem from "./Deletitem";
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
                fetch(`http://localhost:5000/audioreds/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                    });
                swal("‎הקריאה נמחקה בהצלחה", {
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


function TableAudio() {
    const [audioreds, setTodos] = useState()
    useEffect(() => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const response = JSON.parse(request.response)
                setTodos(response)
            }
        };
        request.open('GET', 'http://localhost:5000/audioreds', true);
        request.send();
    }, [])

    useEffect(() => {
        console.log(audioreds)
    }, [audioreds])


    return (
        <div>
            <h2 id="fastcall" className="heding">דיווחים מהירים</h2>
            <br />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">תאריך הקריאה</StyledTableCell>
                            <StyledTableCell align="right">שעת הקריאה</StyledTableCell>
                            <StyledTableCell align="right">הקלטה</StyledTableCell>
                            <StyledTableCell align="right">כוחות הביטחון</StyledTableCell>
                            <StyledTableCell align="right">סטטוס</StyledTableCell>
                            <StyledTableCell align="right">עריכה</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            audioreds
                                ? audioreds.map(audiored => (
                                    <TableRow>
                                        <TableCell align="right">
                                            <button onClick={() => deleteProduct(`${audiored._id}`)}>
                                                <Deletitem />
                                            </button>
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(audiored.createdAt).format('D-MM-YYYY')}
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(audiored.createdAt).format('LTS')}
                                        </TableCell>
                                        <TableCell align="right">
                                            <audio value={audiored.blobURL} src={audiored.blobURL} controls="controls" />
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="myButton-pol">{audiored.Police ? 'משטרת ישראל' : null}</div>
                                            <div className="myButton-mda">{audiored.Mada ? 'מד״א' : null}</div>
                                            <div className="myButton-mda">{audiored.Firefighters ? 'מכבי אש' : null}</div>
                                            <div className="myButton-hfc">{audiored.Hfc ? 'פיקוד העורף' : null}</div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="myButton-open">{audiored.StatusOpen ? 'פתוח' : null}</div>
                                            <div className="myButton-close">{audiored.StatusClose ? 'סגור' : null}</div>
                                            <div className="myButton-streatment">{audiored.Statustreatment ? 'בטיפול' : null}</div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Link href={"/editaudio/" + audiored._id}><EditIcon />   </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                                : null
                        }
                    </TableBody>
                </Table>
            </TableContainer>



        </div>
    );
}

export default TableAudio;

