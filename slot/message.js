Vue.component('message', {
  template: `
  <div class="message-box" v-if="show">
    <slot name="title">默认标题</slot>
    <slot></slot>
    <span class="message-box-close" @click="onClose">X</span>
  </div>
  `,
  props: [ 'show' ],
  methods: {
    onClose() {
      // this.$emit('close', false)
      this.$emit('update:show', false)
    }
  },
})