import React, { useState } from 'react'


export default function ReviewForm({ onSubmit }) {
const [author, setAuthor] = useState('')
const [rating, setRating] = useState(5)
const [comment, setComment] = useState('')


function submit(e) {
e.preventDefault()
onSubmit({ author: author || 'Anonymous', rating: Number(rating), comment, createdAt: new Date().toISOString() })
setAuthor('')
setRating(5)
setComment('')
}


return (
<form onSubmit={submit} className="mt-3 space-y-2">
<input className="w-full p-2 border rounded" placeholder="Your name" value={author} onChange={e => setAuthor(e.target.value)} />
<select className="w-full p-2 border rounded" value={rating} onChange={e => setRating(e.target.value)}>
{[5,4,3,2,1].map(n => <option key={n} value={n}>{n} stars</option>)}
</select>
<textarea className="w-full p-2 border rounded" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
<button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Add Review</button>
</form>
)
}