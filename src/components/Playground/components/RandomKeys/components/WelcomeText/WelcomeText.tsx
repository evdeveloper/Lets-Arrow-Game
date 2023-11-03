import { TypographyText } from "../../../../../UI"
import loader from "./img/loader.svg"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loaader" />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </TypographyText>
  )
}

export default WelcomeText
