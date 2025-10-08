<script lang="ts">
    const pricingPlans = [
        // ... (data remains the same)
        {
            hours: 1,
            title: "1 Hour Service",
            price: "₹1000",
            duration: "1 hour",
            features: [
                "Perfect for quick assistance",
                "Single task focus",
                "Flexible and convenient",
                "Basic support",
            ],
            isPopular: false,
        },
        {
            hours: 2,
            title: "2 Hours Service",
            price: "₹1499",
            duration: "2 hours",
            features: [
                "Ideal for appointments",
                "Save on the hourly rate",
                "Comprehensive support",
                "Most popular choice",
            ],
            isPopular: true,
        },
        {
            hours: 3,
            title: "3 Hours Service",
            price: "₹1999",
            duration: "3 hours",
            features: [
                "Best value for money",
                "For extended assistance",
                "Cover multiple tasks",
                "Maximum convenience",
            ],
            isPopular: false,
        },
        {
            hours: 6,
            title: "6 Hours Service",
            price: "₹2999",
            duration: "6 hours",
            features: [
                "Perfect for longer needs",
                "Maximum savings",
                "Full day support available",
                "Ultimate peace of mind",
            ],
            isPopular: false,
        },
    ];
</script>

<section id="pricing" class="py-20 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Our Pricing Plans
            </h2>
            <p class="text-gray-600 text-lg max-w-xl mx-auto">
                Simple, flexible pricing to fit your needs.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each pricingPlans as plan}
                <div 
                    class="relative p-8 rounded-lg shadow-md border-2 transition-all duration-300 group
                           
                           {!plan.isPopular && 'bg-white border-gray-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1'}
                           
                           {plan.isPopular && 'bg-white border-blue-600 shadow-xl -translate-y-1'}
                           "
                >
                    
                    {#if plan.isPopular}
                        <span class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xs font-semibold uppercase text-white bg-blue-600 rounded-full shadow-lg">
                            POPULAR
                        </span>
                    {/if}

                    <h3 class="text-xl font-semibold {plan.isPopular ? 'text-gray-900' : 'text-gray-500'} mb-2">
                        {plan.title}
                    </h3>
                    <p class="text-4xl font-extrabold {plan.isPopular ? 'text-blue-600' : 'text-gray-900'} mb-4">
                        {plan.price}
                        <span class="text-lg font-normal text-gray-500 ml-1">/{plan.duration}</span>
                    </p>

                    <div class="mb-8 space-y-3">
                        {#each plan.features as feature}
                            <div class="flex items-center text-left">
                                <i class="fa-solid fa-check text-blue-600 mr-3"></i>
                                <span class="text-gray-600 text-sm">{feature}</span>
                            </div>
                        {/each}
                    </div>

                    <button
                        class="w-full px-6 py-2 rounded-md font-semibold transition-colors duration-300 shadow-sm
                                {plan.isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}"
                    >
                        Book Now
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>