<script lang="ts">
  let { href = "#", children } = $props();
</script>

<a
  {href}
  class="group block -mx-4 p-4 transition-colors duration-300 rounded-2xl hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
>
  {@render children()}
</a>
