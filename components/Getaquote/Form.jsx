import {useState} from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <section className='mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] grid grid-cols-5 gap-6 items-center my-20'>
     <div className='col-span-5 md:col-span-2' data-aos="fade-right">
       <h1 className='text-5xl sm:text-6xl font-bold text-black/80'>Let's discuss your project</h1>
       <p className='text-lg text-gray-600 sm:font-semibold mt-6'>
        Our dedicated team of IT experts is committed to understanding your unique requirements 
        and crafting tailored solutions that align with your business objectives.
       </p>
     </div>
  
    <form data-aos="fade-left"
      className="w-full md:max-w-lg mx-auto p-8 bg-[#1c0738] rounded-md shadow-md col-span-5 md:col-span-3">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          id="firstName"
          placeholder='First name*'
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-white rounded-md font-bold focus:outline-none bg-[#460775]/50 border-gray-500 focus:border-gray-300"
        />
         <input
          type="text"
          id="lastName"
          placeholder='Last name*'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-white rounded-md font-bold focus:outline-none bg-[#460775]/50 border-gray-500 focus:border-gray-300"
        />
      </div>
      
      <div className="mb-4">
        <input
          type="email"
          id="email"
          placeholder='Email*'
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-white rounded-md font-bold focus:outline-none bg-[#460775]/50 border-gray-500 focus:border-gray-300"
        />
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          name="message"
          placeholder='message*'
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border text-white rounded-md font-bold focus:outline-none bg-[#460775]/50 border-gray-500 focus:border-gray-300"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-fit my-6 font-semibold bg-violet-700 text-white p-3 rounded-full hover:bg-white border border-violet-700 hover:text-black transition-colors"
      >
        Send message
      </button>
    </form>

    </section>
  )
}

export default Form
