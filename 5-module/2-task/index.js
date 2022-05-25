function toggleText() {
  // ваш код...
  document.querySelector('button').onclick = function() {
    document.querySelector('div').toggleAttribute("hidden");
  };
}
