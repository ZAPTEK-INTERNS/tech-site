import {TestimonialCard} from '../links'
import SliderCss from '../../styles/Slider.module.css';
import { TestimonialDB } from '../home4/slider/testimonialsDB';

const Slider = () => {
  return (
    <div className="overflow-hidden relative w-full ">
        <div className={`${SliderCss.slideOnMobile} ${SliderCss.slideTop} space-x-10 lg:grid lg:grid-cols-2 lg:gap-8`}>
            {
              TestimonialDB.map((TDB, index) => (
                 <div className={`grid w-full place-content-center lg:col-span-1`} key={index}>
                    <TestimonialCard message={TDB.message} name={TDB.name} />
                 </div>
                ))
            }
        </div>
    </div>
  )
}

export default Slider