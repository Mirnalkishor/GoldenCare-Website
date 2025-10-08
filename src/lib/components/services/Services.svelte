<script lang="ts">
    // Define the services data structure (You may have more services now, based on the image)
    const services = [
        { name: "Railway Station Assistance", icon: "fa-bus-simple" },
        { name: "Exercise/Yoga Support", icon: "fa-dumbbell" },
        { name: "Outstation Travel Support", icon: "fa-plane" },
        { name: "Visit to Banks", icon: "fa-building-columns" },
        { name: "Technology Assistance", icon: "fa-laptop" },
        { name: "Movie/Club Visits", icon: "fa-film" }, 
        { name: "Wheelchair Rental", icon: "fa-wheelchair" }, 
        { name: "Hospital/Clinic Visits", icon: "fa-hospital" },
        { name: "Walking Buddy", icon: "fa-walking" },
        { name: "Lifting Assistance", icon: "fa-people-carry-box" },
        { name: "Temple/Beach Visits", icon: "fa-church" },
    ];
</script>

<section id="services" class="py-20 md:py-24 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
        
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Services We Provide
            </h2>
            <p class="text-gray-600 text-lg max-w-xl mx-auto pb-4 border-b-2 border-blue-200 inline-block">
                Comprehensive support tailored to your needs.
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {#each services as service}
                <div 
                    class="p-6 bg-white rounded-lg shadow-md text-center cursor-pointer 
                           transition-all duration-300 
                           hover:shadow-xl hover:-translate-y-1"
                >
                    
                    <div class="text-blue-600 bg-blue-50 w-16 h-16 mx-auto rounded-full grid place-items-center mb-4 border border-blue-200">
                        <i class="fa-solid {service.icon} text-2xl"></i>
                    </div>

                    <p class="font-medium text-gray-700">
                        {service.name}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>