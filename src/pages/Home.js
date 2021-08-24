import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
}from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

import "./Home.css"

const useStyle = makeStyles({
  title: {
    flexGrow: 1,
    marginLeft: 20,
  },
})

const Home = _ => {
  const classes = useStyle()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Home