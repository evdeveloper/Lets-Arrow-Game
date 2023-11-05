import playGroundReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check", () => {
    const state = playGroundReducer(undefined, { type: "unknown" })
    expect(state).toEqual(initialState)
  })
})
