/* A import 'styles.scss'; */
import { Component } from './components';
import { Serie } from '../model/serie_type';
import './styles.scss';

export class Card extends Component {
  serie: Serie;
  constructor(selector: string, serie: Serie) {
    super(selector);
    this.serie = { ...serie };
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return `
    <li class="serie">
      <img class="serie__poster"
        src= ${this.serie.poster}
        alt="${this.serie.name} poster" />
      <h4 class="serie__title">${this.serie.name}</h4>
      <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5">&#9733</i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5">&#9733</i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5">&#9733</i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5">&#9733</i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5">&#9733</i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    </li>
      `;
  }
}
