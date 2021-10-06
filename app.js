async function getUsers() {
  // Code here
  try {
    const url = await fetch("https://randomuser.me/api/?results=2", {
      method: "GET",
    });
    const json = await url.json();
    // const data = await json;
    return json;
  } catch (error) {
    console.error(error);
  }
}

// getUsers();

async function renderUsers() {
  // Code here
  let users = await getUsers();
  console.log(users);
  let dataUser = users.results;
  let html = "";
  Array.from(dataUser).forEach((user) => {
    let htmlRender = `<div class="user">
    <img src="${user.picture.medium}">
    <h2>${user.name.first} ${user.name.first}</h2>
    <div class="email>
    <a href="email:${user.email}">${user.email}</a>
    </div>
  </div>`;
    html += htmlRender;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();
