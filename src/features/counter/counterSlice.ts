import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, 
  // AppThunk
 } from '../../app/store';
// import { fetchCount } from './counterAPI';

export interface CounterState {
  value: any;
  status: 'idle';
}

const initialState: CounterState = {
  value: [],
  status: 'idle',
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToBaskit: (state) => {
    },
    decrement: (state) => {

    },
    incrementByAmount: (state, action: PayloadAction<any>) => {
      state.value = [...state.value,action.payload];
    },
    DelItem: (state, action: PayloadAction<any>) => {
      let delID = action.payload
      state.value.splice(delID,1)
      
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { addToBaskit, decrement,
   incrementByAmount,DelItem
   } = counterSlice.actions;

export const selectCount = (state: any) => state.counter.value;

// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default counterSlice.reducer;
