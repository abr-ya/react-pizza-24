export const loadState = (key: string) => {
  try {
    const jsonState = localStorage.getItem(key);
    if (!jsonState) return undefined;

    return JSON.parse(jsonState);
  } catch (e) {
    console.error(e);

    return undefined;
  }
};

export const saveState = (state: unknown, key: string) => {
  localStorage.setItem(key, JSON.stringify(state));
};
