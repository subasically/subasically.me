<template>
  <NuxtLayout>
    <main class="privacy-page">
      <nav class="top-bar" aria-label="Privacy">
        <NuxtLink class="brand-mark" to="/">AS</NuxtLink>
        <div class="top-bar__links">
          <NuxtLink to="/">Home</NuxtLink>
        </div>
      </nav>

      <article class="privacy-card">
        <p class="section-label">SubasicallyFM</p>
        <h1>Privacy Policy</h1>
        <p class="privacy-updated">Last updated: May 18, 2026</p>

        <section>
          <h2>Overview</h2>
          <p>
            SubasicallyFM is a simple public radio streaming app. The app is designed to play audio streams and, if you
            choose to sign in, save the stream URLs you add so they can be available across your devices.
          </p>
          <p>
            SubasicallyFM does not sell your personal information, show ads, use advertising identifiers, or collect
            personal information for marketing.
          </p>
        </section>

        <section>
          <h2>Information You Provide</h2>
          <p>
            You can use the app to paste or add radio stream URLs. If you choose to save multiple streams, those URLs
            may be stored so the app can show and play them for you later.
          </p>
          <p>
            If you choose to use Sign in with Apple, Apple may provide your name and email address depending on your
            Apple ID settings and the choices you make during sign-in. This information is used only to identify your
            account and support saved streams.
          </p>
        </section>

        <section>
          <h2>Information We Do Not Collect</h2>
          <p>SubasicallyFM does not collect browsing history, contacts, photos, precise location, or payment details.</p>
          <p>
            The app does not use your information for tracking across apps or websites, and it does not share your
            information with data brokers or advertising networks.
          </p>
        </section>

        <section>
          <h2>Streaming Providers</h2>
          <p>
            When you play a public radio stream or a stream URL you add, your device connects to that stream provider.
            The provider of that stream may receive standard network information, such as your IP address, as part of
            delivering audio. Those services are not operated by SubasicallyFM.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            Saved stream URLs and account information are kept only as long as needed to provide the saved-stream
            feature. You can remove saved streams in the app when you no longer want them stored.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            SubasicallyFM is not directed to children under 13 and does not knowingly collect personal information from
            children.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            This policy may be updated from time to time. Any changes will be posted on this page with a new updated
            date.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, contact Alen Subasic through the contact form on
            <NuxtLink to="/">subasically.me</NuxtLink>.
          </p>
        </section>
      </article>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Privacy Policy | SubasicallyFM",
  meta: [
    {
      name: "description",
      content: "Privacy policy for SubasicallyFM, a public radio streaming app.",
    },
  ],
});

useSeoMeta({
  ogTitle: "Privacy Policy | SubasicallyFM",
  ogDescription: "Privacy policy for SubasicallyFM, a public radio streaming app.",
  ogType: "website",
  twitterCard: "summary",
  twitterTitle: "Privacy Policy | SubasicallyFM",
  twitterDescription: "Privacy policy for SubasicallyFM, a public radio streaming app.",
});
</script>
