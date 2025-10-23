import React, { useState } from 'react'
import Player from './Player'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'


export default function PlaylistCard({ playlist, onUpdate, onDelete }) {
const [showReviews, setShowReviews] = useState(false)


function addReview(review) {
const updated = { reviews: [...(playlist.reviews || []), { ...review, id: Date.now() }] }
onUpdate(playlist.id, { reviews: updated.reviews })
}


return (
<article className="bg-white shadow rounded overflow-hidden">
<img src={playlist.image} alt={playlist.title} className="w-full h-36 object-cover" />
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<h4 className="font-semibold">{playlist.title}</h4>
<p className="text-sm text-gray-500">{playlist.description}</p>
</div>
<div className="text-right">
<div className="text-lg font-bold">{(playlist.rating || 0).toFixed(1)}</div>
<div className="text-xs text-gray-500">{(playlist.reviews || []).length} reviews</div>
</div>
</div>


<div className="mt-3">
<Player songs={playlist.songs || []} />
</div>


<div className="mt-3 flex gap-2">
<button onClick={() => setShowReviews(s => !s)} className="px-3 py-1 border rounded">Reviews</button>
<button onClick={() => onDelete(playlist.id)} className="px-3 py-1 border rounded text-red-600">Delete</button>
</div>


{showReviews && (
<div className="mt-3">
<ReviewsList reviews={playlist.reviews || []} />
<ReviewForm onSubmit={addReview} />
</div>
)}
</div>
</article>
)
}