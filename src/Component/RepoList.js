import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { withRouter, Link } from "react-router-dom";
import {
  handleFav,
  getData,
  handleDetailData,
} from "../Container/myActions/action";
import { connect } from "react-redux";
//import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  table: {
    width: "50%",
    minWidth: 450,
    margin: "auto",
  },
});

function RepoList(props) {
  // const [data, setData] = React.useState([]);
  const [favData, setFavData] = React.useState([]);

  const [fav, setFav] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleFav = (data) => {
    console.log(data);
    setFav(!fav);
    props.addFav(data);
  };

  useEffect(() => {
    props.getData();
    console.log(view);
  }, []);
  // console.log(data[0]);

  const handleDetail = (d) => {
    setView(!view);
    props.detailData(d);
    console.log(view);

    props.history.push("/details");
  };

  const { data, detailData } = props;

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" gutterBottom={true}>
        My Repositories
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {data !== null &&
            data.map(
              (d) =>
                d && (
                  <TableRow key={d.id}>
                    {fav && (
                      <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                      >
                        <Alert severity="success">
                          <AlertTitle>Added to wish lists</AlertTitle>
                          For seeing all the wish list.Click —{" "}
                          <strong>My Favourite!</strong>
                        </Alert>
                      </Snackbar>
                    )}
                    {view && (
                      <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                      >
                        <Alert severity="success">
                          <AlertTitle>Go to Details Tab</AlertTitle>
                          Due to some issue in Routing tabs not navigating.
                          Click— <strong> Details!</strong>
                        </Alert>
                      </Snackbar>
                    )}
                    <TableCell component="th" scope="row">
                      {d.title}
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <Button onClick={() => handleDetail(d.id)}>
                        View more
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                      >
                        {fav ? (
                          <i
                            className="fas fa-heart"
                            onClick={() => handleFav(d.id)}
                          ></i>
                        ) : (
                          <i
                            className="far fa-heart"
                            onClick={() => handleFav(d.id)}
                          ></i>
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
  console.log(state.product);
  return {
    data: state.product,
    fav: state.wish,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (d) => {
      console.log(d);
      dispatch(handleFav(d));
    },
    getData: () => {
      dispatch(getData());
    },
    detailData: (id) => {
      dispatch(handleDetailData(id));
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RepoList)
);
