import playGroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setError,
} from "../slices"

describe("reducer setError", () => {
  it("check setError", () => {
    const setCurrentStepState = playGroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepsState = playGroundReducer(setCurrentStepState, setSteps())
    const setErrorState = playGroundReducer(setStepsState, setError())
    expect(setErrorState.totalError).toBe(1)
    expect(setErrorState.steps[0].success).toBe(false)
  })
})
