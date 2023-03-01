export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
  const normalizedFilter = state.filter.toLowerCase();
  const filteredContacts =
    state.filter !== ''
      ? state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
      : state.contacts;
  return filteredContacts;
};
