import db from '$lib/db.server.js';

export async function load() {
    const movies = await db.getMovies();
    return { movies };
}