import Hero from '../../components/CaseStudy/Hero.jsx'
import Filter from '../../components/CaseStudy/Filter.jsx'
import { FilterProvider } from '../../components/CaseStudy/Context/Filter.js';

import Card from '../../components/CaseStudy/Card.jsx';
const Case = () => {
    return ( 
        <div className='mx-4'>
            <FilterProvider>
                <Hero/>
                <Filter/>
                <Card/>    
            </FilterProvider>
        </div>
     );
}
 
export default Case;