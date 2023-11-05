import SideSwitch from "./SideSwitch";

import cup from '../../public/images/cup.webp'
import gear from '../../public/images/gears.webp'
import message from '../../public/images/message.webp'

const dataBetter = [
    {
      id: "1",
      image: cup,
      title: "Experience excellence with our expert team",
      body: "We take pride in our exceptional team of experts who bring a wealth of experience to every project. With years of industry knowledge and a passion for innovation, our team is dedicated to delivering top-notch solutions that exceed your expectations."
    },
    {
      id: "2",
      image: gear,
      title: "Customized solutions for your unique needs",
      body: "One size does not fit all, and we understand that your needs are unique. That's why we offer fully customized solutions tailored to your specific requirements. From the initial consultation to the final implementation, we collaborate closely with you to ensure the perfect fit for your goals."
    },
    {
      id: "3",
      image: message,
      title: "Transparent communication and collaboration",
      body: "We take pride in our exceptional team of experts who bring a wealth of experience to every project. With years of industry knowledge and a passion for innovation, our team is dedicated to delivering top-notch solutions that exceed your expectations."
    }
  ];
  
  
  
const Better = () => {
    return (
       <div className="bg-white ">
         <div  data-aos="fade-up" className="flex justify-center md:flex-none md:justify-normal  pt-20 mx-4 lg:mx-16">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium ">
          Why we are better
        </div>
      </div>
      <div className="mx-4 lg:mx-16">
        
       <SideSwitch Data={dataBetter}/>
        </div> 
       </div>
      );
}

export default Better
