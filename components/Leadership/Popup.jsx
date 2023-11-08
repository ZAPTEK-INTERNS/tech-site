import {AiOutlineClose} from 'react-icons/ai'

const PopUp = ({video, setVideo}) => {

  const handleVideo = () => {
    setVideo(false)
  }

  return (
    <>
    {video && (
        <div className='bg-black/80 w-full h-screen fixed left-0 top-0 z-50 flex justify-center items-start'>
         <div className='flex justify-start items-start w-full h-screen mx-16 gap-10 my-[50px]'>
          <iframe
            className='w-full h-[30rem]'
            src="https://www.youtube.com/embed/ KGg5cIjHQiw"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
          <div onClick={handleVideo} >
           <AiOutlineClose  size={25} className='cursor-pointer text-white font-bold'/>
          </div>
         </div>
      </div>
    )}</>
    
  )
}

export default PopUp
