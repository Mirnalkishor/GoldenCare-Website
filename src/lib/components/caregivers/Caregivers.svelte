<script lang="ts">
    const caregivers = [
        {
            name: "Aashya",
            rating: 4.9,
            reviews: 25,
            bio: "Aashya finds joy in nurturing her garden and shares that same patience with everyone she meets. She's a wonderful listener, always ready for a heartfelt chat.",
            image: "/assets/images/aashya.png",  
            verified: true,
        },
        {
            name: "Nadeem",
            rating: 4.8,
            reviews: 18,
            bio: "With a calm and gentle spirit, Nadeem enjoys quiet afternoons with a good book. His reassuring presence brings a sense of peace and security.",
            image: "/assets/images/nadeem.png",  
            verified: true,
        },
        {
            name: "Aman",
            rating: 4.9,
            reviews: 32,
            bio: "Aman has a lively personality and loves sharing stories about classic films. His cheerful energy is contagious and sure to brighten anyone's day.",
            image: "/assets/images/aman.png",  
            verified: true,
        },
        {
            name: "Aman",
            rating: 4.9,
            reviews: 32,
            bio: "Aman has a lively personality and loves sharing stories about classic films. His cheerful energy is contagious and sure to brighten anyone's day.",
            image: "/assets/images/aman.png",  
            verified: true,
        },
        {
            name: "Aman",
            rating: 4.9,
            reviews: 32,
            bio: "Aman has a lively personality and loves sharing stories about classic films. His cheerful energy is contagious and sure to brighten anyone's day.",
            image: "/assets/images/aman.png",  
            verified: true,
        },
        {
            name: "Aman",
            rating: 4.9,
            reviews: 32,
            bio: "Aman has a lively personality and loves sharing stories about classic films. His cheerful energy is contagious and sure to brighten anyone's day.",
            image: "/assets/images/aman.png",  
            verified: true,
        },
    ];
</script>

<section id="caregivers" class="py-20 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">

        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Meet Our Caregivers
            </h2>
            <p class="text-gray-600 text-lg max-w-xl mx-auto pb-4 border-b-2 border-blue-200 inline-block">
                Our compassionate and verified professionals are here to help.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each caregivers as caregiver}
                <div class="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 
                           hover:shadow-xl hover:-translate-y-1">
                    
                    <div class="mx-auto w-32 h-32 mb-4">
                        <img 
                            src={caregiver.image} 
                            alt={caregiver.name} 
                            class="w-full h-full object-cover rounded-full mx-auto"
                        />
                    </div>

                    <h3 class="text-2xl font-semibold text-gray-800 mb-1">
                        {caregiver.name}
                    </h3>
                    <p class="text-sm text-gray-600 mb-4">
                        <span class="font-bold text-yellow-500">
                            ★ {caregiver.rating}
                        </span> 
                        ({caregiver.reviews} reviews)
                    </p>

                    <p class="text-sm text-gray-500 mb-6 min-h-[72px]">
                        {caregiver.bio}
                    </p>

                    {#if caregiver.verified}
                        <div class="inline-flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-medium mb-6">
                            <i class="fa-solid fa-shield-halved mr-1"></i>
                            Police Verified
                        </div>
                    {/if}

                    <button
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-300 shadow-md"
                    >
                        Book Now
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>