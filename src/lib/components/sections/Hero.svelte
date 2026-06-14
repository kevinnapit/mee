<script lang="ts">
  import { siteConfig } from '$lib/config/site';
  let imageError = $state(false);
</script>

<section class="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
  <div class="space-y-6 flex-1 text-center md:text-left">
    <h1 class="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
      {siteConfig.title}
    </h1>
    <p class="text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mx-auto md:mx-0">
      {siteConfig.description}
    </p>
    <div class="flex justify-center md:justify-start gap-4 pt-2">
      <a 
        href="#contact" 
        class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-medium transition-transform active:scale-95"
      >
        Get in touch
      </a>
    </div>
  </div>

  <div class="relative group shrink-0">
    <div class="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
    <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      {#if !imageError}
        <img 
          src="/hero.jpeg" 
          alt={siteConfig.name}
          class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          onerror={() => imageError = true}
        />
      {:else}
        <div class="flex w-full h-full items-center justify-center text-zinc-400 dark:text-zinc-600 italic text-[10px] text-center px-4">
          Add photo to static/hero.jpeg
        </div>
      {/if}
    </div>
  </div>
</section>

