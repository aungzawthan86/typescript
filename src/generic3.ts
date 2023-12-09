class Box<T> {
  content: T;
  constructor(initailContent: T) {
    this.content = initailContent;
  }
  getContent(): T {
    return this.content;
  }
  setContent(newContent: T): void {
    this.content = newContent;
  }
}
const strBox = new Box<string>("Hello azt");
console.log(strBox.getContent());

strBox.setContent("new Content");
console.log(strBox.getContent());
