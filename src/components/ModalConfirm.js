
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core"

const Modal = ({ open, onClose, onConfirm, message, title  }) => {

  return(      
    <Dialog 
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>
          Remover
        </Button>
        <Button onClick={onClose}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal