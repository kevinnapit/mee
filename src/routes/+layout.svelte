<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  let { children } = $props();
</script>

<div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
  <Header />
  <main class="max-w-3xl mx-auto px-6 py-24 space-y-32">
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
</style>
