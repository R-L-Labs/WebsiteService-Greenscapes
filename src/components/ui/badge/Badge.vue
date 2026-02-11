<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-white',
        secondary: 'border-transparent bg-surface-light text-text',
        outline: 'border-border text-text-muted',
        accent: 'border-transparent bg-primary/10 text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>

const props = defineProps<{
  variant?: NonNullable<BadgeVariants['variant']>
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </div>
</template>
