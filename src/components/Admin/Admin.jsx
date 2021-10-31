
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Admin({getFeedback}) {

    const feedbackList = useSelector(store => store.adminReducer);

    console.log('--- this is the feebacklist from the db', feedbackList);

    useEffect(() => {
        getFeedback();
      }, []);

    return (


        <TableContainer component={Paper}>
            <Table 
                sx={{ minWidth: 450 }}
                aria-label="simple table"
                size="small"
            >
                <TableHead >
                    <TableRow >
                        <TableCell 
                            align="center"
                            size="medium"
                        >Feeling</TableCell>
                        <TableCell align="center">Understanding</TableCell>
                        <TableCell align="center">Support</TableCell>
                        <TableCell align="left">Comments</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedbackList.map((listItem) => (
                        <TableRow
                            key={listItem.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover="true"
                        >
                            <TableCell align="center">{listItem.feeling}</TableCell>
                            <TableCell align="center">{listItem.understanding}</TableCell>
                            <TableCell align="center">{listItem.support}</TableCell>
                            <TableCell align="left">{listItem.comments}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Admin;