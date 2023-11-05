import playGroundReducer, { initialState, setCurrentStep } from "../slices"

describe("reducer setCurrentStep", () => {
  it("check setCurrentStep", () => {
    const setCurrentStepState = playGroundReducer(
      initialState,
      setCurrentStep(),
    )
    expect(initialState.currentState).toBe(0)
    expect(setCurrentStepState.currentState).toEqual(1)
  })
})
