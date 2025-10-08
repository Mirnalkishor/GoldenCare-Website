<script lang="ts">
    // Define the quick links for easy mapping
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Pricing", href: "#pricing" },
    ];
</script>

<footer class="bg-gray-800 text-white pt-16 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 ">
            
            <div>
                <h3 class="text-xl font-semibold mb-3 text-white">Golden Care</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                    Your trusted companion for every step of the journey.
                </p>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                    {#each quickLinks as link}
                        <li>
                            <a 
                                href={link.href} 
                                class="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
                <address class="space-y-2 text-sm not-italic text-gray-400">
                    <p>Punjab, Chandigarh, Mohali</p>
                    <p class="hover:text-blue-400 transition-colors">
                        <i class="fa-solid fa-envelope mr-2"></i>
                        <a href="mailto:help.goldencare@gmail.com">help.goldencare@gmail.com</a>
                    </p>
                    <p class="hover:text-blue-400 transition-colors">
                        <i class="fa-solid fa-phone mr-2"></i>
                        <a href="tel:+919955699982">+91 99556 99982</a>
                    </p>
                </address>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
                <div class="flex space-x-4 text-xl">
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

        <div class="text-center pt-6">
            <p class="text-sm text-gray-500">
                © 2025 Golden Care. All rights reserved.
            </p>
        </div>
    </div>
</footer>