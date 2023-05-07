const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute top-0 left-0 p-1 rounded-3xl m-1 bg-white/60 text-black text-sm '>Electronics</span>
                <img className="rounded-lg object-cover" src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones'/>
                <div className='absolute top-0 right-0 p-1 m-1 text-center align-middle flex justify-center items-center bg-white/80 w-6 h-6 rounded-full'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-bold'>Headphones</span>
                <span>$300</span>
            </p>
        </div>
    )
}

export default Card