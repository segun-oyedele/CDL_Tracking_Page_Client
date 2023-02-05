import { createAsyncThunk } from '@reduxjs/toolkit';

import { latestEvent, setTrackingEvents } from './trackingSlice';


export const fetchLatestEvents = createAsyncThunk("tracking/fetchLatestEvents", async({ tracking }, { dispatch }) => {

  let response = await fetch(`http://localhost/Xcelerator/CDLTracker/api/Tracking?orderTrackingId=${tracking}`);
  const { result, isSuccess } = await response.json();
  console.log("HERE2")
  if (isSuccess) {
    dispatch(setTrackingEvents(result[0].detels));
    dispatch(latestEvent());
  }
  
});
