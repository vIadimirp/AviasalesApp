export const apiURL = "https://aviasales-test-api.kata.academy";
export const searchURL = `${apiURL}/search`;
export const ticketsURL = searchId => `${apiURL}/tickets?searchId=${searchId}`;
