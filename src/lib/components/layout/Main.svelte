<script lang="ts">
import About from "../about/About.svelte";
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 sm:py-14 items-center"
  >
    <div
      class="flex flex-col justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
        <span class="font-poppins text-violet-400">
          Your Golden Years, Our Golden Care
        </span>
      </h2>

      <p class="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
        Compassionate, professional, and personalized home care services —
        because you deserve comfort and dignity in every moment.
      </p>

      <div class="flex justify-center lg:justify-start mt-4">
        <a
          href="#services"
          class="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </div>

    <!-- <div class="flex justify-center lg:justify-end">
      <img
        src="/assets/images/elderly-care.svg"
        alt="Elderly Care Illustration"
        class="max-w-full h-auto"
      />
    </div> -->
  </section>
  <About />
</main>
