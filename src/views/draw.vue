<template>
  <div id="app">
    <VueSignaturePad width="500px" height="500px" ref="signaturePad" />
    <div>
      <button @click="save">Save</button>
      <button @click="undo">Undo</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MySignaturePad',
  methods: {
    undo () {
      this.$refs.signaturePad.undoSignature()
    },
    save () {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
    }
  }
}
</script>
<style scoped>
button{
        margin-right: 20px;
        background-color: #2CA7E2;
  border: none;
  color: white;
  border-radius: 12px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
      }
</style>
