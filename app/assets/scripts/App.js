import '../styles/styles.css'
import 'lazysizes'
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.features__item'));

if (module.hot) {
  module.hot.accept();
}