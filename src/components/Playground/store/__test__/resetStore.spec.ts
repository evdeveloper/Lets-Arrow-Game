import playGroundReducer, {
  initialState,
  setCurrentStep,
  resetStore,
} from "../slices"

describe("reducer resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = playGroundReducer(
      initialState,
      setCurrentStep(),
    )
    const resetStoreState = playGroundReducer(setCurrentStepState, resetStore())
    expect(resetStoreState).toEqual(initialState)
  })
})
