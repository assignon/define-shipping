<template>
  <div class="footer">
    <div class="contact">
      <div class='contact-container'>
        <h3 class='mb-3'>Contact</h3>
        <p>defineShipping@gmail.com</p>
        <p>0628481312 & 0686147453</p>
      </div>
    </div>

    <div class="socials">
      <div class='social-container'>
        <h3 class='mb-3'>Social Media</h3>
        <a
                href="https://www.facebook.com/defineShipping"
                target="_blank"
                class="mt-2"
                style="text-decoration: none;"
              >
                <v-icon medium color="#fff">fab fa-facebook-square</v-icon>
              </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #16032c;
  padding-bottom: 30px;
  padding-top: 30px;
  flex-wrap: wrap;
}
.contact,
.socials {
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-container, .social-container{
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.contact h3,
.socials h3 {
  color: white;
  text-align: left;
}
.contact p {
  color: white;
  text-align: left;
  font-size: 16px;
}
@media only screen and (max-width: 500px) {
  .footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>