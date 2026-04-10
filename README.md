# 🎬 Movie Library  

A responsive movie discovery web application that allows users to browse trending films, search for titles, view details, and build a personal watchlist.  
The app is designed for movie lovers who want a clean, fast, and modern interface for exploring films using real‑time data from The Movie Database (TMDB) API.

Live Demo: (https://stem-girlie.github.io/Movie-Library/)  
Frontend Repo: [https://github.com/STEM-Girlie/frontend-repo](https://github.com/STEM-Girlie/frontend-repo)  
 

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Database Design](#database-design)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Overview

### Motivation
I built this project to strengthen my frontend development skills, learn how to integrate external APIs, and create a polished portfolio piece that demonstrates real‑world UI/UX patterns such as infinite scroll, search, routing, and state management.

### Objective
The goal of this application is to provide a simple, elegant interface for discovering movies. Users can browse popular films, search for specific titles, and save favourites to a watchlist — all powered by live TMDB data.

### Learning Outcomes
- Integrated a third‑party API (TMDB)
- Implemented infinite scroll with Intersection Observer
- Built reusable React components
- Managed global state with Context API
- Designed responsive UI layouts
- Deployed a production‑ready frontend

---

## Features

- Browse popular movies (live TMDB data)
- Infinite scroll for seamless browsing
- Search for movies by title
- Add/remove movies from Watchlist
- Fully responsive design
- Clean UI with reusable components
- Client‑side routing (React Router)

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- HTML5
- CSS3
- TMDB API
- Fetch API / Axios
  
### Tools
- Git & GitHub  
- VS Code  
- Postman  
- Netlify / Vercel (for deployment)

---

## Architecture

1.  
Client (React Frontend)  
↓  
TMDB API (External Data Source)  

Folder Structure Example:

```
client/
  ├── src/
  │    ├── components/
  │    ├── pages/
  │    ├── contexts/
  │    ├── services/
  │    ├── css/
  │    └── App.jsx
  └── index.html
```

---

## Database Design  
*(Skip if no backend — or keep this placeholder)*

```
users
 ├── id
 ├── email
 ├── password
 └── created_at

watchlist
 ├── id
 ├── user_id
 ├── movie_id
 └── added_at
```

---

## API Endpoints  
*(For TMDB integration)*

### Popular Movies  
`GET https://api.themoviedb.org/3/movie/popular?page=1`

### Search Movies  
`GET https://api.themoviedb.org/3/search/movie?query=QUERY&page=1`

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### Install Dependencies

Frontend:

```bash
cd client
npm install
```

### Run Development Servers

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in the root of your frontend:

```
VITE_TMDB_API_KEY=your_api_key_here
```

---

## Usage

1. Open the app  
2. Browse popular movies  
3. Scroll to load more results  
4. Search for specific titles  
5. Add movies to your Watchlist  

---

## Screenshots

```
assets/
 ├── home.png
 ├── movie-card.png
 └── watchlist.png
```

Add inside README:

```markdown
![Home Page](assets/home.png)
![Watchlist](assets/watchlist.png)
```

---

## Deployment

- Frontend deployed on Netlify / Vercel  
- Environment variables configured for TMDB API  
- Build command: `npm run build`  
- Output directory: `dist/`

---

## Future Improvements

- User authentication (login/register)
- Backend for persistent watchlists
- Movie detail pages
- Trailer playback
- Genre filtering
- Dark mode
- Unit & integration tests

---

## Credits

Developer: **Nasreen Baker**  
GitHub: [https://github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)  

TMDB API: `https://www.themoviedb.org/documentation/api` [(themoviedb.org in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fwww.themoviedb.org%2Fdocumentation%2Fapi")  

---

## License

This project is licensed under the MIT License.
