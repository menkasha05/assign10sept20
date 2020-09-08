import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    width: "50%",
    minWidth: 450,
    margin: "auto",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Mainweb repo", 159, 6.0, 24, 4.0),
  createData("carrier repo", 237, 9.0, 37, 4.3),
  createData("sat repo", 262, 16.0, 24, 6.0),
  createData("Admin repo", 305, 3.7, 67, 4.3),
  createData("userdashboard repo", 356, 16.0, 49, 3.9),
];

function DetailList(props) {
  const classes = useStyles();
  useEffect(() => {
    console.log(props);
  }, []);
  const { data } = props;
  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" gutterBottom={true}>
        About my Repository
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {data !== null &&
            data.map(
              (d) =>
                d && (
                  <TableRow key={d.id}>
                    <TableRow>
                      <TableCell
                        style={{
                          textTransform: "uppercase",
                          marginTop: "50%",
                          fontWeight: 900,
                        }}
                      >
                        {d.title}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      {" "}
                      <TableCell>{d.body}</TableCell>
                    </TableRow>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = (state) => {
  console.log(state.detailData);
  return {
    data: state.detailData,
  };
};
export default connect(mapStateToProps, null)(DetailList);
