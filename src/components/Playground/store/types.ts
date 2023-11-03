export interface IplaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IplaygroundState {
  currentState: number
  steps: IplaygroundStepsState[]
  totalSuccess: number
  totalError: number
}
