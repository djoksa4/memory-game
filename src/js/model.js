export const state = {
  score: 0,
  failedAttempts: 0,
  currentSelection: "",
  firstElement: "",
  disabledSquares: [],
};

export const score = function (bool) {
  state.currentSelection = "";
  state.firstElement = "";
  bool ? state.score++ : state.failedAttempts++;
};
