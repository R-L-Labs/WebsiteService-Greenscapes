<template>
  <section id="about" class="relative py-24 overflow-hidden">
    <!-- Dark forest green background -->
    <div class="absolute inset-0 bg-[#22311d]"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <img
              :src="image"
              alt="Greenscapes South Jersey project"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <!-- Accent card -->
          <div class="absolute -bottom-6 -right-6 bg-[#4a6741] text-white p-6 rounded-xl shadow-lg hidden sm:block">
            <div class="text-3xl font-bold">{{ accentStat.value }}</div>
            <div class="text-sm opacity-90">{{ accentStat.label }}</div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <span class="inline-block text-white text-sm font-semibold uppercase tracking-wider bg-[#4a6741] px-3 py-1 rounded-full mb-4">About Us</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
            {{ title }}
          </h2>
          <div class="space-y-4 text-emerald-100/80 text-lg leading-relaxed">
            <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
          </div>

          <!-- Feature list -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <div class="w-6 h-6 bg-emerald-800/50 rounded-full flex items-center justify-center shrink-0">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-white text-sm font-medium">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  image?: string;
  paragraphs?: string[];
  features?: string[];
  accentStat?: { value: string; label: string };
}

withDefaults(defineProps<Props>(), {
  title: 'Our Expertise',
  image: '/images/hardscaping.jpg',
  paragraphs: () => [
    'At Greenscapes SJ, we have been providing expert landscaping, hardscaping, and construction services to residential and commercial clients for over 5 years. Our team has the knowledge and experience to handle your property with precision and efficiency.',
    'Big or Small we ensure every project or service exceeds our clients expectations and leaves them more than satisfied. Send us a message today to schedule your free estimate!',
  ],
  features: () => [
    'Licensed & Insured',
    'Free Estimates',
    'Residential & Commercial',
    'Satisfaction Guaranteed',
  ],
  accentStat: () => ({ value: '5+', label: 'Years of Excellence' }),
});
</script>
