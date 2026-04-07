<script>
    import favicon from '$lib/assets/favicon.svg';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</svelte:head>

<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="d-flex gap-3 align-items-center">
            <a class="navbar-brand" href="/">MovieApp</a>
            <ul class="navbar-nav flex-row gap-3">
                <li class="nav-item">
                    <a class="nav-link" href="/movie">Movies</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{@render children()}

<style>
    :global(body) {
        background-color: #121212;
        color: white;
    }
</style>