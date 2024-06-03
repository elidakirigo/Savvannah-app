"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAlbums } from "./useUlbums";
import { useAppSelector } from "@/app/store/hooks";
import { Bounce, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchphotos } from "@/app/store/slices/photoSlice";

/**
 * Fetches the photos from the api
 * @returns an array of all photos
 */

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchphoto = async () => {
      const { data: photos } = await toast.promise(
        axios.get(process.env.NEXT_PUBLIC_URL + "/photos"),
        {
          pending: "loading photos ",
          success: "photos loaded successfully",
          error: "No photos found ",
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
      setPhotos(photos);
      dispatch(fetchphotos(photos));
    };

    fetchphoto();
  }, []);

  return photos;
};

/**
 * fetches data from redux store and sends to home
 * @returns  photos that were fetched from redux
 */

export const usePhotos = () => {
  const photoData = useAppSelector((state) => state.photos);
  const photo = useFetchPhotos();

  if (photoData.photos) return photoData.photos;

  return photo;
};

/**
 * Organizes the photos according to same albums
 * @returns an array of organized objects with photos that share the same album
 */
export const useAlbumPhotos = () => {
  const album = useAlbums();
  const photos = usePhotos();
  const AlbumIndex = album.map((album: { id: number }) => album.id);

  const Albums = AlbumIndex.map((data) => {
    return photos.filter((albumdata: { albumId: number }) => {
      if (data == albumdata.albumId) {
        return { data: { ...albumdata } };
      }
    });
  });

  return Albums;
};
