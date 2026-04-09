<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-30">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-3">
          <img src="/images/logo.png" alt="Greenscapes Landscaping & Construction" class="h-22 object-contain" />
          <div class="hidden sm:block h-16 w-px bg-gray-400"></div>
          <div class="hidden sm:flex flex-col leading-tight">
            <span class="text-2xl font-bold text-text">Greenscapes</span>
            <span class="text-base font-medium text-text-muted">Landscaping & Construction</span>
            <span class="mt-0.5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Commercial &amp; Residential
            </span>
          </div>
        </a>

        <!-- Desktop Nav (center) -->
        <div class="hidden lg:flex items-center gap-8">
          <!-- About Dropdown -->
          <div class="relative" @mouseenter="aboutOpen = true" @mouseleave="aboutOpen = false">
            <button
              class="text-text-muted hover:text-primary transition-colors text-base font-medium flex items-center gap-1"
              @click="aboutOpen = !aboutOpen"
            >
              About
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': aboutOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="aboutOpen" class="absolute top-full left-0 mt-1 w-44 bg-surface border border-border rounded-lg shadow-lg py-1">
                <a v-for="item in aboutLinks" :key="item.href" :href="item.href"
                  class="block px-4 py-2.5 text-base text-text-muted hover:text-primary hover:bg-surface-light transition-colors">
                  {{ item.label }}
                </a>
              </div>
            </transition>
          </div>

          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            class="text-text-muted hover:text-primary transition-colors text-base font-medium">
            {{ link.label }}
          </a>
        </div>

        <!-- Right section: contact info + CTA -->
        <div class="hidden lg:flex flex-col items-center gap-1">
          <a href="/about#contact"
            class="bg-[#4a6741] hover:bg-[#5a7a51] text-white px-8 py-2.5 rounded-lg text-base font-semibold transition-colors">
            Free Estimate
          </a>
          <a href="tel:+18564725751" class="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span class="text-sm font-medium">856-472-5751</span>
          </a>
          <a href="mailto:greenscapessj@gmail.com" class="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span class="text-sm font-medium">greenscapessj@gmail.com</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="lg:hidden text-text-muted hover:text-text p-2" aria-label="Toggle menu">
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
      <div v-if="isOpen" class="lg:hidden bg-surface border-b border-border">
        <div class="px-4 py-4 space-y-3">
          <!-- About section with sub-links -->
          <div>
            <button @click="mobileAboutOpen = !mobileAboutOpen"
              class="flex items-center justify-between w-full text-text-muted hover:text-primary transition-colors text-sm font-medium py-2">
              About
              <svg class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': mobileAboutOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="mobileAboutOpen" class="pl-4 space-y-1">
              <a v-for="item in aboutLinks" :key="item.href" :href="item.href"
                @click="isOpen = false"
                class="block text-text-muted hover:text-primary transition-colors text-sm py-1.5">
                {{ item.label }}
              </a>
            </div>
          </div>

          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            @click="isOpen = false"
            class="block text-text-muted hover:text-primary transition-colors text-sm font-medium py-2">
            {{ link.label }}
          </a>
          <a href="/about#contact" @click="isOpen = false"
            class="block bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors text-center mt-4">
            Free Estimate
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const aboutOpen = ref(false);
const mobileAboutOpen = ref(false);

const aboutLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
];

const navLinks = [
  { label: 'Landscaping', href: '/landscaping' },
  { label: 'Hardscaping', href: '/hardscaping' },
  { label: 'Construction', href: '/construction' },
];
</script>
