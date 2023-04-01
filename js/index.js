// Fetch  function for all user objects for provided user input:

document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector('#github-form').addEventListener('submit',hundleSubmit);
})


function hundleSubmit(event){
    event.preventDefault()
    fetchUsers(event.target.search.value);

}
//fuction to fetch users from the github ApI
function fetchUsers(user) {
    fetch(`https://api.github.com/search/users?q=${user}`, {
        Accept: 'application/vnd.github.v3+json'
    })
    .then(resp => resp.json())
    .then(json => json.items.forEach(user => createUserList(user)))
}

