import Loader from "@/components/loader/Loader"


const loading = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className="font-bold  animate-portada">C2S</h1>
        <Loader/>
    </div>
  )
}

export default loading