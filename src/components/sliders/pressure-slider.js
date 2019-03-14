import { withSliderData } from '../hoc-helpers';
import SliderElement from '../slider';

const sliderData = {
  min: 970,
  max: 1030,
  title: 'Pressure',
  measure: 'hPa'
}

export default withSliderData(SliderElement, sliderData);

