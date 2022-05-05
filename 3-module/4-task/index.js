function showSalary(users, age) {
  // ваш код...
  let someUsers = users.filter(item => item.age <= age);
  let str = '';
  for (let i = 0; i < someUsers.length; i++) {
    str += `${someUsers[i].name}, ${someUsers[i].balance}\n`;
  }
  return str.substring(0, str.length - 1);
}