export class Article {
    votes: number;
    title: string;
    link: string;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.votes = votes || 0;
        this.link = link;
    }
    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }
}
