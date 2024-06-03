"use client";

import { useAppSelector } from "@/app/store/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { fetchusers } from "@/app/store/slices/userSlice";

/**
 * Fetch user data from api returning all users
 * @returns an array of all users
 */
export const usefetchuser = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: users } = await toast.promise(
        axios.get(process.env.NEXT_PUBLIC_URL + "/users"),
        {
          pending: "loading users ",
          success: "user loaded successfully",
          error: "No user found ",
        },
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
      setUser(users);
      dispatch(fetchusers(users));
    };

    fetchUser();
  }, []);

  return user;
};

/**
 * fetches data from redux store and sends to homepage
 * @returns  users that were fetched from redux
 */
export const useUser = () => {
  const UserData = useAppSelector((state) => state.users);

  const user = usefetchuser();

  if (UserData.users) return UserData.users;

  return user;
};
