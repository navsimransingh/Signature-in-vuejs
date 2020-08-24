<template>
<div>
  <form>
    <input
      type="text"
      class="no-outline"
      v-model="text"
      v-on:change="handleFileUpload()"
    /><br /><br />
  </form>
   <button @click="submit">Submit</button>
  <button @click="resetForm">Clear</button>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  e1: "form",
  data: function() {
    /*
      Defines the data used by the component
    */
    return {
      text: ""
    };
  },
  methods: {
    resetForm: function(e) {
      e.preventDefault();
      this.$data.text = "";
    },
    handleFileUpload() {
      this.text = this.$refs.text.files[0];
    },
    submit: function(e1) {
      e1.preventDefault()
      if (this.$data.text === "") {
        this.$alert("Enter Valid Signature");
      } else {
        this.$alert("Your Signature is Submitted");
        this.$data.text = "";
        //Ajax call for form submission
        const formData = new FormData();
        formData.append("file", this.selectedFile);
        axios
          .post("/single-file", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          console.log("AJAX Call")
          .then(function() {
            console.log("SUCCESS!!");
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Italianno&display=swap");

input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  width: 50%;
  height: 100;
  margin-top: 150px;
  text-align: center;
  font-family: "Italianno", cursive;
  font-size: 500%;
}
.no-outline:focus {
  outline: none;
}

button {
  margin-top:1%;
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
