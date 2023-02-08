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

    console.log(data.profile.message);

    if (data.profile.message != 'Not Found' || data.profile.messagete.includes('limit')) {
    // Construct Profile UI object
    console.log('this gets run');
    const userUI = new UI(data.profile.login, data.profile.bio, data.profile.url, data.profile.name);
    // Create profile UI
    userUI.userProfileDisplay();
    // loop through array of repos
    data.repo.forEach(repo => {
    // Construct repo UI Object
    const repoUI = new RepoUI(repo.owner.login, repo.name, repo.description, repo.updated_at, repo.created_at); 
    // Create repo UI element
    repoUI.RepoDisplay(); 
    })}else{
        const errorMessage = new UI; 
        errorMessage.userNotFound(); 
    };
    })
    .catch((error) => {
        console.log(error);
    });
} 
})
