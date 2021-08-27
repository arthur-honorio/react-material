import { useState, useEffect } from "react"
import axios from "axios"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import CustomersCard from "../components/CustomersCard.js"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}))

const Customers = () => {
  const classes = useStyles()

  const [customers, setCustomers] = useState([])
  
  useEffect( _ => {
    axios.get("https://reqres.in/api/users")
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [])

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then( _ => {
        const newCustomersState = customers.filter(customer => customer.id !== id)
        setCustomers(newCustomersState)
      }
    )
  }

  return(
    <Grid container>
      {customers.map( customer => (
        <Grid item key={customer.id}  xs={4}>
          <CustomersCard 
          id={customer.id}
          name= {`${customer.first_name} ${customer.last_name}`}
          email= {customer.email}
          avatar= {customer.avatar} 
          className= {classes.card}
          onRemoveCustomer={handleRemoveCustomer}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Customers