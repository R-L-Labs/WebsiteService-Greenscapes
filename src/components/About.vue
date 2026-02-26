<template>
  <section id="about" class="py-24 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image placeholder -->
        <div class="relative">
          <div class="aspect-[4/3] bg-surface-light rounded-2xl border border-border overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-primary/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z" />
                </svg>
                <p class="text-text-muted text-sm">Team / Project Photo</p>
              </div>
            </div>
          </div>
          <!-- Accent card -->
          <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden sm:block">
            <div class="text-3xl font-bold">{{ accentStat.value }}</div>
            <div class="text-sm opacity-90">{{ accentStat.label }}</div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <span class="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-text mt-3 mb-6">
            {{ title }}
          </h2>
          <div class="space-y-4 text-text-muted leading-relaxed">
            <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
          </div>

          <!-- Feature list -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-text text-sm">{{ feature }}</span>
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
  paragraphs?: string[];
  features?: string[];
  accentStat?: { value: string; label: string };
}

withDefaults(defineProps<Props>(), {
  title: 'Our Expertise',
  paragraphs: () => [
    'At Greenscapes SJ, we have been providing expert landscaping services to residential and commercial clients for over 5 years. Our team has the knowledge and experience to handle your property with precision and efficiency.',
    'Big or Small we ensure every project or service exceeds our clients expectations and leaves them more than satisfied. Send us a message today to schedule your free estimate!',
  ],
  features: () => [
    'Licensed & Insured',
    'Free Estimates',
    'Residential & Commercial',
    'Satisfaction Guaranteed',
    'Eco-Friendly Practices',
    'On-Time Delivery',
  ],
  accentStat: () => ({ value: '5+', label: 'Years of Excellence' }),
});
</script>
