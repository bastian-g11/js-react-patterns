import '../analytics.js';
import Observable from '../observable.js';

Observable.notify('✨ New data ✨');

setTimeout(() => {
  Observable.notify('✨ New data after timeout ✨');
}, 1000);
