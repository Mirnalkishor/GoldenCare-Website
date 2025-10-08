<script lang="ts">
    // Placeholder data for dropdowns (Service Required and Preferred Caregiver)
    const services = [
        "Hospital/Clinic Visits", 
        "Walking Buddy", 
        "Lifting Assistance", 
        "Technology Assistance"
    ];
    const caregivers = [
        "Aashya", 
        "Nadeem", 
        "Aman"
    ];

    // Simple reactive state for form data (optional, but good practice)
    let form = {
        fullName: "",
        phone: "",
        address: "",
        service: "",
        caregiver: "",
        date: ""
    };

    function handleSubmit() {
        console.log("Form Submitted:", form);
        // Add form submission logic here (e.g., API call)
    }
</script>

<section id="booking" class="py-20 md:py-24 bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">

        <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Book a Service
            </h2>
            <p class="text-gray-600 text-lg max-w-xl mx-auto">
                Fill out the form below to book a service.
            </p>
        </div>

        <div class="max-w-2xl mx-auto p-6 md:p-10 bg-white rounded-lg shadow-xl border border-gray-100">
            
            <h3 class="text-xl font-semibold text-gray-800 mb-6">Contact Us</h3>
            <p class="text-gray-500 mb-8">Let us know how we can help you.</p>

            <form on:submit|preventDefault={handleSubmit} class="space-y-6">

                <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        bind:value={form.fullName}
                        placeholder="Your name"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                    />
                </div>

                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        bind:value={form.phone}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                    />
                </div>

                <div>
                    <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                    <textarea 
                        id="address" 
                        rows="3"
                        bind:value={form.address}
                        placeholder="Please enter your full address"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        required
                    ></textarea>
                </div>

                <div>
                    <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                    <div class="relative">
                        <select
                            id="service"
                            bind:value={form.service}
                            class="w-full appearance-none px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                            required
                        >
                            <option value="" disabled selected>Select a service</option>
                            {#each services as service}
                                <option value={service}>{service}</option>
                            {/each}
                        </select>
                        <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                </div>

                <div>
                    <label for="caregiver" class="block text-sm font-medium text-gray-700 mb-1">Preferred Caregiver (Optional)</label>
                    <div class="relative">
                        <select
                            id="caregiver"
                            bind:value={form.caregiver}
                            class="w-full appearance-none px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                        >
                            <option value="">Select a caregiver</option>
                            {#each caregivers as caregiver}
                                <option value={caregiver}>{caregiver}</option>
                            {/each}
                        </select>
                        <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                </div>

                <div>
                    <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <div class="relative">
                        <input 
                            type="date" 
                            id="date" 
                            bind:value={form.date}
                            placeholder="Pick a date"
                            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            required
                        />
                         <i class="fa-solid fa-calendar-days absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                </div>

                <button
                    type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 shadow-md mt-8"
                >
                    Submit Request
                </button>
            </form>
        </div>
    </div>
</section>