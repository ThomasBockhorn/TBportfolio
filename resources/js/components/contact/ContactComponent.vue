<template>
  <div id="contact" class="container mt-5">
    <div class="row mt-5">
      <div class="col text-center">
        <h3>Contact Form</h3>
      </div>
      <form ref="form" class="row g-3" @submit.prevent="sendEmail">
        <div class="col-md-6">
          <label for="firstName" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            name="from_name"
            placeholder="Theodore Roosevelt"
            v-model="name"
          />
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="reply_to"
            placeholder="Theodore.Roosevelt@Bully.com"
            v-model="email"
          />
        </div>
        <div class="col-md-12">
          <label for="message" class="form-label">Message</label>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="message"
              style="height: 150px"
              name="message"
              v-model="message"
            ></textarea>
            <label for="message">Enter your message here</label>
          </div>
        </div>
        <div class="col-12 mb-5">
          <input
            type="submit"
            class="btn btn-outline-light"
            value="Send"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

/**
 * Contact allows the visitor in conjunction with emailjs.com to send email notifications to my email account.
 */
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "tecktonetMailService",
          "template_sx0lr8w",
          this.$refs.form,
          "user_6QEusrvbUjGdKTzVBP8Xv",
          ).then((result) => {
            console.log('Success!', result.text);
          }).catch((error) => {
            console.log('Failed...', error.text);
          })
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = ""; 
      this.message = "";
    },
  },
};
</script>

<style scoped>
label,
h3 {
  font-family: "Libre Baskerville", serif;
  color: white;
}
</style>