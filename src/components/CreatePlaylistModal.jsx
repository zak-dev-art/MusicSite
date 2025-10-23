import React, { useState } from "react";

export default function CreatePlaylistModal({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onCreate(formData);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create New Playlist</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Playlist name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md p-2 h-24"
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Cover image URL (optional)"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
