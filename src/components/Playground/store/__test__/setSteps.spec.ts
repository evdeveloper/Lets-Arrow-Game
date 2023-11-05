import playGroundReducer, {
  initialState,
  setSteps,
  setCurrentStep,
} from "../slices"

describe("redicer setSteps", () => {
  it("check", () => {
    const setCurrentStepState = playGroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepsState = playGroundReducer(setCurrentStepState, setSteps())
    const firstSteps = {
      step: 1,
      currentValue: setStepsState.steps[0].currentValue,
      enteredValue: null,
      success: null,
    }

    expect(initialState.steps.length).toEqual(0)
    expect(setStepsState.steps.length).toEqual(1)
    expect(setStepsState.steps[0]).toEqual(firstSteps)
  })
})
