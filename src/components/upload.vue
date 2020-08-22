<template>
  <label class="file-select">
    <div id="app">
      <div v-if="!image">
        <input
          type="file"
          @change="handleFileUpload"
          accept="image/x-png,image/gif,image/jpeg"
        />
      </div>
      <div v-else>
        <img :src="image" />
      </div>
      <button @click="submit">Submit</button>
      <button @click="removeImage">Clear</button>
    </div>
  </label>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  data: function() {
    /*
      Defines the data used by the component
    */
    return {
      image: ""
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
    },
    createImage(file) {
      // eslint-disable-next-line no-unused-vars
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },
    submit: function(e) {
      if (this.image === "") {
        this.$alert("Enter Valid Signature");
      } else {
        this.$alert("your Signature is submitted");
        this.image = "";
      }
      const formData = new FormData();
      formData.append("file", this.selectedFile, this.selectedFile.name);
      axios
          .post("/single-file", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(function() {
            console.log("SUCCESS!!");
          })
          .catch(function() {
            console.log("FAILURE!!");
          });

      },
             /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
    }
  }
};
</script>
<style scoped>
.file-select > input[type="file"] {
  background-color: #2ca7e2;
  border: none;
  color: white;
  border-radius: 12px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
img {
  margin-left: 30%;
  width: 200px;
  height: 100px;
  margin: auto;
  display: block;
  border-color: red;
}
button {
  margin-top: 10%;
  margin-right: 20px;
  background-color: #2ca7e2;
  border: none;
  color: white;
  border-radius: 12px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: none;
}
</style>
