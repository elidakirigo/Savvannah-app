"use client";

import { useRouter } from "next/navigation";
import { useAlbumPhotos } from "../../../../Hooks/usePhotos";
import Image from "next/image";

type Props = {
  currentId: string;
};

const Album = ({ currentId }: Props) => {
  const AlbumPhotos = useAlbumPhotos();
  const router = useRouter();

  const currentAlbum = AlbumPhotos[Number(currentId) - 1];
  console.log(currentAlbum);

  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg m-5 max-w-[900px] border-[2px]">
      <h1
        className="text-[30px] p-5 text-purple-700 text-bold"
        data-testid="albumId-header"
      >
        {currentAlbum && currentAlbum.length > 0 && (
          <>AlbumID : {currentAlbum[0].albumId}</>
        )}
      </h1>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
              data-testid="imgtittle-header"
            >
              image title
            </th>
            <th scope="col" className="px-6 py-3" data-testid="image-header">
              image
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
              data-testid="imgid-header"
            >
              image id
            </th>
            <th scope="col" className="px-6 py-3" data-testid="albumId-head">
              album id
            </th>
          </tr>
        </thead>
        <tbody>
          {currentAlbum?.map(({ thumbnailUrl, title, id, url, albumId }) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => router.push("/photo/" + id)}
              key={id}
              data-testid="albumLink"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 max-w-36 bg-gray-50 dark:text-white dark:bg-gray-800 hover:bg-slate-500"
                data-testid="albumtitle"
              >
                {title}
              </th>
              <td className="px-6 py-4 hover:bg-slate-600">
                <Image
                  src={
                    url ||
                    "https://cdn.vectorstock.com/i/1000v/58/48/blank-photo-icon-vector-3265848.jpg"
                  }
                  alt={title}
                  width={50}
                  height={50}
                  unoptimized={true}
                  data-testid="image"
                />
              </td>
              <td
                className="px-6 py-4 bg-gray-50 dark:bg-gray-800"
                data-testid="imageId"
              >
                {id}
              </td>
              <td className="px-6 py-4" data-testid="albumId">
                {albumId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Album;
