<template>
  <section id="contact" class="relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0" :style="{ background: `linear-gradient(to bottom, ${bgColorFrom}, ${bgColorTo})` }"></div>

    <div class="relative z-10 py-20">
      <!-- Header -->
      <div class="text-center mb-12 px-4">
        <span class="inline-block text-white text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4" :style="{ backgroundColor: bgColorFrom }">Get In Touch</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
          Request a Free Estimate
        </h2>
        <p class="text-white/60 text-lg max-w-2xl mx-auto">
          Whether you need a complete landscape overhaul or regular maintenance, we're here to help.
        </p>
      </div>

      <!-- Jobber embed -->
      <div v-if="jobberUrl" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 min-h-[1750px]">
          <iframe
            :src="jobberUrl"
            class="w-full min-h-[1750px] bg-white"
            frameborder="0"
            title="Request a Free Estimate"
          ></iframe>
        </div>
      </div>

      <!-- Fallback: contact info + form -->
      <div v-else class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p class="text-white/70 leading-relaxed mb-8">
            Call or text us today to schedule your free estimate!
          </p>

          <!-- Contact Info -->
          <div class="space-y-5">
            <a href="tel:+18564725751" class="flex items-center gap-4 text-white hover:text-white/80 transition-colors group">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center transition-colors" :style="{ backgroundColor: bgColorFrom }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span class="text-lg font-medium">856-472-5751</span>
            </a>

            <a href="mailto:greenscapessj@gmail.com" class="flex items-center gap-4 text-white hover:text-white/80 transition-colors group">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center transition-colors" :style="{ backgroundColor: bgColorFrom }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span class="text-lg font-medium">greenscapessj@gmail.com</span>
            </a>

            <div class="flex items-center gap-4 text-white">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" :style="{ backgroundColor: bgColorFrom }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span class="text-lg font-medium">Sicklerville, NJ</span>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
          <h3 class="text-lg font-semibold text-white mb-6">Inquire Here</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-white/70 text-sm font-medium mb-1.5">Name</label>
                <input id="name" type="text" placeholder="Your name"
                  class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
              </div>
              <div>
                <label for="phone" class="block text-white/70 text-sm font-medium mb-1.5">Phone</label>
                <input id="phone" type="tel" placeholder="(555) 000-0000"
                  class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
              </div>
            </div>
            <div>
              <label for="email" class="block text-white/70 text-sm font-medium mb-1.5">Email</label>
              <input id="email" type="email" placeholder="you@example.com"
                class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors" />
            </div>
            <div>
              <label for="service" class="block text-white/70 text-sm font-medium mb-1.5">Service Interested In</label>
              <select id="service"
                class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/50 transition-colors">
                <option value="" class="text-gray-900">Select a service</option>
                <option class="text-gray-900">Landscape Design</option>
                <option class="text-gray-900">Lawn Maintenance</option>
                <option class="text-gray-900">Hardscaping</option>
                <option class="text-gray-900">Irrigation Systems</option>
                <option class="text-gray-900">Tree & Shrub Care</option>
                <option class="text-gray-900">Seasonal Cleanup</option>
                <option class="text-gray-900">Other</option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-white/70 text-sm font-medium mb-1.5">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us about your project..."
                class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none"></textarea>
            </div>
            <button type="submit"
              class="w-full text-white py-3 rounded-lg font-semibold transition-colors"
              :style="{ backgroundColor: bgColorFrom }"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  jobberUrl?: string;
  bgColorFrom?: string;
  bgColorTo?: string;
}

withDefaults(defineProps<Props>(), {
  jobberUrl: '',
  bgColorFrom: '#4a6741',
  bgColorTo: '#22311d',
});

const handleSubmit = () => {
  alert('Thank you! We will be in touch soon.');
};
</script>
