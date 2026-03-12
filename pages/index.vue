<template>
  <NuxtLayout>
    <main class="home-page">
      <nav class="top-bar fade-in fade-in--1" aria-label="Primary">
        <a class="brand-mark" href="#top">AS</a>
        <div class="top-bar__links">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <button type="button" class="top-bar__button" v-bind="tallyPopupAttrs">Contact</button>
        </div>
      </nav>

      <section id="top" class="hero-panel fade-in fade-in--2">
        <div class="hero-copy">
          <p class="eyebrow">{{ locale.greeting }}</p>
          <h1>Alen Subasic</h1>
          <p class="hero-role">Software Engineer II at Principal Financial Group</p>
          <p class="hero-summary">
            {{ locale.aboutme }}
          </p>
          <div class="hero-metrics" aria-label="Snapshot">
            <article v-for="metric in metrics" :key="metric.label" class="metric-card">
              <span class="metric-card__value">{{ metric.value }}</span>
              <span class="metric-card__label">{{ metric.label }}</span>
            </article>
          </div>
          <div class="hero-actions">
            <button
              class="button button--primary"
              type="button"
              v-bind="tallyPopupAttrs"
            >
              Start a conversation
            </button>
            <a class="button button--secondary" href="https://github.com/subasically" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        </div>

        <div class="hero-portrait">
          <div class="portrait-card">
            <img src="../assets/images/alen-subasic.webp" class="portrait-image" alt="Portrait of Alen Subasic" />
          </div>
        </div>
      </section>

      <section id="about" class="content-grid fade-in fade-in--3" aria-label="Highlights">
        <article class="info-card">
          <p class="section-label">What I do</p>
          <h2>Data pipelines, Lambda automation, and backend infrastructure.</h2>
          <p>
            Design and build data transformation pipelines, AWS Lambda automation, and the backend infrastructure that
            supports them. Previously: a decade of full-stack web development across frontend frameworks, accessible
            UI, and cloud-backed systems.
          </p>
        </article>

        <article class="info-card">
          <p class="section-label">Current role</p>
          <h2>Backend and infrastructure-heavy by design.</h2>
          <p>
            My current work is focused on Python, AWS Lambda, automation, and data transformation systems. The
            problems are backend and infrastructure-heavy, which is a deliberate shift from a long frontend career and
            one I am enjoying.
          </p>
        </article>
      </section>

      <section id="focus" class="detail-grid fade-in fade-in--4">
        <article class="detail-card detail-card--wide">
          <p class="section-label">Current focus</p>
          <h2>Things I care about right now</h2>
          <ul class="detail-list">
            <li>Python-driven data pipelines and Lambda architecture</li>
            <li>Backend systems that are observable and maintainable</li>
            <li>Cloud infrastructure built for whoever inherits it</li>
            <li>Moving confidently from web roots into data and platform work</li>
            <li>Building Swift iOS apps and creative side projects outside of work</li>
          </ul>
        </article>

        <article class="detail-card">
          <p class="section-label">Background</p>
          <h2>Self-taught and still learning on purpose.</h2>
          <ul class="detail-list">
            <li>Self-taught software engineer with 12 years of professional experience</li>
            <li>AWS Cloud Practitioner certified in 2023</li>
            <li>Strong full-stack foundation with an intentional move into backend and data infrastructure</li>
          </ul>
        </article>

        <article id="contact" class="detail-card">
          <p class="section-label">Socials</p>
          <h2>Find me online.</h2>
          <div class="social-links">
            <a class="social-link" href="https://github.com/subasically" target="_blank" rel="noreferrer">
              <img src="../assets/images/github-mark.svg" alt="" />
              <span>GitHub</span>
            </a>
            <a class="social-link" href="https://www.linkedin.com/in/alensubasic" target="_blank" rel="noreferrer">
              <img src="../assets/images/linkedin.svg" alt="" />
              <span>LinkedIn</span>
            </a>
          </div>
        </article>
      </section>

      <section class="info-card fade-in fade-in--5">
        <p class="section-label">Outside work</p>
        <h2>Swift apps, a radio station, and hands-on projects.</h2>
        <p>
          Outside of work, I spend time building Swift iOS apps, running my own radio station, experimenting in my
          home lab, and staying close to the kinds of projects that keep engineering fun.
        </p>
      </section>

      <footer class="site-footer fade-in fade-in--5">
        <p>Built with Nuxt.</p>
        <p>&copy; {{ year }} Alen Subasic</p>
      </footer>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

useHead({
  title: "Alen Subasic",
  meta: [
    {
      name: "description",
      content: "Self-taught software engineer with 12 years of experience, focused on backend systems, Python automation, AWS Lambda, and data transformation pipelines.",
    },
  ],
  script: [
    {
      src: "https://tally.so/widgets/embed.js",
      async: true,
    },
  ],
});

useSeoMeta({
  ogTitle: "Alen Subasic",
  ogDescription: "Self-taught software engineer with 12 years of experience, focused on backend systems, Python automation, AWS Lambda, and data transformation pipelines.",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Alen Subasic",
  twitterDescription: "Backend systems, Python automation, AWS Lambda, and data transformation pipelines.",
});

type LocaleKey = "en-US" | "en-GB" | "de-DE" | "da-DK" | "sv-SE";

type LocaleContent = {
  greeting: string;
  aboutme: string;
};

const defaultLocale: LocaleKey = "en-US";
const browserLang = ref<LocaleKey>(defaultLocale);
const year = new Date().getFullYear();
const tallyPopupAttrs = {
  "data-tally-open": "Gx1Gle",
  "data-tally-layout": "modal",
  "data-tally-width": "560",
  "data-tally-overlay": "1",
  "data-tally-auto-close": "0",
};

const metrics = [
  { value: "Python", label: "automation" },
  { value: "AWS Lambda", label: "serverless systems" },
  { value: "Data", label: "engineering" },
];

const locales: Record<LocaleKey, LocaleContent> = {
  "en-US": {
    greeting: "Hello from the United States",
    aboutme:
      "Self-taught software engineer with 12 years of professional experience across the full stack. Started in frontend and web development, spent five years deepening that into AWS infrastructure and CI/CD at scale, and I am now focused on backend systems, Python automation, and data transformation pipelines. AWS Cloud Practitioner certified. I build things that are reliable, maintainable, and easy for the next person to understand.",
  },
  "en-GB": {
    greeting: "Hello from the United Kingdom",
    aboutme:
      "Self-taught software engineer with 12 years of professional experience across the full stack. Started in frontend and web development, spent five years deepening that into AWS infrastructure and CI/CD at scale, and I am now focused on backend systems, Python automation, and data transformation pipelines. AWS Cloud Practitioner certified. I build things that are reliable, maintainable, and easy for the next person to understand.",
  },
  "de-DE": {
    greeting: "Hallo aus Deutschland",
    aboutme:
      "Ich bin ein autodidaktischer Software Engineer mit 12 Jahren Berufserfahrung uber den gesamten Stack hinweg. Begonnen habe ich im Frontend und in der Webentwicklung, spater kamen AWS-Infrastruktur und CI/CD im grosseren Massstab dazu. Heute liegt mein Fokus auf Backend-Systemen, Python-Automatisierung und Daten-Transformationspipelines. AWS Cloud Practitioner zertifiziert. Ich baue Systeme, die verlasslich, wartbar und fur die nachste Person gut verstandlich sind.",
  },
  "da-DK": {
    greeting: "Hej fra Danmark",
    aboutme:
      "Jeg er selvlart software engineer med 12 ars professionel erfaring pa tvaers af hele stacken. Jeg startede i frontend og webudvikling, brugte fem ar pa at ga dybere i AWS-infrastruktur og CI/CD i stor skala, og er nu fokuseret pa backend-systemer, Python-automatisering og datatransformationspipelines. AWS Cloud Practitioner certificeret. Jeg kan lide at bygge systemer, der er stabile, vedligeholdelige og lette for den naeste person at forsta.",
  },
  "sv-SE": {
    greeting: "Hej fran Sverige",
    aboutme:
      "Jag ar en sjalvlard software engineer med 12 ars yrkeserfarenhet over hela stacken. Jag borjade inom frontend och webbutveckling, tillbringade fem ar med att fordjupa mig i AWS-infrastruktur och CI/CD i stor skala, och ar nu fokuserad pa backend-system, Python-automatisering och datatransformationspipelines. AWS Cloud Practitioner-certifierad. Jag gillar att bygga system som ar palitliga, underhallsbara och enkla for nasta person att forsta.",
  },
};

const locale = computed(() => locales[browserLang.value] ?? locales[defaultLocale]);

onMounted(() => {
  const lang = navigator.language.toLowerCase();

  if (lang.startsWith("de")) {
    browserLang.value = "de-DE";
    return;
  }

  if (lang.startsWith("da")) {
    browserLang.value = "da-DK";
    return;
  }

  if (lang.startsWith("sv")) {
    browserLang.value = "sv-SE";
    return;
  }

  if (lang === "en-gb" || lang.startsWith("en-gb")) {
    browserLang.value = "en-GB";
    return;
  }

  browserLang.value = "en-US";
});
</script>
