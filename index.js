function goodshadows() {
  let images = document.querySelectorAll(".goodshadows");

  if (options.shadowType === "hard") {
    options.shadowType === "0px";
  } else {
    options.shadowType === "15px";
  }

  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0, 0, 0, 0.12)`;

    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.goodshadows = goodshadows;
