import {useState} from "react"

import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  IconButton,
} from "@material-ui/core"

import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"

import ModalConfirm from "./ModalConfirm.js"

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
}))

const CustomersCard = ({ id, name, email, avatar, className, onRemoveCustomer }) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = _ => {
    setOpenModal(!openModal)
  }
  
  const handleRemoveCustomer = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveModal = _ => {
    handleToggleOpenModal()
  }
  
  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title={name}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Editar">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Remover" onClick={handleRemoveModal}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={ _ => handleRemoveCustomer(id)}
        title="Remover Cliente"
        message="Tem certeza que deseja remover este cliente, essa ação é irreverssível!"
      />    
    </>
  )
}

export default CustomersCard
