<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<header class="max-w-3xl mx-auto px-6 pt-12 md:pt-24 flex justify-between items-center">
  <a href="/" class="font-medium tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 transition-colors duration-300">
    {siteConfig.name}
  </a>
  <nav class="flex gap-4 text-sm font-normal text-zinc-500 dark:text-zinc-400">
    <a href="#experience" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300">Experience</a>
    <a href="#projects" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300">Projects</a>
    <a href="#contact" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300">Contact</a>
  </nav>
</header>
