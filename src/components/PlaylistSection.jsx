import React from 'react'
import PlaylistCard from './PlaylistCard'


export default function PlaylistSection({ title, playlists = [], onUpdate, onDelete, gridCols = 3 }) {
return (
<section>
<h3 className="text-xl font-semibold mb-3">{title}</h3>
<div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-4`}>
{playlists.map(p => (
<PlaylistCard key={p.id} playlist={p} onUpdate={onUpdate} onDelete={onDelete} />
))}
</div>
</section>
)
}