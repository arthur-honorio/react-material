import {useState} from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"

import { useHistory } from "react-router-dom"

import MenuIcon from "@material-ui/icons/Menu"
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import HomeIcon from '@material-ui/icons/Home'

import useStyles from "./Headers.style.js"

const Header = _ => {
  const classes = useStyles()

  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = _ => {
    setMenuOpen(!menuOpen)
  }
  
  const handlePageChange = page => {
    history.push(page)
    setMenuOpen(!menuOpen)
  }



  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={ _ => handleMenuToggle()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={ _ => handleMenuToggle()} className={classes.drawer}>
        <List>
          <ListItem button onClick={_ => handlePageChange("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
          <ListItem button onClick={_ => handlePageChange("/customers")}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>
              Adicionar Cliente
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
