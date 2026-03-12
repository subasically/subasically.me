type TallyFormSummary = {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type TallyFormsResponse = {
  items: TallyFormSummary[];
};

const tallyApiBaseUrl = "https://api.tally.so";

const getTallyApiKey = () => {
  const { tallyApiKey } = useRuntimeConfig();

  if (!tallyApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "TALLY_API_KEY is not configured",
    });
  }

  return tallyApiKey;
};

export const fetchTallyForms = async () => {
  const tallyApiKey = getTallyApiKey();

  return await $fetch<TallyFormsResponse>(`${tallyApiBaseUrl}/forms`, {
    headers: {
      Authorization: `Bearer ${tallyApiKey}`,
    },
  });
};
