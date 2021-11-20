class Select {
  constructor({ slector, options }) {
    this.elm = document.querySelector(slector);
    if (!this.elm) {
      return;
    }
    this.options = options;
  }
  createSelectDom() {
    !this.elm.matches(`.select`) && this.elm.classList.add("select");
    this.elm.innerHTML = `
        <ul class="select-options">
          ${this.createDomOptions()}
        </ul>`;
    this.elm.querySelector(".select-options").style.height = `${
      this.elm.querySelector(".select-option").offsetHeight *
      this.options.length
    }px`;
  }
  createDomOptions() {
    return this.options
      .map(
        (item) => `
       <li class="select-option" value="${item.key}">
         ${item.value}
       </li>`
      )
      .join("");
  }
  updateOptions(options) {
    this.options = options;
    this.elm.querySelector(".select-options").innerHTML =
      this.createDomOptions();
  }
}
