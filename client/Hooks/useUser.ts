"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_URL)
    const fetchUser = async () => {
      const { data: users } = await axios.get(
        process.env.NEXT_PUBLIC_URL + "/users",
      );
      setUser(users);
    };

    fetchUser();
  }, []);

  return user;
};
