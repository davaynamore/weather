import { withSliderData } from '../hoc-helpers';
import SliderElement from '../slider';

const sliderData = {
  min: 10,
  max: 35,
  title: 'Temperature',
  measure: '℃'
}

export default withSliderData(SliderElement, sliderData);