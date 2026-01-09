var element = document.querySelector('main');
//Arrow function to generate the transition. And requestAnimationFrame is a function that can
//to optimize animations by synchronizing them with the display's refresh rate.
requestAnimationFrame(() => {
  // 3. Visible state is activated.
  element.classList.add('is-visible');
});