import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addUser } from '../store/reducer/userSlice';

const UserContainer: FC = () => {
  useAppSelector((state) => state.userSlice.users);
  const dispatch = useAppDispatch();

  const user = { username: 'asdasd', age: 20 };
  return (
    <>
      <button onClick={() => dispatch(addUser(user))}>ok</button>
    </>
  );
};

export default UserContainer;
