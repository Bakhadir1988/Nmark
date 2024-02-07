let btn = document.querySelector(".btn");

function ripple(e) {
  let posX = this.offsetLeft;
  let posY = this.offsetTop;
  let buttonWidth = this.offsetWidth;
  let buttonHeight = this.offsetHeight;

  let ripple = document.createElement("span");

  this.appendChild(ripple);

  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  ripple.style.width = `${buttonWidth}px`;
  ripple.style.height = `${buttonHeight}px`;
  ripple.style.top = `${y}px`;
  ripple.style.left = `${x}px`;

  ripple.classList.add("rippleAnimation");

  setTimeout(() => {
    this.removeChild(ripple);
  }, 1000);
}

btn.addEventListener("click", ripple);
