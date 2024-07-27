import { createSlice } from "@reduxjs/toolkit";
export const DataSlice = createSlice({
  name: "Data",
  initialState: {
    Data: {
      latitute: "",
      longitude: "",
    },

    pending: false,
    error: null,
    errorMessage: null,
  },
  reducers: {

    setlatitute: (state, action) => {
        state.latitute = action.payload;
      },
      setlongitude: (state, action) => {
        state.longitude = action.payload;
      },

  },
});

export const { setlatitute, setlongitude} =DataSlice.actions;
export default DataSlice.reducer;
