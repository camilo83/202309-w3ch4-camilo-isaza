import { Component } from './components';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return ` 
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    `;
  }
}
