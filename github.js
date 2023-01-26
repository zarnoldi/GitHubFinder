
export class Github {
    constructor(){{
        this.client_id = '22a2d02974fa483d311e'; 
        this.client_secret = '9a74f287003696257845863ab407b415c454e0d3'; 
    }}

    async getUsers(user){
        // Gets Users 
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 
        const profileData = await profileResponse.json(); 
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`); 
        const repoData = await repoResponse.json();
        return{
             profile: profileData,
             repo:repoData
              }
        }
};