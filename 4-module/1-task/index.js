
function makeFriendsList(friends) {

  let ul = document.createElement('UL');
  document.body.appendChild(ul);
  for (let user of friends) {
    let li = `<li>${user.firstName} ${user.lastName}</li>`;
    document.querySelector('UL').insertAdjacentHTML('beforeEnd', li);
    }
    return ul;
  }