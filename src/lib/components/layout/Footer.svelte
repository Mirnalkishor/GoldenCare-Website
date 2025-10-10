<script lang="ts">
    // --- Column Data ---

    // 1. Company Column
    const companyLinks = [
        { name: "About Us", href: "/#about" },
        { name: "News", href: "#" },
        { name: "Careers", href: "#" },
        { name: "FAQs", href: "#" },
    ];

    // 3. Location Column (Placeholder cities)
    const locationLinks = [
        { name: "Punjab", href: "#" },
        { name: "Chandigarh", href: "#" },
        { name: "Mohali", href: "#" },
        { name: "New Delhi", href: "#" },
        { name: "Gurgaon", href: "#" },
        { name: "Noida", href: "#" },
    ];

    // 5. Helpful Links Column
    const helpfulLinks = [
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Payment Policy", href: "/payment-policy" },
    ];
    
    // --- Contact Data ---
    // FIX: Updated phone number to the one used for Golden Care policies
    const contactPhone = "+91 99556 99982";
    const contactEmail = "support@goldencare.co.in"; 
</script>

<footer class="bg-gray-900 text-white pt-16 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 border-b border-gray-700 pb-12">
            
            <div class="col-span-2 lg:col-span-2"> 
                <div class="flex flex-col"> 
                    
                    <div class="flex items-center space-x-1 mb-2">
                        <i class="fa-solid fa-hand-holding-heart text-2xl text-blue-400"></i>
                        <h3 class="text-2xl font-extrabold text-white">Golden Care</h3>
                    </div>
                    
                    <p class="text-sm text-gray-400 leading-relaxed mt-1 mb-4">
                        World Class Cares at Home. Now be stress-free, GoldenCare is here to take care of your loved ones.
                    </p>

                    <div class="space-y-2">
                        <h4 class="text-lg font-semibold text-white">Contact Us</h4>
                        <p class="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                            {contactPhone}
                        </p>
                        <p class="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                            {contactEmail}
                        </p>
                    </div>

                    <div class="flex space-x-3 mt-4 text-xl">
                        <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-blue-400 transition-colors">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-blue-400 transition-colors">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-blue-400 transition-colors">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-span-1">
                <h4 class="text-lg font-semibold mb-4 text-white">Company</h4>
                <ul class="space-y-2">
                    {#each companyLinks as link}
                        <li>
                            <a href={link.href} class="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="col-span-1">
                <h4 class="text-lg font-semibold mb-4 text-white">Location</h4>
                <ul class="space-y-2">
                    {#each locationLinks as location}
                        <li>
                            <p class="text-sm text-gray-400">
                                {location.name}
                            </p>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="col-span-1">
                <h4 class="text-lg font-semibold mb-4 text-white">Helpful Links</h4>
                <ul class="space-y-2">
                    {#each helpfulLinks as link}
                        <li>
                            <a href={link.href} class="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

        </div>

        <div class="flex justify-between items-center pt-4 text-sm text-gray-500">
            <a href="#" class="hover:text-blue-400 transition-colors">Terms and Conditions</a>
            
            <p>
                © 2025 Golden Care Pvt Ltd. All rights reserved.
            </p>
        </div>
    </div>
</footer>