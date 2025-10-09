<script lang="ts">
  import { writable } from "svelte/store";
  import Header from "../lib/components/layout/Header.svelte";
  import Footer from "../lib/components/layout/Footer.svelte";
  import { onMount } from "svelte";

  import "../app.css";

  const scrollY = writable(0);
  const innerWidth = writable(0);
  const innerHeight = writable(0);

  let showScrollTop = false;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  onMount(() => {
    const unsubscribe = scrollY.subscribe((y) => {
      showScrollTop = y > 0;
    });
    return unsubscribe;
  });
</script>

<div class="flex flex-col min-h-screen relative bg-gray-100 text-white">
  <Header />
  <main class="flex-1 w-full pt-20"> 
    <slot />
  </main>
  <Footer />
  
  {#if showScrollTop}
    <button
      class="fixed bottom-6 right-6 bg-blue-500 text-black px-4 py-2 rounded-3xl shadow-lg hover:bg-blue-600 transition"
      on:click={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑ Top
    </button>
  {/if}
</div>

<svelte:window bind:scrollY={$scrollY} bind:innerHeight={$innerHeight} bind:innerWidth={$innerWidth} />