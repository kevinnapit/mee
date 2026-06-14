<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<Hero />
<Experience />
<Projects />
<Contact />
