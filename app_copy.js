import { UI, RepoUI } from "./ui.js";
import { Github } from "./github.js";

// Create an instance of the Github class 
const github = new Github; 


// Search Input Element
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (e)=>{
// Clear UI
document.getElementById('profile').innerHTML = ''; 
// Get search text
   const searchText = e.target.value; 
// Check if blank
if (searchText != null) {
    // Make http call to github to get Users
    github.getUsers(searchText)
    .then( (data) => {
    // Construct UI element
    const userUI = new UI(data.profile.login, data.profile.bio, data.profile.url, data.profile.name);
    userUI.userProfileDisplay();

    return data.repo;

    }).then((repos)=>{
        
        repos.forEach(repo => {
        const repoUI = new RepoUI(repo.owner.login, repo.name, repo.description, repo.updated_at, repo.created_at); 
        repoUI.RepoDisplay(); 
        });
    })
    .catch(error => console.log(error));
} 
})

// Add search text
// Get search text 
// Add search text to API call
// Make API call 
// return results data
// pass results to UI class
// use results data to generate HTML elements 
