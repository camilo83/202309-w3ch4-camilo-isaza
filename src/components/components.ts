export abstract class Component {
  template!: string;
  element!: Element;
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public selector: string) {}

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) return;
    element.insertAdjacentHTML(position, this.template);
    this.element = element.lastElementChild!;
  }

  clear() {
    this.element.outerHTML = '';
  }
}
