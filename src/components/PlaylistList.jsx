import React from "react";

export default function PlaylistList({ playlists, onDelete, onSelect }) {
  if (!playlists.length) {
    return <p className="text-center text-gray-500 mt-10">No playlists found.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
          onClick={() => onSelect(playlist)}
        >
          <img
            src={playlist.image}
            alt={playlist.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold text-gray-800 mt-2">{playlist.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{playlist.description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(playlist.id);
            }}
            className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}