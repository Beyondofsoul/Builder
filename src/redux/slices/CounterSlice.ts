import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  [id: string]: number; // Храним состояния счетчиков по id
}

const initialState: CounterState = {};

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state[id]) {
        state[id] += 1;
      } else {
        state[id] = 1; // Инициализируем значение, если его еще нет
      }
    },
    decrease: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state[id]) {
        state[id] -= 1;
      }
    },
    equally: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state[id] = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increase, decrease, equally } = counterSlice.actions;

export default counterSlice.reducer;
