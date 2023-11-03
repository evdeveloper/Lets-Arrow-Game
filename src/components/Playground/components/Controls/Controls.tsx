import { Button } from "../../../UI"
import { PlayArrowRounded, PauseRounded } from "@mui/icons-material"

import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setisTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setisTimerActive } = props

  return (
    <div>
      <Button
        endIcon={<PlayArrowRounded />}
        onClick={() => setisTimerActive(true)}
        className={styles.button}
        disabled={isTimerActive}
      >
        Play
      </Button>
      <Button
        endIcon={<PauseRounded />}
        onClick={() => setisTimerActive(false)}
        className={styles.button}
        disabled={!isTimerActive}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
