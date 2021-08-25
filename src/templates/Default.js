import { Container } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"

import Header from "../partials/Header/Header.js"

const useStyles = makeStyles( _ => ({
  container: {
    padding: "20px 0",
  },
}))

const Default = ({ children }) => {
  const classes = useStyles()
  return(
    <>
      <Header />
      <Container className={classes.container}>
        { children }
      </Container>
    </>
  )
}

export default Default