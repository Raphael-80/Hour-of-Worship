import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 text-white py-24 px-6 text-center rounded-b-3xl shadow-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-right">
        Hour of Worship
      </h1>

      <p className="mt-4 text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
        Join us for a powerful encounter with God. Register now and reserve your
        seat.
      </p>

      <Link to="/register">
        <button className="inline-block mt-8 bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-indigo-100 transition-all pointer">
          Register Now
        </button>
      </Link>
    </div>
  );
};

export default Hero;
