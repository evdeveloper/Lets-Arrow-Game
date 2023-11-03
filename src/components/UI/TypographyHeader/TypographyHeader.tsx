import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"

import fnClassName from "classnames"

import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends MaterialTypographyProps {
  //
}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography
      variant="h3"
      {...props}
      className={fnClassName(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}

export default TypographyHeader
