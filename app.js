const usersList = document.querySelector('.users__list');
const getUsersBtn = document.querySelector('.users__get-users');



const state = {
   users: [],
}



const createUser = (user) => 
   
      `<div class="card card__user " >
        
         <img src="${user.picture.large}" class="card-user__ava" alt="...">
          <h1 class="wrapper__name">${user.name.first} ${user.name.last}</h1>
          <div class="wrapper__gender">Пол:  ${user.gender}</div>
          <div class="wrapper__location">Город:  ${user.location.city}</div>
          <div class="wrapper__email">Почта:  ${user.email}</div>
          <div class="wrapper__phone">Телефон:  ${user.phone}</div>
          <div class="wrapper__age">Возраст:  ${user.dob.age}</div>
        
      </div>`


const fillUsersList = (users) => {
   
   // if (usersList.children.length) {
   //    clearContainer(usersList);
   // }
   
   usersList.innerHTML = "";

   if (users.length) {
      
      users.forEach((user) => usersList.innerHTML += createUser(user));
   }
}

getUsersBtn.addEventListener('click', async () => {
   showLoader();
   await getUsersRequest();
   fillUsersList(state.users[0].results);
   // clearUserList(usersList)
   console.log(state.users[0].results);
   checkListUsers(state.users[0].results)
   
   
   

})
// function clearUserList(list){
//    let child = list.lastElementChild;
//    while (child) {
//      list.removeChild(child);
//      child = list.lastElementChild;
//    }
// }

function getUsersRequest() {
   return fetch('https://randomuser.me/api?results=10')
   .then((res) => res.json())
   .then((users) => state.users = state.users.concat(users))
   
}

//  Show loader function
function showLoader() {
   document.querySelector('.users').insertAdjacentHTML(
     'afterbegin',
     `<button class="btn__spinner" type="button" disabled>
         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
             Загрузка...
       </button>
   `,
   );
 }


 
 // Remove loader function
 function removePreloader() {
   const loader = document.querySelector('.btn__spinner');
   if (loader) {
     loader.remove();
   }
 }
 
 // show the loader until array of users is empty
 function checkListUsers(arr){
   if (arr.length>0){
      removePreloader();
   }

 }

// ?_limit=10