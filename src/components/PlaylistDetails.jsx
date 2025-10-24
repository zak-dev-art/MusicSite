import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlaylistDetail() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch the playlist by ID
  useEffect(() => {
    fetch(https://json-server-vercel-rho-ten.vercel.app/playlists/${id})
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch playlist");
        return res.json();
      })
      .then((data) => {
        setPlaylist(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // ✅ Update track rating
  function handleRatingChange(trackId, newRating) {
    if (!playlist) return;

    const updatedTracks = playlist.tracks.map((track) =>
      track.id === trackId ? { ...track, rating: newRating } : track
    );

    // Update locally first for instant UI response
    setPlaylist({ ...playlist, tracks: updatedTracks });

    // Send PATCH to json-server
    fetch(https://json-server-vercel-rho-ten.vercel.app/playlists/${playlist.id}, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tracks: updatedTracks }),
    })
      .then((res) => res.json())
      .then((data) => setPlaylist(data))
      .catch((err) => console.error("Error updating rating:", err));
  }

  // ✅ Loading / empty states
  if (loading) return <h2 className="text-center text-gray-500 mt-10">Loading...</h2>;
  if (!playlist) return <h2 className="text-center text-red-500 mt-10">Playlist not found.</h2>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <img
        src={playlist.image}
        alt={playlist.name}
        className="rounded-xl mb-4 w-full h-64 object-cover"
      />
      <h2 className="text-3xl font-bold mb-2">{playlist.name}</h2>
      <p className="text-gray-600 mb-6">{playlist.description}</p>

      <h3 className="text-xl font-semibold mb-4">Tracks</h3>
      <ul className="space-y-3">
        {playlist.tracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-semibold">{track.title}</p>
              <p className="text-sm text-gray-500">{track.artist}</p>
              <p>⭐ {track.rating ?? 0}</p>
              <audio controls src={track.audio} className="mt-1 w-64" />
            </div>
            <button
              onClick={() => handleRatingChange(track.id, (track.rating ?? 0) + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
            >
              + Rate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}