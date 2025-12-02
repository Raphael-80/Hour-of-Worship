import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6'>
            <div className='bg-white shadow-lg rounded-2xl p-8 max-w-md text-center'>
                <div className='w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7'/>
                    </svg>
                </div>

                <h1 className='text-3xl font-bold text-gray-800'>Registration Successful</h1>
                <p className='text-gray-600 mt-3'>Thank you for registering. We look forward to seeing you at the program!</p>

                <Link to="/" className='mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition'>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default Success