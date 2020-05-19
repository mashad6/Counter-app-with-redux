const initialState = {
  count: "",
  fajr: 0,
  zuhr: 0,
  asar: 0,
  magrib: 0,
  isha: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE":
      const val = action.payload;
      return {
        // ...state,
        fajr: val,
        zuhr: val,
        asar: val,
        magrib: val,
        isha: val,
      };
    case "ONSUBMIT":
      return {
        ...state,
        count: "",
      };
    case "DEC_FAJR":
      return { ...state, fajr: state.fajr - 1 };
    case "DEC_ZUHR":
      return { ...state, zuhr: state.zuhr - 1 };
    case "DEC_ASAR":
      return { ...state, asar: state.asar - 1 };
    case "DEC_MAGRIB":
      return { ...state, magrib: state.magrib - 1 };
    case "DEC_ISHA":
      return { ...state, isha: state.isha - 1 };
  }

  return state;
}
