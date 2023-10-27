import { Header } from './components/header';
import { List } from './components/list';

function main() {
  console.log('Loaded main');

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  const components = [new Header('#app'), new List('#app')];

  console.log(components);
}

main();
