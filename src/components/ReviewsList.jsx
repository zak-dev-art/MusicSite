import React from 'react'


export default function ReviewsList({ reviews = [] }) {
if (reviews.length === 0) return <div className="text-sm text-gray-500">No reviews yet</div>
return (
<ul className="space-y-2">
{reviews.map(r => (
<li key={r.id} className="p-2 border rounded">
<div className="flex justify-between">
<strong>{r.author}</strong>
<span className="text-sm text-gray-500">{r.rating} ⭐</span>
</div>
<div className="text-sm">{r.comment}</div>
</li>
))}
</ul>
)
}