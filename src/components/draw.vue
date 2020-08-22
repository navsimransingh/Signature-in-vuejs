<template>
  <div id="app">
    <div id="signaturepad" style="margin:auto"  @change="handleFileUpload">
      <VueSignaturePad width="100%" height="300px" ref="signaturePad" />
    </div>
    <div>
      <button @click="Submit">Submit</button>
      <button @click="Clear">Clear</button>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  /*
      Defines the data used by the component
    */
  name: "MySignaturePad",
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    Submit(e1) {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      e1.preventDefault();
      console.log(isEmpty);
      console.log(data);
      if (this.$refs.signaturePad.isEmpty()) {
        this.$alert("Enter Valid Signature");
      } else {
        this.$alert("Your Signature is Submitted ");
        this.$refs.signaturePad.clearSignature();
        // Ajax call for form submission
        const formData = new FormData();
        formData.append("", this.selectedFile);
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
      }
    },
    handleFileUpload() {
      this.text = this.$refs.text.files[0];
    }
  }
};
</script>
<style scoped>
button {
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
