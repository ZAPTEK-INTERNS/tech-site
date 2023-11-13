import {Navbar, BlogHero, Posts, Blogs} from '../../components/links'
import {useState} from 'react'


const index = () => {
  const [search, setSearch] = useState("")

  return (
    <div>
     <Navbar/>
     <BlogHero search={search} setSearch={setSearch}/>
     <Posts search={search} />
     <Blogs search={search} />
    </div>
  )
}

export default index
