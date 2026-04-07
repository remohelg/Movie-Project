<script>
    import MovieCard from '$lib/MovieCard.svelte';
    
    let { data } = $props();
</script>

<a href="/movie/create" class="btn btn-primary mb-3">Add New Movie</a>

<div class="container mt-4">
    <div class="row">
        {#each data.movies as movie}
            <MovieCard {movie} />
        {/each}
    </div>
</div>