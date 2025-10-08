<script lang="ts">
// Logical Fix: Services component is rendered in main.svelte, NOT here.
</script>

<section
    id="about"
    class="py-20 md:py-32 bg-white" 
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
            About Golden Care
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div class="lg:col-span-2">
                <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                    Golden Care provides personalized support services for seniors,
                    ensuring comfort, safety, and happiness in daily life. We are
                    dedicated to offering compassionate and reliable companionship
                    to your loved ones, treating them with the respect and dignity
                    they deserve.
                </p>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Our mission is to make life easier and more enjoyable for the
                    elderly in **Punjab, Chandigarh, and Mohali**. We help with
                    everything from daily chores to technology assistance, so they
                    can live their lives to the fullest.
                </p>
            </div>

            <div class="lg:col-span-1">
                <div class="p-8 bg-blue-100 rounded-lg shadow-2xl text-center h-full flex flex-col justify-center"> 
                    
                    <div class="text-blue-600 mb-5">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-10 w-10 mx-auto" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                                clip-rule="evenodd" 
                            />
                        </svg>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                        Compassion in Action
                    </h3>
                    <p class="text-gray-600 text-sm">
                        Every service we provide is rooted in empathy and a genuine desire to improve the lives of our clients.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>