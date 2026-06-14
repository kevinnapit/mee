<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Card from '$lib/components/ui/Card.svelte';
  import Tag from '$lib/components/ui/Tag.svelte';
</script>

<section id="projects" class="space-y-12">
  <h2 class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
    Selected Projects
  </h2>
  
  <div class="space-y-4">
    {#each projects as project}
      <Card href={project.href}>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h3 class="text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              {project.title}
              <span class="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </h3>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            {#each project.tags as tag}
              <Tag text={tag} />
            {/each}
          </div>
        </div>
      </Card>
    {/each}
  </div>
</section>
