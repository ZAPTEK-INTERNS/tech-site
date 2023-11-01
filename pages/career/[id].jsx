import { useRouter } from 'next/router';
import { joblist } from '../../components/Career';

const CareerDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const dataForId = joblist;

  return (
    <section>
     Dynamic Page ID: {id} Data: {dataForId.title}
    </section>
  )
}

export default CareerDetail
