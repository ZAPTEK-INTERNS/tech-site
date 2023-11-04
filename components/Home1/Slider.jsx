import {TestimonialCard} from '../links'
import SliderCss from '../../styles/Slider.module.css';
import { TestimonialDB } from './index';

const Slider = () => {
  return (
    <div className="overflow-hidden relative w-full z-20 lg:h-[100vh]">
      <div className={`space-x-4 flex items-center lg:gap-4 ${SliderCss.slideOnMobile}`}>
        <div className={`flex fle-row lg:flex-col gap-4 ${SliderCss.slideTop}`}>
          <div >
            <TestimonialCard message="I'm thrilled with Tech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth." name="Sophia Jackson" />
          </div>
          <div>
          <TestimonialCard message="I'm thrilled with Tech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth." name="Sophia Jackson" />
          </div>
          <div >
          <TestimonialCard message="I'm thrilled with Tech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth." name="Sophia Jackson" />
          </div>
        </div>

        <div className={`flex flex-row lg:flex-col gap-4 ${SliderCss.slidebottom} `}>
          <div >
          <TestimonialCard message="I'm thrilled with Tech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth." name="Sophia Jackson" />
          </div>
          <div >
          <TestimonialCard message="I'm thrilled with Tech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth." name="Sophia Jackson" />
          </div>
          <div >
          <TestimonialCard message="I'm thrilled with Tech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth." name="Sophia Jackson" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Slider