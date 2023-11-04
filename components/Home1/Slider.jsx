import {TestimonialCard} from '../links'
import SliderCss from '../../styles/Slider.module.css';
import { TestimonialDB } from '../home4/slider/testimonialsDB';

const Slider = () => {
  return (
    <div className="overflow-hidden relative w-full">
        <div className={SliderCss.slideTrack + " space-x-10"}>
            {
              TestimonialDB.map((TDB, index) => (
                 <div className={`grid mx-10 ${SliderCss.slide} place-content-center`} key={index}>
                    <TestimonialCard message={TDB.message} name={TDB.name} />
                 </div>
                ))
            }
        </div>
    </div>
  )
}

export default Slider