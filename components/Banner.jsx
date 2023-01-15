import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src='https://images.unsplash.com/photo-1596394516093-501ba68a0ba6'
        fill
        style={{objectFit: 'cover'}}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white font-bold">Not sure where to go? Perfect.</p>
        
        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner