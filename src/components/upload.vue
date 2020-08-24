<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>

    <input
      ref="fileInput"
      type="file"
      @input="pickFile" accept="image/x-png,image/gif,image/jpeg">
      <div>
        <button @click="submit">Submit</button>
      <button @click="removeImage">Clear</button>
      </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  data () {
    return {
      previewImage: null
    }
  },
  methods: {
    selectImage () {
      this.$refs.fileInput.click()
    },
    pickFile () {
      const input = this.$refs.fileInput
      const file = input.files
      if (file && file[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
    removeImage: function (e) {
      this.previewImage = ''
      this.$refs.fileInput.value = null
    },
    submit: function (e) {
      e.preventDefault();
      if (this.$data.previewImage === '' ) {
        this.$alert('Enter Valid Signature')
      } else {
        this.$alert('Your Signature is Submitted')
        this.previewImage = ''
        this.$refs.fileInput.value = null
        // Ajax call for form submission
        const formData = new FormData()
        formData.append('previewImage', this.selectedFile)
        axios
          .post('/single-file', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
           console.log("AJAX Call")
          .then(function () {
            console.log('SUCCESS!!')
          })
          .catch(function () {
            console.log('FAILURE!!')
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
    width: 600px;
    height: 100px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
button{
  margin-top: 10.6%;
  margin-right: 20px;
  background-color: #2CA7E2;
  border: none;
  color: white;
  border-radius: 12px;
  padding: 15px 32px;
  text-align:center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: none;
  }
</style>
