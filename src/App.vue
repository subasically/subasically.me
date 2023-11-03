<script setup lang="ts">
var browserLang = (navigator.language == 'de-DE' || navigator.language == 'da-DK' || navigator.language == 'sv-SE' || navigator.language == 'en-GB') ? navigator.language : 'en-US'

const locales: any = {
  "en-US": {
    "greeting": "Hello from The United States",
    "aboutme": "I'm your resident tech geek! In the digital world, my passions lie in web development and the fascinating realm of video games. I enjoy constructing computers from scratch and maintaining my cutting-edge home lab. Outside of the cyber-verse, my heart belongs to my wife and daughters - spending quality time with them defines my happiness.",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
  },
  "de-DE": {
    "greeting": "Hallo aus Deutschland",
    "aboutme": "Ich bin Ihr ansässiger Technikfreak! In der digitalen Welt liegen meine Leidenschaften in der Webentwicklung und der faszinierenden Welt der Videospiele. Es macht mir Spaß, Computer von Grund auf zu konstruieren und mein hochmodernes Heimlabor zu warten. Außerhalb des Cyberversums gehört mein Herz meiner Frau und meinen Töchtern – schöne Zeit mit ihnen zu verbringen, macht mein Glück aus.",
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png"
  },
  "da-DK": {
    "greeting": "Hej fra Danmark",
    "aboutme": "Jeg er din fastboende teknologinørd! I den digitale verden ligger mine passioner inden for webudvikling og videospils fascinerende verden. Jeg nyder at konstruere computere fra bunden og vedligeholde mit banebrydende hjemmelaboratorium. Uden for cyberverset tilhører mit hjerte min kone og mine døtre - at bruge kvalitetstid med dem definerer min lykke.",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1920px-Flag_of_Denmark.svg.png"
  },
  "sv-SE": {
    "greeting": "Hej från Sverige",
    "aboutme": "Jag är din inhemska tekniknörd! I den digitala världen ligger mina passioner inom webbutveckling och videospelens fascinerande värld. Jag tycker om att bygga datorer från grunden och underhålla mitt banbrytande hemlabb. Utanför cyberversen tillhör mitt hjärta min fru och mina döttrar - att spendera kvalitetstid med dem definierar min lycka.",
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png"
  },
  "en-GB": {
    "greeting": "Hello from the United Kingdom",
    "aboutme": "I'm your resident tech geek! In the digital world, my passions lie in web development and the fascinating realm of video games. I enjoy constructing computers from scratch and maintaining my cutting-edge home lab. Outside of the cyber-verse, my heart belongs to my wife and daughters - spending quality time with them defines my happiness.",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
  },
}
</script>

<template>
  <header class="flex center-horizontal center-vertical">
    <img src="./assets/me.webp" class="me" alt="Alen Subasic" />
  </header>
  <main class="flex column center-vertical center-horizontal">
    <h1>Alen Subasic</h1>
    <h2>{{ locales[browserLang]["greeting"] }}</h2>
    <p>{{ locales[browserLang]["aboutme"] }}</p>
  </main>
  <footer id="footer" class="flex column center-vertical center-horizontal">
    <ul>
      <li>
        <img :src="locales[browserLang]['flag']" alt="flag" class="footer flag logo">
      </li>
      <li>
        <a href="https://github.com/subasically" alt="github" target="_blank">
          <img src="./assets/github-mark.svg" alt="github logo" class="footer logo">
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/alensubasic" alt="linkedin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="footer logo linkedin" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#resume">
          <img src="./assets/cv-4.svg" class="footer logo">
        </a>
      </li>
      <li>
        <a href="mailto:alensubasic@gmail.com?subject=Your%20website%20is%20cool!&body=Hi%20Alen%2C%0D%0A%0D%0AI%20would%20like%20to%20work%20with%20you."
          alt="email me" target="_blank">
          <img src="./assets/email.svg" alt="email me" class="footer logo">
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped></style>
