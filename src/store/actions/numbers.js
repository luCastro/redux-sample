//Action Creator
export function updatedMin(newValue) {
  return {
    type: "UPDATED_MIN_NUMBER",
    payload: newValue,
  };
}

export function updatedMax(newValue) {
  return {
    type: "UPDATED_MAX_NUMBER",
    payload: newValue,
  };
}
