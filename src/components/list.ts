import { Component } from './components';
/* A import { Serie } from '../model/serie_type'; */
import './styles.scss';
import { Card } from './card';
import { repo } from '../data/series';

export class List extends Component {
  constructor(selector: string) {
    super(selector);

    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();

    const watchedSeries = repo.filter((item) => item.watched === false);
    console.log(watchedSeries);
    watchedSeries.map((item) => new Card('ul.series-list', item));
  }

  createTemplate() {
    return `
     <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>
        <p class="info">You have 4 series pending to watch</p>
        <ul class="series-list"></ul>
      </section>
    `;
  }
}
