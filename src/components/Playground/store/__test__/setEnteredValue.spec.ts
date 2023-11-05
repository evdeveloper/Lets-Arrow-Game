import { ARR_ARROW_CODES } from "../../constants"
import playGroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setEnteredValue,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check setEnteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]
    const setCurrentStepState = playGroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepsState = playGroundReducer(setCurrentStepState, setSteps())
    const setEnteredValueState = playGroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )
    expect(setStepsState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })
  it("check totalSuccess and totalError", () => {
    const setCurrentStepState = playGroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepsState = playGroundReducer(setCurrentStepState, setSteps())
    const setEnteredValueState = playGroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )
    expect(setStepsState.totalSuccess).toBe(0)
    expect(setStepsState.totalError).toBe(0)
    expect(setEnteredValueState.totalSuccess).toBe(1)
    expect(setEnteredValueState.totalError).toBe(0)
  })
})
