import Route from '@ember/routing/route';

export default class ScientistRoute extends Route {
  model() {
    return ['Marie Curie', 'Michael Jackson', 'Maya Angelou'];
  }
}
