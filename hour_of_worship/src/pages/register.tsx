import Register from '../components/Registration_Form'

const register = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center px-4 py-12'>
        <div className='w-full max-w-md'>
            <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'> Program Registration</h1>

            <Register />
        </div>
    </div>
  )
}

export default register