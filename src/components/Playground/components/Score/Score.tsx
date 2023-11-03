import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          label={
            <span>
              Errors: <strong>{state.totalError}</strong>
            </span>
          }
          color="error"
          variant="outlined"
        />
        <Chip
          label={
            <span>
              Success: <strong>{state.totalSuccess}</strong>
            </span>
          }
          color="success"
          variant="outlined"
        />
      </Stack>
    </>
  )
}

export default Score
