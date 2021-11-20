const covid19Urlprefix = "https://api.covid19api.com";
const joinSuffix = (name) => covid19Urlprefix + name;

const covid19Url = {
  summary: joinSuffix("/summary"),
  worldAllTimeCases: joinSuffix("/world"),
  ondayAllCase: joinSuffix("/dayone/country"),
};

const covid19Api = {
  getSummary: async () => await fetchRequest(covid19Url.summary),
  getWorldAllTimeCases: async () =>
    await fetchRequest(covid19Url.worldAllTimeCases),
  getCountryOneDayCases: async (country) =>
    await fetchRequest(`${covid19Url.ondayAllCase}/${country}`),
};
