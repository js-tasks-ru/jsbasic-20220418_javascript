/*
function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  document.body.appendChild(ul);
  for (let user of friends) {
    let li = `<li>${user.firstName} ${user.lastName}</li>`;
    document.querySelector('UL').insertAdjacentHTML('beforeEnd', li);
    }
    return ul;
  }
  */


  function makeFriendsList(friends) {
    // ваш код...
    const ul = document.createElement('ul');
  
    ul.innerHTML = friends.map(item => `
        <li>${item.firstName} ${item.lastName}</li>
    `).join('');
  
    return ul;
  }