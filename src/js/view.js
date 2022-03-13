class View {
  #coverSquares = document.querySelector(".cover-area");
  #failedAttempts = document.querySelector(".score-area__failed");
  #score = document.querySelector(".score-area__score");
  #data;

  addHandlerSquareClick(handler) {
    this.#coverSquares.addEventListener("click", function (e) {
      const square = e.target.closest(".cover-area__cover");
      if (!square) return;
      square.classList.add("hidden");

      setTimeout(function () {
        handler(square);
      }, 100);

      //   handler(square);
    });
  }

  updateStats(data) {
    this.#data = data;
    this.#score.textContent = this.#data.score;
    this.#failedAttempts.textContent = this.#data.failedAttempts;
  }

  reHide(marks) {
    marks.forEach((mark) =>
      document.querySelector(`[data-mark='${mark}']`).classList.remove("hidden")
    );
  }
}

export default new View();
