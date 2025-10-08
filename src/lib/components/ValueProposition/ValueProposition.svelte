<script lang="ts">
    // Define the data structure for the value propositions
    const values = [
        {
            title: "Trust & Safety First",
            icon: "fa-shield-alt", // Trust icon
            description: "Your safety is our promise. Every member of our team undergoes a thorough police verification process, giving you complete peace of mind.",
        },
        {
            title: "Trained & Compassionate Team",
            icon: "fa-users", // Team icon
            description: "Our caregivers are not just skilled professionals; they are kind-hearted individuals dedicated to providing respectful and empathetic support.",
        },
        {
            title: "Dedicated & Reliable Service",
            icon: "fa-heart", // Heart/Reliability icon
            description: "We pride ourselves on reliability. Our dedicated staff and NGO volunteers are committed to being there for you when you need it most.",
        },
        {
            title: "Affordable & Transparent",
            icon: "fa-receipt", // Receipt/Transparency icon
            description: "Receive the highest quality care without the worry of hidden costs. Our pricing is straightforward, honest, and designed to be accessible.",
        },
    ];
</script>

<section id="why-choose-us" class="py-20 md:py-24 bg-gray-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">

        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Why Choose Golden Care?
            </h2>
            <p class="text-gray-600 text-lg max-w-xl mx-auto">
                Your peace of mind is our top priority.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each values as item}
                <div class="p-6 bg-white rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1">
                    
                    <div class="text-blue-600 bg-blue-50 w-16 h-16 mx-auto rounded-full grid place-items-center mb-4 border border-blue-200">
                        <i class="fa-solid {item.icon} text-2xl"></i>
                    </div>

                    <h3 class="text-lg font-semibold text-gray-800 mb-3">
                        {item.title}
                    </h3>

                    <p class="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>