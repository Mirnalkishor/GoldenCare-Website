<script lang="ts">
import About from "../about/About.svelte";
import Services from "../services/Services.svelte";
import Caregivers from "../caregivers/Caregivers.svelte";
import Pricing from "../pricing/Pricing.svelte";
import ValueProposition from "../ValueProposition/ValueProposition.svelte";
import BookingForm from "../bookingForm/BookingForm.svelte";
</script>

<section
    id="introPage"
    class="flex flex-col items-center justify-center text-center py-20 md:py-32 text-white bg-gray-100" 
    style="height: calc(100vh - 80px);" 
    >
    <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-medium text-blue-600 mb-4">
            Your Golden Years, Our Golden Care
        </h2>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
            Your Trusted Companion for Every Step of the Journey
        </h1>

        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Providing warm, reliable, and professional support for seniors in Punjab, Chandigarh, and Mohali.
        </p>

        <div class="mt-4">
            <a
                href="#services"
                class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 shadow-md"
            >
                Book a Service
            </a>
        </div>
    </div>
</section>

<About />
<Services/>
<Caregivers/>
<ValueProposition/>
<Pricing/>
<BookingForm/>