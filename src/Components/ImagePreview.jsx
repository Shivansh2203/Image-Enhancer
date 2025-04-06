import Loading from "./Loading"

const ImagePreview = (props) => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

      {/* Original Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl text-white font-semibold text-center bg-gray-700 py-2'>
          Original Image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Original"
            className='w-full max-h-[500px] object-contain'
          />
        ) : (
          <div className='flex items-center justify-center text-gray-400 h-80'>
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl text-white font-semibold text-center bg-gray-700 py-2'>
          Enhanced Image
        </h2>

        {props.loading ? (
          <Loading />
        ) : props.enhanced ? (
          <>
            <img
              src={props.enhanced}
              alt="Enhanced"
              className='w-full max-h-[500px] object-contain'
            />
            <div className='flex justify-center mt-4 mb-4'>
              <a
                href={props.enhanced}
                download="enhanced-image.jpg"
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300'
              >
                Download Enhanced Image
              </a>
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center text-gray-400 h-80'>
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview
