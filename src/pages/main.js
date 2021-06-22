import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../style', true, /\.scss$/));
importAll(require.context('../blocks', true, /\.scss$/));
importAll(require.context('../pages', true, /\.scss$/));
