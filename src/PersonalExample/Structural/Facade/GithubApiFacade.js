class GithubUser {
    constructor(username) {
        this.username = username;
    }
}


class GithubRequest {
    constructor(user) {
        this.user = user;
    }

    async getResponse() {
        try {
            const respose = await fetch(`https://api.github.com/users/${this.user.username}`)
            return respose.json()
        } catch (error) {
            console.error(error)
        }
    }

}


export class GithubApiFacade {
    constructor(username) {
        this.user = new GithubUser(username);
        this.request = new GithubRequest(this.user);
    }

    async callAPI() {
        const response = await this.request.getResponse();
        return response;
    }

}