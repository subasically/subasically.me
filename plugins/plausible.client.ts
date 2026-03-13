export default defineNuxtPlugin(() => {
  const {
    public: { plausibleScriptSrc, plausibleDomain, plausibleApiHost },
  } = useRuntimeConfig();

  if (import.meta.dev) {
    return;
  }

  const scriptSrc = plausibleScriptSrc || (plausibleDomain
    ? `${plausibleApiHost.replace(/\/$/, "")}/js/script.js`
    : '');

  if (!scriptSrc) {
    return;
  }

  useHead({
    script: [
      {
        innerHTML:
          "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()",
      },
      {
        defer: true,
        ...(plausibleDomain ? { "data-domain": plausibleDomain } : {}),
        src: scriptSrc,
      }
    ],
  });
});
