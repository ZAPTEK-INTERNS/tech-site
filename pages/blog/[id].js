import { PostDetail, Navbar, RecentDetail, BlogsDetail , Navigation} from '../../components/links';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {blogsData} from '../../components/Blog/index'

const Blogdetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogId = parseInt(id);

  const [detailComponent, setDetailComponent] = useState(null);

  useEffect(() => {
    if (blogId === 1) {
      setDetailComponent(<PostDetail />);
    } 
    else if (blogId === 2 || blogId === 3) {
      setDetailComponent(<RecentDetail />);
    } 
    else {
      setDetailComponent(<BlogsDetail />);
    }
  }, [blogId]);

  return (
    <div>
      <Navbar />
      {detailComponent}
    </div>
  );
};

export default Blogdetail;