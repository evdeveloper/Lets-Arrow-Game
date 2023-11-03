import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IMapArrowCodes } from "../../../../types"
import { IplaygroundStepsState } from "../../../../store/types"
import fnClassName from "classnames"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const getStylesRandomKeys = (element: IplaygroundStepsState): string => {
  return fnClassName(
    element.success && element.success !== null && styles.iconSuccess,
    !element.success && element.success !== null && styles.iconError,
    stylesCommon.icon,
  )
}

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((elem) => (
        <span key={elem.step} className={getStylesRandomKeys(elem)}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
