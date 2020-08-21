import './style/global.scss';

import PanoTest from './component/PanoTest';

const onDOMReady = () => {
  console.log('onDOMReady');
  document.body.classList.remove('loading');
  document.documentElement.className = document.documentElement.className.replace(
    'no-js',
    'js'
  );
  console.log('dom ready');
};

if (
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
) {
  onDOMReady();
} else {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      onDOMReady();
      document.removeEventListener('DOMContentLoaded', onDOMReady, false);
    },
    false
  );
}

if (module.hot) {
  module.hot.accept();
}
