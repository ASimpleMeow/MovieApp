class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.reviews = [];
        this.users = [
            {id:1, username: "test1", password: "test1"},
        ]
    }

    add(movie) {
        this.favoriteMovies.push(movie);
        console.log(this.favoriteMovies)
    }

    getAll() {
        return this.favoriteMovies;
    }

    addReview(review) {
        this.reviews.push(review)
    }

    getUser(username, password) {
        return this.users.find(user => user.username === username && user.password === password);
    }
}

export default new StubAPI();