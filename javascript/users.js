// const searchBar = document.querySelector(".users .search input");
// const searchBtn = document.querySelector(".users .search button");
// const usersList = document.querySelector(".users .users-list");

// searchBtn.onclick = () => {
//     searchBar.classList.toggle("active");
//     searchBar.focus();
//     searchBtn.classList.toggle("active");
//     searchBar.value = "";
// }

// searchBar.onkeyup = () => {
//     let searchTerm = searchBar.value;
//     if(searchTerm != ""){
//         searchBar.classList.add("active");
//     } else{
//         searchBar.classList.remove("active");
//     }
//     let xhr = new XMLHttpRequest(); //creating XML object
//     const result = xhr.open("POST", "../php/search.php", true);

//     console.log(result)

//     xhr.onreadystatechange = function() { // Call a function when the state changes.
//         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//             // Request finished. Do processing here.
//         }
//     }

//     xhr.onload = function () {
//         console.log(this.responseText);
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             console.log('HERE');
//             if(xhr.status === 200) {
//                 let data = xhr.response;
//                 usersList.innerHTML = data;
//             }
//         }

//         if (xhr.status == 200) {
//             resolve(xhr.response);
//         } else {
//             reject(Error(xhr.statusText));
//         }
//     }
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.send("searchTerm=" + searchTerm);
// }

// // setInterval(() => {
// //     let xhr = new XMLHttpRequest(); //creating XML object 
// //     xhr.open("GET", "php/users.php", true);
// //     xhr.onload = () => {
// //         if(xhr.readyState === XMLHttpRequest.DONE) {
// //             if(xhr.status === 200) {
// //                 let data = xhr.response;
// //                 if(!searchBar.classList.contains("active")){ //if active active not contained in search bar then add this data
// //                     usersList.innerHTML = data;
// //                 }
// //             }
// //         }
// //     }
// //     xhr.send();
// // }, 500); // this function runs after 500ms

const searchBar = document.querySelector(".users .search input");
const searchBtn = document.querySelector(".users .search button");
const usersList = document.querySelector(".users .users-list");

searchBtn.onclick = () => {
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
    searchBar.value = "";
}

searchBar.onkeyup = () => {
    let searchTerm = searchBar.value;
    if(searchTerm != ""){
        searchBar.classList.add("active");
    } else{
        searchBar.classList.remove("active");
    }
    let xhr = new XMLHttpRequest(); //creating XML object 
    xhr.open("POST", "php/search.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200) {
                let data = xhr.response;
                usersList.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
}

setInterval(() => {
    let xhr = new XMLHttpRequest(); //creating XML object 
    xhr.open("GET", "php/users.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                let data = xhr.response;
                if(!searchBar.classList.contains("active")){ //if active active not contained in search bar then add this data
                    usersList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
}, 500); // this function runs after 500ms