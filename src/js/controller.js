import * as model from "./model.js";
import view from "./view.js";
// import "core-js/stable";

const controlCheckSquare = function (clickedSquare) {
  // Check if already clicked or disabled
  if (
    model.state.currentSelection === clickedSquare.dataset.mark ||
    model.state.disabledSquares.includes(clickedSquare.dataset.mark)
  )
    return;
  // Check if this is click #1 and update state accordingly
  if (model.state.currentSelection === "") {
    model.state.currentSelection = clickedSquare.dataset.mark;
  } else {
    // Click #2
    const current = clickedSquare.dataset.mark;

    // Compare click #1 and click #2 - MATCH
    if (current[0] === model.state.currentSelection[0]) {
      // add both square marks to disabledSquares
      model.state.disabledSquares.push(current, model.state.currentSelection);

      // Reset state temp properties currentSelection and firstElement and update score
      model.score(true);
      // update UI with the score
      view.updateStats(model.state);

      if (model.state.disabledSquares.length === 8) {
        alert("YOU WON, CONGRATZ!");
        location.reload();
      }
      // Compare click #1 and click #2 - NO MATCH
    } else {
      alert("Pieces dont match, please try again!");

      // Re-hide opened squares
      view.reHide([current, model.state.currentSelection]);
      // Reset state temp properties currentSelection and firstElement and update failed attempts
      model.score(false);
      // Update UI with the failed attempts
      view.updateStats(model.state);
    }
  }
};

const init = function () {
  view.addHandlerSquareClick(controlCheckSquare);
};
init();
