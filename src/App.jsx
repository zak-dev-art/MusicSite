import React, { useEffect, useState } from "react";
import CreatePlaylistModal from "./components/CreatePlaylistModal";
import PlaylistList from "./components/PlaylistList";

const API = "https://json-server-vercel-rho-ten.vercel.app/playlists";

export default function App() {
  const [playlists, setPlaylists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all playlists on load
  useEffect(() => {
    fetchPlaylists();
  }, []);

  async function fetchPlaylists() {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setPlaylists(data);
    } catch (err) {
      console.error("Error fetching playlists:", err);
    } finally {
      setLoading(false);
    }
  }

  // ✅ Create a new playlist
  async function handleCreate(newPlaylist) {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newPlaylist, tracks: [] }),
    });
    setShowModal(false);
    fetchPlaylists();
  }

  // ✅ Delete playlist
  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchPlaylists();
  }

  // ✅ Handle rating update for tracks
  async function handleRatingChange(trackId, newRating) {
    if (!selectedPlaylist) return;

    const updatedTracks = selectedPlaylist.tracks.map((track) =>
      track.id === trackId ? { ...track, rating: newRating } : track
    );

    const updatedPlaylist = { ...selectedPlaylist, tracks: updatedTracks };
    setSelectedPlaylist(updatedPlaylist);

    await fetch(`${API}/${selectedPlaylist.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tracks: updatedTracks }),
    });

    fetchPlaylists(); // Refresh main list
  }

  // ✅ Back button to playlist list
  function handleBack() {
    setSelectedPlaylist(null);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">🎶 YourMusicBeats</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
        >
          + Create Playlist
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading playlists...</p>
        ) : !selectedPlaylist ? (
          <PlaylistList
            playlists={playlists}
            onDelete={handleDelete}
            onSelect={setSelectedPlaylist}
          />
        ) : (
          <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
            <button
              onClick={handleBack}
              className="text-indigo-600 hover:underline mb-4"
            >
              ← Back to playlists
            </button>

            <img
              src={selectedPlaylist.image}
              alt={selectedPlaylist.name}
              className="rounded-xl mb-4 w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-bold mb-2">{selectedPlaylist.name}</h2>
            <p className="text-gray-600 mb-6">{selectedPlaylist.description}</p>

            <h3 className="text-xl font-semibold mb-3">Tracks</h3>
            {selectedPlaylist.tracks.length === 0 ? (
              <p className="text-gray-500">No tracks available.</p>
            ) : (
              <ul className="space-y-3">
                {selectedPlaylist.tracks.map((track) => (
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
                      onClick={() =>
                        handleRatingChange(track.id, (track.rating ?? 0) + 1)
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                    >
                      + Rate
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <CreatePlaylistModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
}