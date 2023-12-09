"use strict";
class Box {
    constructor(initailContent) {
        this.content = initailContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const strBox = new Box("Hello azt");
console.log(strBox.getContent());
strBox.setContent("new Content");
console.log(strBox.getContent());
