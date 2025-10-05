<script lang="ts">
  import { writable } from "svelte/store";
  import Header from "../components/layout/Header.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { onMount } from "svelte";

  import "../app.css";

  const scrollY = writable(0);
  const innerWidth = writable(0);
  const innerHeight = writable(0);

  let showScrollTop = false;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  onMount(() => {
    const unsubscribe = scrollY.subscribe((y) => {
      showScrollTop = y > 300;
    });
    return unsubscribe;
  });
</script>

<div class="flex flex-col min-h-screen relative bg-transparent text-white">
  <Header />
  <main class="flex-1 container max-w-[1400px] mx-auto w-full text-sm sm:text-base px-4 sm:px-8 pt-20">
    <slot />
  </main>
  <Footer />

  {#if showScrollTop}
    <button
      on:click={scrollToTop}
      class="fixed bottom-6 right-6 z-[50] bg-violet-500 hover:bg-violet-600 text-white w-10 h-10 rounded-full shadow-lg grid place-items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-300"
      aria-label="Scroll to top"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  {/if}
</div>

<svelte:window bind:scrollY={$scrollY} bind:innerHeight={$innerHeight} bind:innerWidth={$innerWidth} />
