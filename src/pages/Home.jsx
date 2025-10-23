import React from 'react'
import PlaylistSection from '../components/PlaylistSection'
import StatCard from '../components/StatCard'


export default function Home({ playlists = [], onUpdate, onDelete, refresh }) {
const totalPlaylists = playlists.length
const totalReviews = playlists.reduce((s, p) => s + (p.reviews?.length || 0), 0)
const avgRating = playlists.length ? (playlists.reduce((s, p) => s + (p.rating || 0), 0) / playlists.length) : 0


const topRated = [...playlists].sort((a,b) => (b.rating || 0) - (a.rating || 0)).slice(0,6)
const recent = [...playlists].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,6)


return (
<div className="space-y-6">
<div className="grid grid-cols-3 gap-4">
<StatCard title="Total Playlists" value={totalPlaylists} />
<StatCard title="Total Reviews" value={totalReviews} />
<StatCard title="Avg Rating" value={avgRating.toFixed(1)} />
</div>


<PlaylistSection title="Top Rated" playlists={topRated} onUpdate={onUpdate} onDelete={onDelete} />
<PlaylistSection title="Recently Added" playlists={recent} onUpdate={onUpdate} onDelete={onDelete} />
</div>
)
}