<script lang="ts">
    // --- 1. Navigation Links ---
    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Pricing', href: '/#pricing' },
    ];

    // --- 2. Services Dropdown Data ---
    const services = [
        { name: "Hospital/Clinic Visits", href: "/services#hospital" },
        { name: "Walking Buddy", href: "/services#walking" },
        { name: "Lifting Assistance", href: "/services#lifting" },
        { name: "Temple/Beach Visits", href: "/services#temple" },
        { name: "Railway Station Assistance", href: "/services#railway" },
        { name: "Exercise/Yoga Support", href: "/services#yoga" },
        { name: "Outstation Travel Support", href: "/services#travel" },
        { name: "Visit to Banks", href: "/services#banks" },
    ];

    // --- 3. State for Dropdowns ---
    let isServicesOpen = false;

    // Function to close the dropdown when clicking outside
    function closeDropdown(event: MouseEvent) {
        if (!(event.target as HTMLElement).closest('#services-dropdown-toggle') && 
            !(event.target as HTMLElement).closest('#services-dropdown-menu')) {
            isServicesOpen = false;
        }
    }
</script>

<svelte:window on:click={closeDropdown} />

<header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        
        <div class="flex items-center">
            <a href="/" class="flex items-center space-x-2 text-xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors">
                <i class="fa-solid fa-hand-holding-heart text-2xl text-blue-600"></i>
                <span>Golden Care</span>
            </a>
        </div>

        <nav class="hidden lg:flex items-center space-x-6">

            {#each navLinks as link}
                <a 
                    href={link.href} 
                    class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                    {link.name}
                </a>
            {/each}

            <div class="relative">
                <button 
                    id="services-dropdown-toggle"
                    on:click={() => isServicesOpen = !isServicesOpen}
                    class="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                    Services
                    <i class="fa-solid fa-chevron-down ml-1 text-xs transition-transform duration-200" 
                       class:rotate-180={isServicesOpen}></i>
                </button>

                {#if isServicesOpen}
                    <div id="services-dropdown-menu" 
                         class="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                        {#each services as service}
                            <a 
                                href={service.href} 
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                                on:click={() => isServicesOpen = false}
                            >
                                {service.name}
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
            
            <a 
                href="/#booking" 
                class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
                Book now
            </a>
            
            <a 
                href="/signup" 
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300 shadow-md"
            >
                Sign Up
            </a>
        </nav>

        <button class="lg:hidden text-gray-700 text-2xl" aria-label="Open navigation menu">
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header>