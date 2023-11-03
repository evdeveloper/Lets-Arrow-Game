// import styles from "./Message.module.css"

import { TypographyHeader } from "../../../UI"

export interface IResultMessageProps {
  isGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isGame } = props

  return isGame ? (
    <TypographyHeader>You win!</TypographyHeader>
  ) : (
    <TypographyHeader>Game over!</TypographyHeader>
  )
}

export default ResultMessage
