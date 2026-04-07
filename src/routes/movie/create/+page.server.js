import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const movie = {
            title: data.get('title'),
            year: Number(data.get('year')),
            length: data.get('length')
        };
        await db.createMovie(movie);
        redirect(303, '/movie');
    }
};