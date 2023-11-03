import { createSlice } from "@reduxjs/toolkit"
import { IplaygroundState } from "./types"
import { ARR_ARROW_CODES } from "../constants"

export const initialState: IplaygroundState = {
  currentState: 0,
  totalError: 0,
  totalSuccess: 0,
  steps: [],
}

export const playgroundSlices = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentState += 1
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)
      state.steps.push({
        step: state.currentState,
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentState - 1]
        const isSuccess = step.currentValue === action.payload
        if (step.enteredValue === null) {
          state.steps[state.currentState - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSuccess,
          }
        }
        if (isSuccess) {
          state.totalSuccess += 1
        } else {
          state.totalError += 1
          state.totalSuccess = 0
        }
      }
    },
    setError: (state) => {
      if (state.steps.length) {
        const step = state.steps[state.currentState - 1]
        if (step.enteredValue === null) {
          state.totalError += 1
          state.totalSuccess = 0
          state.steps[state.currentState - 1] = {
            ...step,
            success: false,
          }
        }
      }
    },
    resetStore: () => initialState,
  },
})

export const {
  setCurrentStep,
  setSteps,
  setEnteredValue,
  setError,
  resetStore,
} = playgroundSlices.actions
export default playgroundSlices.reducer
