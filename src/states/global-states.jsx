import React from "react";
import { createGlobalState, set } from "react-hooks-global-state";

const initialState = { login: false };
const { useGlobalState, setGlobalState } = createGlobalState(initialState);

export { useGlobalState, setGlobalState };
