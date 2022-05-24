function highlight(table) {
  // ваш код...
  
  const available = table.querySelectorAll('[data-available="true"]');
  for (const i of available) {
     i.parentElement.classList.add("available")
}

  const unavailable = table.querySelectorAll('[data-available="false"]');
  for (const i of unavailable) {
    i.parentElement.classList.add("unavailable")
}

  const hiddens = table.querySelectorAll('tr > td:last-child');
  for (const i of hiddens) {
    if (!i.hasAttribute('data-available')) {
      i.parentElement.setAttribute("hidden", true)
    }
  }

  const gender = table.querySelectorAll('tr');
  for (const i of gender) {
    if (i.children[2].innerText == 'm') {
      i.classList.add("male")
    } else {
    i.classList.add("female")
    }
  }

  const age = table.querySelectorAll('tr');
  for (const i of age) {
    if (+i.children[1].innerText < 18) {
      i.setAttribute("style", "text-decoration: line-through");
      console.log('hh')
    }
  }

 return table;
}
