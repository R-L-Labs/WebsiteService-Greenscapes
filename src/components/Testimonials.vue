<template>
  <section id="testimonials" class="py-24 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ subtitle }}</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text mt-3">{{ title }}</h2>
        <p class="text-text-muted mt-4 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="testimonial in items" :key="testimonial.name"
          class="bg-surface-light border border-border rounded-xl p-6">
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="n in 5" :key="n" class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-text-muted text-sm leading-relaxed mb-6">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span class="text-primary font-semibold text-sm">{{ testimonial.initials }}</span>
            </div>
            <div>
              <div class="text-text font-medium text-sm">{{ testimonial.name }}</div>
              <div class="text-text-muted text-xs">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TestimonialItem {
  name: string;
  initials: string;
  role: string;
  quote: string;
}

interface Props {
  subtitle?: string;
  title?: string;
  description?: string;
  items?: TestimonialItem[];
}

withDefaults(defineProps<Props>(), {
  subtitle: 'Testimonials',
  title: 'What Our Clients Say',
  description: "Don't just take our word for it. Here's what homeowners and businesses have to say about working with Greenscapes.",
  items: () => [
    {
      name: 'Sarah Mitchell',
      initials: 'SM',
      role: 'Homeowner',
      quote: 'Greenscapes completely transformed our backyard. The patio and garden design exceeded our expectations. Their team was professional, punctual, and the quality of work is outstanding.',
    },
    {
      name: 'David Chen',
      initials: 'DC',
      role: 'Property Manager',
      quote: "We've been using Greenscapes for our commercial property maintenance for three years. They're reliable, thorough, and our grounds have never looked better.",
    },
    {
      name: 'Maria Rodriguez',
      initials: 'MR',
      role: 'Homeowner',
      quote: 'From the initial consultation to the final walkthrough, the Greenscapes team made the entire process seamless. Our new irrigation system has cut our water bill in half.',
    },
  ],
});
</script>
