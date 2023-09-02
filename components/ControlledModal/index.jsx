import { ModalBackground, ModalBody } from "./style"
import CloseIcon from '@mui/icons-material/Close';


const ControlledModal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <ModalBackground
      onClick={onRequestClose}
    >
      <ModalBody
        onClick={e => e.stopPropagation()}
      >
        <CloseIcon className="closeIcon" onClick={onRequestClose}/>
        {children}
      </ModalBody>
    </ModalBackground>
  ) : null
}

export default ControlledModal