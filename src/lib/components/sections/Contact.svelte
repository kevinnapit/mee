<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section id="contact" class="space-y-12">
  <h2 class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
    Connect
  </h2>
  
  <div class="space-y-6">
    <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
      I'm always open to new opportunities, collaborations, or just a friendly chat about design and development.
    </p>
    
    <div class="flex flex-col gap-4">
      <a 
        href="mailto:kevinnapitupuluu@gmail.com" 
        class="text-zinc-900 dark:text-zinc-100 font-medium hover:underline decoration-zinc-500 underline-offset-4 decoration-1"
      >
        kevinnapitupuluu@gmail.com
      </a>
      
      <div class="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
        <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Twitter</a>
        <a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a>
      </div>
    </div>
  </div>
</section>
