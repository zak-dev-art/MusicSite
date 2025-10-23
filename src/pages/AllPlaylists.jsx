import React from 'react'
import PlaylistSection from '../components/PlaylistSection'


export default function AllPlaylists({ playlists = [], onUpdate, onDelete }) {
return (
<div className="space-y-6">
<h2 className="text-2xl font-semibold">All Playlists</h2>
<PlaylistSection title="All" playlists={playlists} onUpdate={onUpdate} onDelete={onDelete} gridCols={3} />
</div>
)
}