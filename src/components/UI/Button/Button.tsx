import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"
import fnClassName from "classnames"

import styles from "./Button.module.css"

export interface IButtonProps extends MaterialButtonProps {
  //
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialButton
      variant="contained"
      size="small"
      {...props}
      className={fnClassName(styles.button, className)}
    >
      {children}
    </MaterialButton>
  )
}

export default Button
