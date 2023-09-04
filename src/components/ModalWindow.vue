<template>
  <div :class="{'bg-green-400' : response, 'bg-red-600' : !response}" class="absolute w-1/2 h-fit text-center indent-4 text-2xl top-56 rounded-sm left-1/4 py-8  border border-black">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
        response: Boolean,
    },
}
</script>
