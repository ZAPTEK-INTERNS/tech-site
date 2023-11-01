import { joblist }  from "../../components/Career/index"
import { useRouter } from 'next/router';

const CareerDetail = () => {

  const router = useRouter();
  const jobId = router.query.id;

const job = joblist.find((job) => job.id === jobId);
//console.log(jobId)
console.log(job.description)

  return (
    <section>
      <h1>{job.description}</h1>
    </section>
  )
}

export default CareerDetail




