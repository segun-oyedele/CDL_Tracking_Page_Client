import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deliveryStatus: "",
  trackingEvents: [],
  latestEvent: [],
  latestInfo: [],
  delivered: false,
  deliveryError: false,
  exception: "",
  success: false,
}

export const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setTrackingEvents: (state, {payload}) => {
      state.trackingEvents = payload.reverse()
      state.success = true;
    },
    latestEvent: (state) => {
      state.latestEvent = state.trackingEvents[0];

      let events = [...state.trackingEvents];

      events.map((value, index, array) => {

        if (index === 0) {
          state.latestInfo = value
          state.deliveryStatus = value.trackingEvents
          
          if (value.trackingEvents === 'Package Scanned At Delivery') {
            state.delivered = true
          } else { state.delivered = false }

          state.exception = value.exception
        }
      })
    }
  },
});

export const { setTrackingEvents, latestEvent } = trackingSlice.actions;

export default trackingSlice.reducer;