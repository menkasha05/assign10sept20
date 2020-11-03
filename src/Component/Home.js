import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import DetailedList from "./DetailedList";
import RepoList from "./RepoList";
import FavouriteList from "./FavouriteList";
import { Switch, Link, Route, useParams } from "react-router-dom";
import RenderMain from "./Renderprops/RenderMain";
import Hcomp from "./Renderprops/HOC/Hcomp";
import CompModalReuse from "./CompModalReuse";
import ModalInModal from "./ModalInModal/ModalInModal";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },

  tabs: {
    backgroundColor: "#2e1534",
  },
}));

export default function Home(props) {
  const { history } = props;
  const { page } = props.match.params;
  const classes = useStyles();

  // const tabNameToIndex = {
  //   0: "list",
  //   1: "details",
  //   2: "favourite",
  // };
  // const indexToTabName = {
  //   list: 0,
  //   details: 1,
  //   favourite: 2,
  // };
  // console.log(indexToTabName[page]);
  // const [value, setValue] = React.useState(indexToTabName[page]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   history.push(`/${tabNameToIndex[newValue]}`);
  // };

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <StyledTabs
          value={history.location.pathname}
          // onChange={handleChange}
          // aria-label="styled tabs example"
        >
          <StyledTab
            value="/list"
            label="Repositories"
            component={Link}
            to="/list"
          />

          <StyledTab
            value="/details"
            label="Details"
            component={Link}
            to="/details"
          />
          <StyledTab
            value="/favourite"
            label="My Favourite"
            component={Link}
            to="/favourite"
          />
        </StyledTabs>

        <Typography className={classes.padding} />
      </div>

      <Switch>
        <Route path="/list" component={RepoList} />
        <Route path="/details" component={DetailedList} />
        <Route path="/favourite" component={FavouriteList} />
      </Switch>

      <Route exact path="/render" component={RenderMain} />
      <Route exact path="/modal-reuse" component={CompModalReuse} />
      <Route exact path="/hoc" component={Hcomp} />
      <Route exact path="/ModalInModal" component={ModalInModal} />
      {/* {value === 0 && <RepoList />}
      {value === 1 && <DetailedList />}
      {value === 2 && <FavouriteList />} */}
    </div>
  );
}
