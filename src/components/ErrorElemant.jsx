
import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-md text-center">
        <div className="flex justify-center"><img src="https://t3.ftcdn.net/jpg/01/48/51/58/240_F_148515867_lk91PBPgVnsEJUwD33MTberng2SVd1rF.jpg" alt="" /></div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
        <p className="text-gray-600 mb-8">The page you are looking for might have been removed or does not exist.</p>
        <Link to={'/'}><button className="bg-blue-600 hover:bg-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Home
        </button></Link>
      </div>
    </div>
    );
};

export default ErrorElement;