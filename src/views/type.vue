<template>
<form>
    <input type="text" class="no-outline" v-model="text"/><br/><br/>
    <button @click="submit">Submit</button>
    <button @click="resetForm" >Clear</button>
</form>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  e1: 'form',
  data: function () {
    return {
      text: ''

    }
  },
  methods: {
    resetForm: function (e) {
      e.preventDefault()
      this.$data.text = ''
    },
    submit: function (e1) {
      e1.preventDefault()
      if (this.$data.text === '') {
        this.$alert('Enter Valid Signature')
      } else {
        this.$alert('Your Signature is Submitted')
        this.$data.text = ''
        //Ajax call for form submission
        const formData = new FormData()
        formData.append('myFile', this.selectedFile)
        axios.post('my-domain.com/file-upload', formData)
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

   input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        width: 50%;
        height: 100;
        margin-top: 100px;
        text-align: center  ;
        font-family: 'Italianno', cursive;
        font-size: 500%;
      }
       .no-outline:focus {
        outline: none;
      }

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
