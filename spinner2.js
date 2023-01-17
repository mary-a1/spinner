const characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
const spinner = function(symbols) {
  let delay = 100;
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write(symbols[i]);
    }, delay);
    delay += 200;
  }
};
spinner(characters);


