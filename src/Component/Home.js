import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import DetailedList from "./DetailedList";
import RepoList from "./RepoList";
import FavouriteList from "./FavouriteList";

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
  console.log(page);
  const tabNameToIndex = {
    0: "list",
    1: "details",
    2: "favourite",
  };
  const indexToTabName = {
    list: 0,
    details: 1,
    favourite: 2,
  };
  console.log(indexToTabName[page]);
  const [value, setValue] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/${tabNameToIndex[newValue]}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Repositories" />

          <StyledTab label="Details" />
          <StyledTab label="My Favourite" />
        </StyledTabs>

        <Typography className={classes.padding} />
      </div>
      {value === 0 && <RepoList />}
      {value === 1 && <DetailedList />}
      {value === 2 && <FavouriteList />}
    </div>
  );
}
