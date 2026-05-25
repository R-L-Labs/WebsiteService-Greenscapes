<template>
  <section id="faq" class="py-24" :style="bgColor ? { backgroundColor: bgColor } : {}">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span
          class="text-sm font-semibold uppercase tracking-wider"
          :style="{ color: accentColor }"
        >
          {{ subtitle }}
        </span>
        <h2
          class="text-3xl sm:text-4xl font-bold mt-3"
          :class="bgColor ? 'text-white' : 'text-text'"
        >
          {{ title }}
        </h2>
      </div>

      <div class="space-y-3">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="rounded-xl border transition-colors"
          :class="bgColor ? 'border-white/10 bg-white/5' : 'border-border bg-surface'"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
            :aria-expanded="open === i"
            :aria-controls="`faq-answer-${i}`"
            @click="toggle(i)"
          >
            <span
              class="text-base sm:text-lg font-semibold"
              :class="bgColor ? 'text-white' : 'text-text'"
            >
              {{ item.question }}
            </span>
            <ChevronDown
              class="w-5 h-5 shrink-0 transition-transform duration-200"
              :class="[open === i ? 'rotate-180' : '', bgColor ? 'text-white/70' : 'text-text-muted']"
              :style="open === i ? { color: accentColor } : {}"
            />
          </button>
          <div
            v-show="open === i"
            :id="`faq-answer-${i}`"
            class="px-5 sm:px-6 pb-5 sm:pb-6 leading-relaxed"
            :class="bgColor ? 'text-white/80' : 'text-text-muted'"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

interface FaqItem {
  question: string;
  answer: string;
}

withDefaults(
  defineProps<{
    subtitle?: string;
    title?: string;
    items: FaqItem[];
    accentColor?: string;
    bgColor?: string;
  }>(),
  {
    subtitle: 'Frequently Asked Questions',
    title: 'FAQs',
    accentColor: '#1e7d1e',
    bgColor: '',
  },
);

const open = ref<number | null>(0);
function toggle(i: number) {
  open.value = open.value === i ? null : i;
}
</script>
