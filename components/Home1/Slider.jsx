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
          <TestimonialCard message="We were blown away by Tech's expertise! Their commitment to delivering a customized software solution tailored to our needs has had a remarkable impact on our operations, leading to increased efficiency and profitability." name="William Harris" />
          </div>
          <div >
          <TestimonialCard message="Tech has been a true partner! Their thorough understanding of our business challenges and their ability to create a custom software solution has transformed our operations, making us more agile and competitive." name="Mia Lee" />
          </div>
        </div>

        <div className={`flex flex-row lg:flex-col gap-4 ${SliderCss.slidebottom} `}>
          <div >
          <TestimonialCard message="I couldn't be happier with Tech's services! Their team's dedication to creating a personalized software solution has made a significant difference in our day-to-day operations, driving efficiency and growth" name="Ava Brown" />
          </div>
          <div >
          <TestimonialCard message="Tech's expertise is unmatched! Their commitment to delivering a tailor-made software solution has had a profound impact on our organization, enhancing our capabilities and helping us achieve our goals." name="Daniel Rodriguez" />
          </div>
          <div >
          <TestimonialCard message="Tech has been a true partner! Their thorough understanding of our business challenges and their ability to create a custom software solution has transformed our operations, making us more agile and competitive." name="Nath Lee" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Slider