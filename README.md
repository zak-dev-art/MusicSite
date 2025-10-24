# YourSoundSpace

YourSoundSpace is a React + Vite web application that allows users to create, view, and manage playlists.
Each playlist contains tracks that can be played, rated, and organized — giving users full control over their listening experience.

## Features

🎵 View all playlists

➕ Create a new playlist

🗑️ Delete playlists

🎧 View individual playlist details and play tracks

⭐ Rate each track

💾 Data stored locally using a db.json file (via JSON Server)

## Built With

React (Vite) — for a fast, modern frontend

Tailwind CSS — for sleek and responsive styling

JSON Server — for a lightweight local REST API

JavaScript (ES6+) — core functionality

## Project Structure
your-sound-space/
├── public/
├── src/
│   ├── components/
│   │   ├── PlaylistList.jsx
│   │   ├── PlaylistDetails.jsx
│   │   ├── CreatePlaylistModal.jsx
│   │   └── TrackList.jsx 
│   ├── App.jsx
│   └── index.css
├── db.json
├── package.json
└── README.md

### Getting Started
1. Clone the Repository
git clone <your-repo-url>
cd your-sound-space

2. Install Dependencies
npm install

3. Run JSON Server
npx json-server --watch db.json --port 8001

4. Start the React App
npm run dev


Then open the displayed local server (usually http://localhost:5173).


👩🏾‍💻 Contributors

Eugene Otuya

Mohamed Bakhshuwen

Zakayo Kagunda

### Future Improvements

User authentication

Playlist sharing

Track uploads

Improved UI for rating and favorites