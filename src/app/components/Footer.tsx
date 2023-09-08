import Image from "next/image"
import reactangleImage from "@/assets/images/Rectangle 42.svg"

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly p-10 pt-24 bg-black h-[450px] rounded-tr-[200px] w-full text-white">
        <div className="lg:w-1/2 space-y-4 lg:pr-32">
            <p className="text-3xl font-bold">Dream Agency</p>
            <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus temporibus. Velit doloribus possimus aliquam natus dignissimos vel neque at reprehenderit expedita? Rerum nulla non, quibusdam deserunt ad amet eveniet!</p>
            <p className="font-bold text-base">GET IN TOUCH</p>
            <form action="" className="flex text-base">
                <input type="text" placeholder="ENTER YOUR EMAIL" className=" placeholder:text-white bg-black border-2 w-64 border-white p-4"/>
                <button className="bg-white text-black w-16">Send</button>
            </form>
        </div>
        <div className="hidden lg:block w-1/2 pr-12 relative">
                <div className="w-44 h-20 absolute z-10 bg-white mt-8 ml-8 text-sm text-black p-2">
                    <p className="font-semibold">Texas</p>
                    <p className="">United States</p>
                    <p className="text-sky-500">View large Map</p>
                </div>
                <Image src={reactangleImage} alt="Map image" className="absolute" />
        </div>
    </div>
  )
}

export default Footer