<template>
  <section id="contact" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative bg-gradient-to-br from-primary/20 via-surface to-surface border border-primary/20 rounded-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">
        <!-- Decorative -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left: CTA Content -->
          <div>
            <span class="text-primary text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-text mt-3 mb-4">
              Ready to Start Your Project?
            </h2>
            <p class="text-text-muted leading-relaxed mb-8">
              Whether you need a complete landscape overhaul or regular maintenance, we're here to help.
              Contact us today for a free consultation and estimate.
            </p>

            <!-- Contact Info -->
            <div class="space-y-4">
              <a href="tel:+15551234567" class="flex items-center gap-4 text-text hover:text-primary transition-colors group">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span class="font-medium">(555) 123-4567</span>
              </a>

              <a href="mailto:info@greenscapes.com" class="flex items-center gap-4 text-text hover:text-primary transition-colors group">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span class="font-medium">info@greenscapes.com</span>
              </a>

              <div class="flex items-center gap-4 text-text">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span class="font-medium">Serving the Greater Metro Area</span>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="bg-surface-dark/50 border border-border rounded-xl p-6 sm:p-8">
            <h3 class="text-lg font-semibold text-text mb-6">Request a Free Quote</h3>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-text text-sm font-medium mb-1.5">Name</label>
                  <input id="name" type="text" placeholder="Your name"
                    class="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label for="phone" class="block text-text text-sm font-medium mb-1.5">Phone</label>
                  <input id="phone" type="tel" placeholder="(555) 000-0000"
                    class="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-text text-sm font-medium mb-1.5">Email</label>
                <input id="email" type="email" placeholder="you@example.com"
                  class="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label for="service" class="block text-text text-sm font-medium mb-1.5">Service Interested In</label>
                <select id="service"
                  class="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary transition-colors">
                  <option value="" class="text-text-muted">Select a service</option>
                  <option>Landscape Design</option>
                  <option>Lawn Maintenance</option>
                  <option>Hardscaping</option>
                  <option>Irrigation Systems</option>
                  <option>Tree & Shrub Care</option>
                  <option>Seasonal Cleanup</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-text text-sm font-medium mb-1.5">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us about your project..."
                  class="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              <button type="submit"
                class="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg font-semibold transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  // Form submission logic will be added later
  alert('Thank you! We will be in touch soon.');
};
</script>
