document.addEventListener("DOMContentLoaded", () =>{
    const userList = document.getElementById("user-list");

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
            json.forEach((post) => {
                const listItem = document.createElement("li");
                    listItem.textContent = post.url
                    userList.appendChild(listItem);

                //console.log(post.id);
            })
      })



      .catch((error) => console.log(error));
    
})