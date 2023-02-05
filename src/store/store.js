import tracking from './tracking/trackingSlice';

import { configureStore } from '@reduxjs/toolkit';

export let store = null;

export default function getStore(incomingPreloadState) {
  store = configureStore({
    reducer: {
      tracking
    },
    preloadedState: incomingPreloadState
  });
  return store;
};