import { useState, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setError } from "./store/slices"
import { INTERVAL_TIME, END_GAME_CONDITIONS } from "./constants"

import Controls from "./components/Controls"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"

import styles from "./Playground.module.css"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const [isTimerActive, setisTimerActive] = useState<boolean>(false)
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isModal, setModal] = useState<boolean>(false)
  const [isGame, setGame] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      intervalId.current = setInterval(() => {
        dispatch(setError())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(intervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(intervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch])

  useEffect(() => {
    const totalSuccess =
      state.totalSuccess === END_GAME_CONDITIONS.SUCCESS_COUNT
    const totalError = state.totalError === END_GAME_CONDITIONS.ERROR_COUNT
    totalSuccess && setGame(true)
    totalError && setGame(false)

    if (totalError || totalSuccess) {
      setModal(true)
      setisTimerActive(false)
    }
  }, [state.totalSuccess, state.totalError])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setisTimerActive={setisTimerActive}
        />
      </div>
      {isModal && <Modal setModal={setModal} isGame={isGame} />}
    </div>
  )
}

export default Playground
