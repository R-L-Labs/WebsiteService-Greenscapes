<template>
  <section id="services" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ subtitle }}</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text mt-3">{{ title }}</h2>
        <p class="text-text-muted mt-4 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="service in items" :key="service.title"
          class="group bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="service.iconPath" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-text mb-2">{{ service.title }}</h3>
          <p class="text-text-muted text-sm leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ServiceItem {
  title: string;
  description: string;
  iconPath: string;
}

interface Props {
  subtitle?: string;
  title?: string;
  description?: string;
  items?: ServiceItem[];
}

withDefaults(defineProps<Props>(), {
  subtitle: 'What We Do',
  title: 'Our Services',
  description: 'Comprehensive landscaping and construction solutions tailored to transform your property into something extraordinary.',
  items: () => [
    {
      title: 'Landscape Design',
      description: 'Custom landscape plans that blend beauty and function. We design outdoor spaces that reflect your style and complement your property.',
      iconPath: 'M12 21v-6m0 0l-3-3m3 3l3-3m-3-3a4.5 4.5 0 110-9 4.5 4.5 0 010 9z',
    },
    {
      title: 'Lawn Maintenance',
      description: 'Regular mowing, fertilization, aeration, and seasonal care to keep your lawn lush, healthy, and looking its best year-round.',
      iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    },
    {
      title: 'Hardscaping',
      description: 'Patios, retaining walls, walkways, and outdoor living areas built with quality materials and expert craftsmanship.',
      iconPath: 'M11.42 15.17l-5.59 5.59a2.1 2.1 0 01-2.97-2.97l5.59-5.59m2.97 2.97l5.59-5.59a2.1 2.1 0 00-2.97-2.97l-5.59 5.59m2.97 2.97L7.05 19.36',
    },
    {
      title: 'Irrigation Systems',
      description: 'Smart irrigation design and installation that conserves water while keeping your landscape properly hydrated.',
      iconPath: 'M12 3c-1.5 3-5 7-5 10.5a5 5 0 0010 0C17 10 13.5 6 12 3z',
    },
    {
      title: 'Tree & Shrub Care',
      description: 'Professional pruning, trimming, removal, and planting services to maintain the health and beauty of your trees and shrubs.',
      iconPath: 'M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm9.2 0l-1.535.887M17.048 8.25a3 3 0 105.196-3 3 3 0 00-5.196 3zM12 20.25l4.286-12.346M12 20.25l-4.286-12.346',
    },
    {
      title: 'Seasonal Cleanup',
      description: 'Spring and fall cleanup services including leaf removal, bed preparation, mulching, and winterization.',
      iconPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z',
    },
  ],
});
</script>
