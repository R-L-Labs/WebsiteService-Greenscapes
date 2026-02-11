<template>
  <section id="projects" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-primary text-sm font-semibold uppercase tracking-wider">{{ subtitle }}</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text mt-3">{{ title }}</h2>
        <p class="text-text-muted mt-4 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in items" :key="project.title"
          class="group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
          <!-- Image placeholder -->
          <div class="aspect-[16/10] bg-surface-light relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br" :class="project.gradient"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z" />
              </svg>
            </div>
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                {{ project.category }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-text mb-1">{{ project.title }}</h3>
            <p class="text-text-muted text-sm">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProjectItem {
  title: string;
  category: string;
  description: string;
  gradient: string;
}

interface Props {
  subtitle?: string;
  title?: string;
  description?: string;
  items?: ProjectItem[];
}

withDefaults(defineProps<Props>(), {
  subtitle: 'Our Work',
  title: 'Featured Projects',
  description: 'Take a look at some of our recent work. Each project is crafted with attention to detail and built to last.',
  items: () => [
    {
      title: 'Modern Patio & Fire Pit',
      category: 'Hardscaping',
      description: 'Custom stone patio with built-in fire pit and seating area for a residential backyard.',
      gradient: 'from-primary/30 to-primary/10',
    },
    {
      title: 'Estate Garden Design',
      category: 'Landscape Design',
      description: 'Full landscape overhaul with native plantings, water features, and pathway lighting.',
      gradient: 'from-emerald-900/40 to-emerald-800/20',
    },
    {
      title: 'Commercial Property Grounds',
      category: 'Maintenance',
      description: 'Year-round maintenance program for a 5-acre commercial office park.',
      gradient: 'from-green-900/40 to-green-700/20',
    },
    {
      title: 'Retaining Wall System',
      category: 'Construction',
      description: 'Multi-tier retaining wall with integrated drainage and landscape lighting.',
      gradient: 'from-lime-900/30 to-lime-800/10',
    },
    {
      title: 'Backyard Oasis',
      category: 'Full Service',
      description: 'Complete backyard transformation with pool deck, pergola, and outdoor kitchen.',
      gradient: 'from-teal-900/30 to-teal-800/10',
    },
    {
      title: 'Smart Irrigation Install',
      category: 'Irrigation',
      description: 'Zone-based smart irrigation system covering 2 acres of residential property.',
      gradient: 'from-cyan-900/30 to-cyan-800/10',
    },
  ],
});
</script>
