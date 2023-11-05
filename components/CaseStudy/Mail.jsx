const Mail = () => {
    return ( 
        <>
        <div className="text-white bg-[#1a0533] rounded-md p-8 space-y-4  my-8 ">
            <p data-aos="fade-up" className="text-3xl font-bold">Start a project</p>
          <div className="space-x-4">
            <input type="email" name="email" autoComplete="email" required className="min-w-0 flex-auto rounded-xl border-0 bg-indigo-900/5 px-5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
            <button className="py-4 px-6  text-white bg-purple-900 hover:text-purple-900 hover:bg-white rounded-full" >
                Send
            </button>
          </div>
        </div>
        </>
     );
}
 
export default Mail;