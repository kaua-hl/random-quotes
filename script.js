const content = document.querySelector('[data-content]');
const author = document.querySelector('[data-author]');
const next = document.querySelector('[data-next]');

class Card {
    constructor(content, author, next) {
        this.content = content;
        this.author = author;
        this.next = next;

        this.events = this.events.bind(this);
        this.setContent = this.setContent.bind(this);

    }
    async getData() {
        const api = await fetch("https://api.quotable.io/random");
        const json = await api.json();
        return json;
    }
    async setContent() {
        const api = await this.getData();

        content.innerText = api.content
        author.innerText = api.author
    }
    events() {
        next.addEventListener("click", this.setContent);
    }
    init() {
        this.setContent();
        this.events();
    }
}

const card = new Card(content, author, next);
card.init();
