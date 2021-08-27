// import {makeStyles} from "@material-ui/core/styles"
import { Typography }  from "@material-ui/core"

// const useStyles = makeStyles({})

const Page = ({ title, Component }) => {
  // const classes = useStyles()
  return (
    <>
      <Typography variant="h3">
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default Page