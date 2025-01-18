<template>
  <div class="container">
    <header>
      <img src="../assets/images/alen-subasic.webp" class="me" alt="Alen Subasic" />
    </header>
    <aside class="left-sidebar">
      <!-- Left sidebar content -->
    </aside>
    <main>
      <h1>Alen Subasic (DEV MODE)</h1>
      <h2 class="greeting">{{ locales[browserLang]["greeting"] }}</h2>
      <p>{{ locales[browserLang]["aboutme"] }}</p>
    </main>
    <aside class="right-sidebar">
      <!-- Right sidebar content -->
    </aside>
    <footer id="footer">
      <ul>
        <li>
          <img :src="locales[browserLang]['flag']" alt="flag" class="flag" />
        </li>
        <li>
          <a href="https://github.com/subasically" alt="github" target="_blank">
            <img src="../assets/images/github-mark.svg" alt="github logo" class="footer logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alensubasic" alt="linkedin" target="_blank">
            <img src="../assets/images/linkedin.svg" alt="linkedin logo" class="footer logo" />
          </a>
        </li>
        <li>
          <a
            href="mailto:alensubasic@gmail.com?subject=Your%20website%20is%20cool!&body=Hi%20Alen%2C%0D%0A%0D%0AI%20would%20like%20to%20work%20with%20you."
            alt="email me"
            target="_blank"
          >
            <img src="../assets/images/email.svg" alt="email me" class="footer logo" />
          </a>
        </li>
      </ul>
      <span>Created with ❤️ using <a href="https://github.com/nuxt/nuxt">Nuxt</a> by Alen Subasic, {{ year }}</span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import "~/assets/styles/global.css";
import { ref, onMounted } from "vue";

// Reactive state for browser language
const browserLang = ref("en-US");

onMounted(() => {
  // Set browserLang only on the client
  const lang = navigator.language;
  browserLang.value = lang === "de-DE" || lang === "da-DK" || lang === "sv-SE" || lang === "en-GB" ? lang : "en-US";
});

const year = new Date().getFullYear();

const locales: Record<string, any> = {
  "en-US": {
    greeting: "Hello from The United States",
    aboutme:
      "I'm your resident tech geek! In the digital world, my passions lie in web development and the fascinating realm of video games. I enjoy constructing computers from scratch and maintaining my cutting-edge home lab. Outside of the cyber-verse, my heart belongs to my wife and daughters - spending quality time with them defines my happiness.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
  },
  "de-DE": {
    greeting: "Hallo aus Deutschland",
    aboutme:
      "Ich bin Ihr ansässiger Technikfreak! In der digitalen Welt liegen meine Leidenschaften in der Webentwicklung und der faszinierenden Welt der Videospiele. Es macht mir Spaß, Computer von Grund auf zu konstruieren und mein hochmodernes Heimlabor zu warten. Außerhalb des Cyberversums gehört mein Herz meiner Frau und meinen Töchtern – schöne Zeit mit ihnen zu verbringen, macht mein Glück aus.",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png",
  },
  "da-DK": {
    greeting: "Hej fra Danmark",
    aboutme:
      "Jeg er din fastboende teknologinørd! I den digitale verden ligger mine passioner inden for webudvikling og videospils fascinerende verden. Jeg nyder at konstruere computere fra bunden og vedligeholde mit banebrydende hjemmelaboratorium. Uden for cyberverset tilhører mit hjerte min kone og mine døtre - at bruge kvalitetstid med dem definerer min lykke.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1920px-Flag_of_Denmark.svg.png",
  },
  "sv-SE": {
    greeting: "Hej från Sverige",
    aboutme:
      "Jag är din inhemska tekniknörd! I den digitala världen ligger mina passioner inom webbutveckling och videospelens fascinerande värld. Jag tycker om att bygga datorer från grunden och underhålla mitt banbrytande hemlabb. Utanför cyberversen tillhör mitt hjärta min fru och mina döttrar - att spendera kvalitetstid med dem definierar min lycka.",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png",
  },
  "en-GB": {
    greeting: "Hello from the United Kingdom",
    aboutme:
      "I'm your resident tech geek! In the digital world, my passions lie in web development and the fascinating realm of video games. I enjoy constructing computers from scratch and maintaining my cutting-edge home lab. Outside of the cyber-verse, my heart belongs to my wife and daughters - spending quality time with them defines my happiness.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  },
};
</script>

<style scoped>
.greeting {
  text-align: center;
}
</style>
