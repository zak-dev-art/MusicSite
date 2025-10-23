import React from 'react'
import { Link } from 'react-router-dom'
import CreatePlaylistButton from './CreatePlaylistButton'


export default function Navbar({ onCreate }) {
return (
<nav className="bg-white shadow">
<div className="container mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-4">
<Link to="/" className="text-xl font-semibold">🎵 Music Player</Link>
<Link to="/all" className="text-sm text-gray-600 hover:underline">All Playlists</Link>
</div>
<CreatePlaylistButton onClick={onCreate} />
</div>
</nav>
)
}