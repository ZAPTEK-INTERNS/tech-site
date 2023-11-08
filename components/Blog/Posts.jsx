import {post} from './index'

const Posts = () => {
    console.log(post.title)
  return (
    <div>
      {post.title}
    </div>
  )
}

export default Posts
