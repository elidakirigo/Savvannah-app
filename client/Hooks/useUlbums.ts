"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { Bounce, toast } from "react-toastify";
import { useAppSelector } from "@/app/store/hooks";
import { useDispatch } from "react-redux";
import { fetchalbums } from "@/app/store/slices/albumSlice";

/**
 * Fetches the albums from the api
 * @returns an array of all albums
 */

export const useFetchAlbums = () => {
  const [album, setAlbum] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllAlbums = async () => {
      const { data: albums } = await toast.promise(
        axios.get(process.env.NEXT_PUBLIC_URL + "/albums"),
        {
          pending: "loading albums ",
          success: "Albums loaded successfully",
          error: "No Albums found ",
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
      setAlbum(albums);
      dispatch(fetchalbums(albums));
    };

    fetchAllAlbums();
  }, []);

  return album;
};

/**
 * fetches data from redux store and sends to home
 * @returns  albums that were fetched from redux
 */

export const useAlbums = () => {
  const albumData = useAppSelector((state) => state.albums);
  const album = useFetchAlbums();

  if (albumData.albums) return albumData.albums;

  return album;
};

/**
 * Organizes the albums according to same users
 * @returns an array of organized objects with albums that share the same users
 */

export const useUserAlbum = () => {
  const albums = useAlbums();
  const user = useUser();

  const userIndex = user.map((user: { id: number }) => user.id);

  const UserAlbums = userIndex.map((data) => {
    return albums.filter((userdata: { userId: number }) => {
      if (data == userdata.userId) {
        return { data: { ...userdata } };
      }
    });
  });

  const allUserdata = user.map(
    (data: { id: number; email: string; name: string }) => {
      const noOfAlbums = UserAlbums[data.id - 1]?.length;
      const currentAlbums = UserAlbums[data.id - 1];
      return { ...data, noOfAlbums, currentAlbums };
    },
  );

  return { UserAlbums, allUserdata };
};
