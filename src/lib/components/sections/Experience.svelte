<script lang="ts">
  import { experience } from '$lib/data/experience';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<section id="experience" class="space-y-12">
  <h2 class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
    Experience
  </h2>
  
  <div class="space-y-4">
    {#each experience as item}
      <Card>
        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
          <div class="space-y-1">
            <h3 class="text-zinc-900 dark:text-zinc-100 font-medium">{item.company}</h3>
            <p class="text-zinc-500 dark:text-zinc-400 text-sm">{item.role}</p>
          </div>
          <span class="text-zinc-400 dark:text-zinc-600 text-sm font-mono">{item.period}</span>
        </div>
        <p class="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {item.description}
        </p>
      </Card>
    {/each}
  </div>
</section>
