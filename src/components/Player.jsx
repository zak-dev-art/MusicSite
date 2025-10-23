import React, { useState } from 'react'


export default function CreatePlaylistModal({ onClose, onCreate }) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [image, setImage] = useState('')
const [songUrl, setSongUrl] = useState('')


function submit(e) {
e.preventDefault()
const payload = { title, description, image: image || https://picsum.photos/seed/${Date.now()}/400/200, songs: songUrl ? [{ id: s${Date.now()}, title: 'Track 1', url: songUrl }] : [], rating: 0 }
onCreate(payload)
}


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center">
<form onSubmit={submit} className="bg-white rounded p-6 w-full max-w-md">
<h3 className="text-lg font-semibold mb-4">Create Playlist</h3>
<input className="w-full mb-2 p-2 border rounded" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
<textarea className="w-full mb-2 p-2 border rounded" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
<input className="w-full mb-2 p-2 border rounded" placeholder="Cover image URL (optional)" value={image} onChange={e => setImage(e.target.value)} />
<input className="w-full mb-4 p-2 border rounded" placeholder="Song URL (mp3) (optional)" value={songUrl} onChange={e => setSongUrl(e.target.value)} />
<div className="flex gap-2 justify-end">
<button type="button" onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
<button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Create</button>
</div>
</form>
</div>
)
}