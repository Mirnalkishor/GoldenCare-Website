<script lang="ts">
  export let error;
  export let status;
</script>

<section class="min-h-[60vh] flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-3xl font-bold">Something went wrong</h1>
    <p class="mt-4 text-slate-600">{status} {error?.message ?? 'Unexpected error'}</p>
    <a href="/" class="mt-6 inline-block px-4 py-2 rounded bg-sky-600 text-white">Go back home</a>
  </div>
</section>
