<script>
    let { movie } = $props();
</script>

<div class="col-3 mb-4">
    <img src={movie.poster} alt={movie.title} class="img-fluid">
    <a href="/movie/{movie._id}">{movie.title}</a>
    <p>Jahr: {movie.year}</p>
    <p>Dauer: {movie.length}</p>
</div>