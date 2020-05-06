<template>
  <div class="avatar">
    <div class="foto">
      <img :src="src" :alt="alt">
    </div>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    src: { type: 'String' },
    alt: { type: 'String' }
  }
}
</script>