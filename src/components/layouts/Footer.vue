<template>
  <div class="footer">
    <div class="contact">
      <h3>Contact</h3>
      <p>defineShipping@gmail.com</p>
      <p>061724356</p>
    </div>

    <div class="socials">
      <h3>Social Media</h3>
      <v-icon medium color="white">fab fa-facebook-square</v-icon>
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
  background-color: #183153;
  padding-bottom: 30px;
  padding-top: 30px;
  flex-wrap: wrap;
}
.contact,
.socials {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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