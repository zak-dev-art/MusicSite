import React from 'react'


export default function CreatePlaylistButton({ onClick }) {
return (
<button onClick={onClick} className="bg-indigo-600 text-white px-4 py-2 rounded shadow-sm hover:bg-indigo-700">Create Playlist</button>
)
}