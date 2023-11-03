import { Modal as MaterialModal } from "@mui/material"
import { useAppDispatch } from "../../../../app/hooks"
import { Button, TypographyHeader } from "../../../UI"
import { resetStore } from "../../store/slices"
import ResultMessage from "../ResultMessage/ResultMessage"
import fnClassName from "classnames"

import styles from "./Modal.module.css"

export interface IModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  isGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setModal, isGame } = props
  const dispatch = useAppDispatch()
  const handleClose = () => {
    setModal(false)
    dispatch(resetStore())
  }
  return (
    <MaterialModal open onClose={handleClose} className={styles.modalWrapper}>
      <div
        className={fnClassName(
          styles.modalContainer,
          isGame ? styles.modalSuccess : styles.modalError,
        )}
      >
        <ResultMessage isGame={isGame} />
        <Button className={styles.modalButton} onClick={handleClose}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
