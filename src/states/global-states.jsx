import { createGlobalState } from "react-hooks-global-state";

const initialState = { login: false, viewingImage: "" };
const { useGlobalState, setGlobalState } = createGlobalState(initialState);

export { useGlobalState, setGlobalState };
