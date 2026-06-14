<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<footer class="max-w-3xl mx-auto px-6 pb-24 text-sm text-zinc-500 dark:text-zinc-600">
  <div class="border-t border-zinc-100 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
    <p>© {new Date().getFullYear()} {siteConfig.name}</p>
    <div class="flex gap-6">
      <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" class="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">GitHub</a>
      <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" class="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Twitter</a>
    </div>
  </div>
</footer>
