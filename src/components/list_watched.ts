import { Component } from './components';
/* A import { Serie } from '../model/serie_type'; */
import './styles.scss';
import { Card } from './card';
import { repo } from '../data/series';

export class ListWatched extends Component {
  constructor(selector: string) {
    super(selector);

    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    repo.map((item) => new Card('ul.series-list--watched', item));
  }

  createTemplate() {
    return `
      <section class="series-watched">
        <h3 class="subsection-title">Watched series</h3>
        <p class="info">You have watched 4 series</p>
        <ul class="series-list series-list--watched"></ul>
      </section>
    `;
  }
}
