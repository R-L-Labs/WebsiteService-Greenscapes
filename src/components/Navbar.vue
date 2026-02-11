<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2c-1.5 3-4.5 6-4.5 9a4.5 4.5 0 0 0 9 0c0-3-3-6-4.5-9z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-text">Green<span class="text-primary">scapes</span></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            class="text-text-muted hover:text-primary transition-colors text-sm font-medium">
            {{ link.label }}
          </a>
          <a href="#contact"
            class="bg-primary hover:bg-primary-light text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Get a Quote
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-text-muted hover:text-text p-2" aria-label="Toggle menu">
          <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden bg-surface border-b border-border">
        <div class="px-4 py-4 space-y-3">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            @click="isOpen = false"
            class="block text-text-muted hover:text-primary transition-colors text-sm font-medium py-2">
            {{ link.label }}
          </a>
          <a href="#contact" @click="isOpen = false"
            class="block bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors text-center mt-4">
            Get a Quote
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Landscaping', href: '/landscaping' },
  { label: 'Hardscaping', href: '/hardscaping' },
  { label: 'Construction', href: '/construction' },
];
</script>
