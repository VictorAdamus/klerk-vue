<template>
  <div :class="{'border-lime-700 rounded-lg shadow-lime-700 outline-lime-500' : this.response, 'border-red-900 outline-red-500 shadow-lime-700' : !this.response}" class="absolute w-1/2 h-fit bg-white text-center indent-4 text-black text-sdf@sfsdf.sdfxl top-56 left-1/4 py-8 shadow-lg outline outline-2 border-2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
        response: String,
    },
}
</script>
