const usersList = document.querySelector('.users__list');
const getUsersBtn = document.querySelector('.users__get-users');



const state = {
   users: [],
}



const createUser = (user) => 
      
      `<div class="card card__user " style="width: 500px;">
        <div class="user__wrapper">
         <img src="${user.picture.large}" class="card-user__ava" alt="...">
          <h1 class="wrapper__name">${user.name.first} ${user.name.last}</h1>
          <div class="wrapper__gender">Пол:  ${user.gender}</div>
          <div class="wrapper__location">Город:  ${user.location.city}</div>
          <div class="wrapper__email">Почта:  ${user.email}</div>
          <div class="wrapper__phone">Телефон:  ${user.phone}</div>
          <div class="wrapper__age">Возраст:  ${user.dob.age}</div>
        </div>
      </div>`


const fillUsersList = (users) => {
   usersList.innerHTML = "";

   if (users.length) {
      users.forEach((user) => usersList.innerHTML += createUser(user));
   }
}

getUsersBtn.addEventListener('click', async () => {
   await getUsersRequest();
   fillUsersList(state.users[0].results);
   console.log(state.users[0].results);
   

})
function clearUserList(list){
   list.innerHTML = '';
}

function getUsersRequest() {
   return fetch('https://randomuser.me/api?results=10')
   .then((res) => res.json())
   .then((users) => state.users = state.users.concat(users))
   
}



// ?_limit=10