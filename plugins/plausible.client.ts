export default defineNuxtPlugin(() => {
  const {
    public: { plausibleScriptSrc, plausibleDomain, plausibleApiHost },
  } = useRuntimeConfig();

  if (import.meta.dev) {
    return;
  }

  if (plausibleScriptSrc) {
    useHead({
      script: [
        {
          async: true,
          src: plausibleScriptSrc,
        },
        {
          innerHTML:
            "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()",
        },
      ],
    });

    return;
  }

  if (!plausibleDomain) {
    return;
  }

  useHead({
    script: [
      {
        defer: true,
        "data-domain": plausibleDomain,
        src: `${plausibleApiHost.replace(/\/$/, "")}/js/script.js`,
      },
    ],
  });
});
