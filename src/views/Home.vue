<template>
  <div class="home-core">
    <v-layout class="home-layout" column justify-center align-center>
      <v-flex xs12 sm12 md12 lg12 xl12 class="landing-flex" id="home">
        <video id="video" autoplay="true" muted="muted" loop>
          <source src="../assets/boat.mp4" type="video/mp4" />
          <!-- <source src="../assets/boat.ogg" type="video/ogg" /> -->
          Your browser does not support the video tag.
        </video>
        <div class="video-ctrl">
          <v-btn rounded color="#16032c" dark large class="ctrl-btn" @click="setVolume()">
            <v-icon medium color="white" v-if="muted">fas fa-volume-up</v-icon>
            <v-icon medium color="white" v-else>fas fa-volume-mute</v-icon>

            <p v-if="muted" class="muted-status">Unmuted</p>
            <p v-else class="muted-status">Muted</p>
          </v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12 class="svs-flex" id="svs">
        <h1 data-aos="fade-up" data-aos-delay="20" data-aos-duration="1000">Our Services</h1>
        <v-divider width="5%"></v-divider>
        <div class="svs-container">
          <div
            class="svs-items hidden-sm-and-down"
            v-for="(items, i) in svs"
            :key="i"
            data-aos="fade-up"
            :data-aos-delay="i*200"
            data-aos-duration="1000"
          >
            <!-- <v-icon class="mb-3" style="font-size: 100px; color: #16032c;">fas {{items.icon}}</v-icon> -->
            <img :src="items.image" alt style="width: 100px;height:100px" class="mb-4" />
            <h3 class="mb-2">{{items.name}}</h3>
            <p>{{items.content}}</p>
            <ul class='svs-types'>
              <li 
                v-for="(type, t) in items.types" 
                :key="t" 
                data-aos="fade-up" 
                :data-aos-delay="t*220" 
                data-aos-duration="1000"
              >
                <v-icon small color='#16032c'>fas fa-angle-right</v-icon>
                {{type}}
              </li>
            </ul>
          </div>

          <v-carousel
            hide-delimiters
            :show-arrows="false"
            cycle
            height="400"
            class="hidden-md-and-up"
          >
            <v-carousel-item v-for="(items, i) in svs" :key="i">
              <div class="svs-items-carousel">
                <img :src="items.image" alt style="width: 100px;height:100px" class="mb-3" />
                <h3 class="mb-2">{{items.name}}</h3>
                <p>{{items.content}}</p>
                <ul class='svs-types'>
                  <li 
                    v-for="(type, t) in items.types" 
                    :key="t" 
                    data-aos="slide-right" 
                    :data-aos-delay="t*220" 
                    data-aos-duration="1000"
                  >
                    <v-icon small color='#16032c'>fas fa-angle-right</v-icon>
                    {{type}}
                  </li>
                </ul>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12 class="about-flex" id="about">
        <h1 data-aos="fade-up" data-aos-delay="20" data-aos-duration="1000">About Us</h1>
        <v-divider width="5%"></v-divider>
        <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="30">
          My name is A. Ajibola an entrepreneur in shipping and freight forwarding.
          Define shipping started a decade ago in Lagos Nigeria. The main activity 
          was the buying and selling of cars, as the business grow, we seek to expand
          and get into new markets and territories.
          <br />
          <br />Today, Define shipping is present in the Netherlands where we buying
          and sell cars, we ship containers and many other goods according to the laws
          governing international trade and supply chain.

          <br />
          <br />Define Shipping is connecting and simplifying trade to grow and thrive
          together with our customers.
          We carrying out worldwide shipping and our carries are:
          <ul>
            <li style='list-style:none'> <v-icon small color='#16032c'>fas fa-angle-right</v-icon> Grimaldi lines</li>
            <li style='list-style:none'> <v-icon small color='#16032c'>fas fa-angle-right</v-icon> Sallaum lines</li>
          </ul>
        </p>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12 class="contact-flex" id="contact">
        <h1  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="30">Contact</h1>
        <v-divider width="5%"></v-divider>
        <div class="contact-container">
          <div class="contact-info hidden-sm-and-down">
            <h3 class="mb-5">Contact Us via:</h3>
            <div style="margin-bottom: 40px;">
              <div>
                <v-icon large color="#16032c">fas fa-at</v-icon>
                <span class="mt-1 ml-2 font-weight-bold">Email</span>
              </div>
              <span class>defineshipping@gmail.com</span>
            </div>

            <div style="margin-bottom: 40px;">
              <div>
                <v-icon large color="#16032c">fas fa-phone-alt</v-icon>
                <span class="mt-2 ml-2 font-weight-bold">Tel</span>
              </div>
              <span class>0628481312 & 0686147453</span>
            </div>

            <div>
              <span class="font-weight-bold" style="font-size: 20px;">Social Media</span>
              <a
                href="https://www.facebook.com/defineShipping"
                target="_blank"
                class="mt-2"
                style="text-decoration: none;"
              >
                <v-icon medium color="#16032c">fab fa-facebook-square</v-icon>
              </a>
            </div>
          </div>

          <div class="contact-form">
            <h3 class="">Get in Touch:</h3>
            <v-form class="mt-3 contact-form-tag" ref="contactForm" @submit.prevent='submitForm' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact">
              <p class="form-msg animated"></p>  
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                type="email"
                name='email'
                label="Email"
                required
                outlined
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                class='contact-input animated'
              ></v-text-field>
              <v-textarea
                label="Your Message"
                name="message"
                rows="5"
                color="#8B53FF"
                flat
                v-model="form.message"
                :rules="[rules.required]"
                style="line-height: 22px;"
                outlined
                data-aos="fade-up"
                data-aos-delay="450"
                class='contact-input animated'
                data-aos-duration="500"
              />
              <div class="btn-container mt-5 contact-input animated">
                <button type='submit' class='contact-form-submit pa-3'><v-icon medium left class="ml-1" color='white'>fas fa-paper-plane</v-icon><strong>Get In Touch</strong></button>
              </div>
              <div class='submit-succes' v-if='formSubmitedSuccesfully'>
                <v-icon large color='#54bf8e' class='mb-3 succes-notification animated'>fas fa-check-circle</v-icon>
                <p class='succes-notification animated'>Message submited successfully, we will get back to you as soon as possible</p>
              </div>
            </v-form>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      svs: [
        {
          name: "Goods",
          // image: "fa-shopping-bag",
          image: require("../assets/goods.svg"),
          content:"We buy and sell and ship different types of goods such as",
          types: ["Furniture", "Bicycle", "Tires", "Computers and accessories", "Electronics", "Home appliance"]
        },
        {
          name: "Cars",
          // icon: "fa-car",
          image: require("../assets/cars.svg"),
          content:"We deal on all types of cars in buying selling and shipping such as",
          types: ["New cars", "Used cars", "Parts"]
        },
        {
          name: "Trucks",
          // icon: "fa-truck",
          image: require("../assets/truck.svg"),
          content: "We buy, sell and ship ",
          types: ["Trucks", "Van", "Lorries", "Spare parts"]
        }
      ],
      rules: {
        required: value => !!value || "This field is required",
        min: v => v.length >= 8 || "8 characters minimal",
        emailMatch: () => "Email and password don't match"
      },
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "Email is not valid"
      ],
     form: {
        message: "", // message input value
        email: "", // email input value
     },
      formErrorAnimation: "headShake",
      muted: true, // video mute status
      formSubmitedSuccesfully: false
    };
  },

  mounted() {
    // this.volume();
  },

  methods: {
    setVolume() {
      // mute and unmute video
      let video = document.querySelector("#video");
      if (video.muted) {
        this.muted = false;
        video.muted = false;
      } else {
        this.muted = true;
        video.muted = true;
      }
    },

    contactFormAnimation(){
      let contactInputs = document.querySelectorAll('.contact-input');
      let succesNotification = document.querySelectorAll('.succes-notification');
      let self = this;

      for (let i = 0; i < contactInputs.length; i++) {
        if(contactInputs[i].classList.contains('fadeInUp')){
          contactInputs[i].classList.remove('fadeInUp');
          contactInputs[i].classList.add('fadeOutUp');
          contactInputs[i].style.animationDelay = `${i/2}s`
        }else{
          contactInputs[i].classList.add('fadeOutUp');
          contactInputs[i].style.animationDelay = `${i/2}s`
        }
        setTimeout(()=>{
          contactInputs[i].style.display = 'none';
        }, 1500)
      }
      // display succes notification
      setTimeout(()=>{
        self.formSubmitedSuccesfully = true;
        for (let i = 0; i < succesNotification.length; i++) {
          succesNotification[i].classList.add('fadeInUp');
          succesNotification[i].style.animationDelay = `${i/2}s`
        }
      }, 1500)
      // remove succes notification and display contact form
      setTimeout(()=>{
        for (let i = 0; i < succesNotification.length; i++) {
          succesNotification[i].classList.remove('fadeInUp');
          succesNotification[i].classList.add('fadeOutUp');
          succesNotification[i].style.animationDelay = `${i/2}s`
        }
        self.formSubmitedSuccesfully = false;
        for (let i = 0; i < contactInputs.length; i++) {
          contactInputs[i].style.display = 'flex';
          contactInputs[i].classList.remove('fadeOutUp');
          contactInputs[i].classList.add('fadeInUp');
          contactInputs[i].style.animationDelay = `${i/2}s`
        }
      }, 7000)

    },

    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    handleSubmit () {
      let self = this;
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      )
      .then((response) => {
        console.log(response)
        self.contactFormAnimation();
      })
      .catch((e) => {
        console.log(e)
      })

    },

    submitForm() {
      let msg = document.querySelector(".form-msg");
      let self = this;
      if (self.form.email != '' && self.form.message != '') {
        msg.innerHTML = ""
        //submit form
        self.handleSubmit();
         self.form.email = "";
        self.form.message = "";
      } else {
        msg.style.color = "red";
        if (msg.classList.contains(self.formErrorAnimation)) {
          msg.classList.remove(self.formErrorAnimation);
        } else {
          msg.classList.add(self.formErrorAnimation);
          setTimeout(function() {
            msg.classList.remove(self.formErrorAnimation);
          }, 3000);
        }
        msg.innerHTML =
          "Email and message fields should not be empty and the email must be a valide email. Try again.";
      }
    }
  }
};
</script>

<style scope>
.home-core {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

.home-layout {
  width: 100%;
  height: auto;
}

.landing-flex {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
#video {
  width: 100vw; /* Could also use width: 100%; */
  height: 95vh;
  object-fit: cover;
  /* position: fixed; Change position to absolute if you don't want it to take up the whole page */
  /* left: 0px;
  top: 0px;
  z-index: -1; */
}
.video-ctrl {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  position: absolute;
}
.ctrl-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}
.ctrl-btn p {
  text-transform: capitalize;
  text-align: center;
  margin-left: 10px;
  margin-top: 15px;
  font-size: 17px;
  font-weight: bold;
}
.svs-flex {
  width: 100%;
  height: auto;
  padding-top: 70px;
  /* padding-bottom: 70px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8ff;
}
.svs-flex h1,
.about-flex h1,
.contact-flex h1 {
  text-align: center;
  color: #16032c;
}
.svs-flex .v-divider,
.about-flex .v-divider,
.contact-flex .v-divider {
  margin-bottom: 50px;
  color: #16032c;
}
.svs-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
.svs-items {
  width: 28%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.svs-types{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  padding-inline-start: 0px;
}
.svs-types li{
  list-style: none;
  font-weight: bold;
  color: #16032c;
  text-align: left;
}
.v-carousel {
}
.svs-items-carousel {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.svs-items-carousel p {
  width: 95%;
}
.svs-items h3,
.svs-items-carousel h3 {
  color: #16032c;
}
.svs-items p,
.svs-items-carousel p {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #16032c;
}
.about-flex {
  width: 100%;
  height: auto;
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.about-flex p {
  width: 80%;
  text-align: justify;
  font-size: 17px;
  font-weight: bold;
}
.contact-flex {
  width: 100%;
  height: auto;
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8ff;
}
.contact-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.contact-info {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-info div {
  width: 35%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-bottom: 25px; */
}
.contact-info div div {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.contact-info div div span {
  font-size: 20px;
}
.contact-info div span {
  font-weight: bold;
}
.contact-form {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-form .v-form {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.form-msg {
  width: 100%;
  height: auto;
  font-size: 16px;
}
/* .contact-form form{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.contact-form form input, .contact-form form textarea{
  border: 1px solid grey;
  border-radius: 3px;
} */
.contact-form .v-form .v-text-field {
  width: 100%;
}
.contact-form-submit{
  border-radius: 5px;
  background-color: #16032c;
  color: white;
}
.btn-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -15px;
}
.submit-succes{
   width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.submit-succes p{
  font-size: 16px;
  text-align: center;
  width: 100%
}
@media only screen and (max-width: 500px) {
  .svs-container {
    justify-content: center;
    align-items: center;
  }
  .svs-flex,
  .about-flex,
  .contact-flex {
    padding-top: 30px;
    /* padding-bottom: 30px; */
  }
  .svs-flex .v-divider,
  .about-flex .v-divider,
  .contact-flex .v-divider {
    margin-bottom: 20px;
  }
  .about-flex p {
    width: 90%;
  }
  .contact-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact-info {
    width: 100%;
  }
  .contact-form {
    width: 100%;
  }
  .contact-form .v-form, .submit-succes{
    width: 90%;
  }
  .svs-types{
    width: auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  }
  .svs-types li{
    
  }
}
</style>
