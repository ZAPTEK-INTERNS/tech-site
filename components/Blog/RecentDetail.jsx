import {recentPosts} from './index'

const RecentDetail = () => {
  const router = useRouter();
  const jobId = router.query.id;
  const newId = parseInt(jobId) 

  const job = joblist.find((job) => job.id === newId);

  return (
    <div>RecentDetail</div>
  )
}

export default RecentDetail