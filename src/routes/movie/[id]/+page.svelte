<script>
    let { data } = $props();
</script>

<div class="container mt-4">
    <a href="/movie">Back</a>
    <h1>{data.movie.title}</h1>
    <div class="row">
        <div class="col-4">
            <img
                src={data.movie.poster}
                alt={data.movie.title}
                class="img-fluid"
            />
        </div>
        <div class="col-8">
            <p>Jahr: {data.movie.year}</p>
            <p>Dauer: {data.movie.length}</p>
            <p>Cast:</p>
            <ul>
                {#each data.movie.actors as actor}
                    <li>{actor}</li>
                {/each}
            </ul>
            <form method="POST" action="?/delete">
                <button type="submit" class="btn btn-danger"
                    >Delete Movie</button
                >
            </form>
        </div>
    </div>
</div>
