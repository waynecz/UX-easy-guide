<template>
  <div class="demo" layout="column top-center">
    <div class="demo__ground" layout="row cenetr-center">
      <slot name="b"></slot>
      <slot name="g"></slot>
    </div>
    <div class="demo__footer" layout="row cenetr-center">
      <div class="demo__attitude" data-desktop="🤔" data-mobile="😵"></div>
      <div class="demo__attitude" data-desktop="😘" data-mobile="😍"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      align: {
        default: 'h'
      }
    },
    name: 'demo'
  };
</script>
