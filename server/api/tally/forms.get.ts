import { fetchTallyForms } from "../../utils/tally";

export default defineEventHandler(async () => {
  const response = await fetchTallyForms();

  return {
    count: response.items.length,
    forms: response.items.map((form) => ({
      id: form.id,
      name: form.name,
      status: form.status,
      updatedAt: form.updatedAt,
    })),
  };
});
