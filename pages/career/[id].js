import { joblist }  from "../../components/Career/index"
import { useRouter } from 'next/router';

const CareerDetail = () => {
  //console.log(typeof joblist)
  const router = useRouter();
  const jobId = router.query.id;

const job = joblist.find((job) => job.id == jobId);
console.log(jobId)


  return (
    <section>
      <h1>{job.title}</h1>
    </section>
  )
}

export default CareerDetail




