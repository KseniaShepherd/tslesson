import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface IPerson {
  username: string;
  age: number;
}
interface IInitialState {
  users: IPerson[];
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  users: [
    {
      username: 'asdas',
      age: 20,
    },
    {
      username: 'asdas',
      age: 20,
    },
  ],
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IPerson>) {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
