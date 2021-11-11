class Elem {

    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    html(text) {
        this.element.innerHTML = text;
        return this;
    }

    attr(name, value) {
        this.element.setAttribute(name, value);
        return this;
    }

    append(text) {
        this.element.append(text);
        return this;
    }

    prepend(text) {
        this.element.prepend(text);
        return this;
    }

}