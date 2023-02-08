// Create UI class for building different UI elements 
export class UI {
    constructor(login, bio, url, name){
        this.login = login;
        this.bio = bio;
        this.url = url;
        this.name = name;
    }

    // Method for dispaying Profile info
    userProfileDisplay(){
        let userProfileCard = document.createElement('div'); 
        userProfileCard.className = 'card bg-secondary border-info text-white mb-2'; 
        userProfileCard.innerHTML = `
              <div class="card-header"></div>
              <div class="card-body" "> 
              <h3 class="card-title">${this.login}</h3>
              <div class="mb-2">
              <p>${this.bio}</p>
              <p>${this.name}</p>
              <a href="http://${this.url}" target="_blank class="card-link">${this.url}</a>
              </div>
              <div class="accordion" id="${this.login}"></div>
              </div>
        `
        document.getElementById('profile').appendChild(userProfileCard);
    }

    userNotFound(){
        let userNotFoundAlert = document.createElement('div'); 
        userNotFoundAlert.className = 'alert alert-dismissible alert-danger text-white mb-2'; 
        userNotFoundAlert.innerHTML = `
        <strong>No user was found </strong>
        `
        document.getElementById('profile').appendChild(userNotFoundAlert);
    }

}

export class RepoUI {
    constructor(repoOwner, repoName, repoDescription, repoLastUpdated, repoCreated){
        this.repoOwner = repoOwner; 
        this.repoName = repoName; 
        this.repoDescription = repoDescription; 
        this.repoLastUpdated = new Date(repoLastUpdated); 
        this.repoCreated = new Date(repoCreated); 
    }
    RepoDisplay(){
        let userRepoCard = document.createElement('div'); 
        userRepoCard.className = 'accordion-item p-3'; 
        userRepoCard.innerHTML = `
            <h2 class="accordion-header" id="heading${this.repoName}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.repoName}" aria-expanded="false" aria-controls="collapse${this.repoName}">
                      <h3> ${this.repoName}</h3>
            </button>
            </h2>
            <div id="collapse${this.repoName}" class="class="accordion-collapse collapse" aria-labelledby="heading${this.repoName}" data-bs-parent="#${this.repoOwner}">
            <div class="accordion-body">
            <h5 class="text-white">${this.repoDescription}</h5>
            <div>Date Created: ${this.repoCreated.toISOString().substring(0, 10)}</div>
            <div>Last Updated: ${this.repoLastUpdated.toISOString().substring(0, 10)}</div>
            </div>
            </div>
        `
        document.getElementById(this.repoOwner).appendChild(userRepoCard);
    }
}