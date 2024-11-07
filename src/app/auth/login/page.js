

import "react-toastify/dist/ReactToastify.css";


export default function LoginPage() {
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-blue-800">
        <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Movies app
          </h2>
          <div className="text-center mb-6">
            <h4 className="text-xl font-medium">Sign In</h4>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>
          <form
         
          >
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your username"
              
              />
            
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
               
              />
           
            </div>
            <button
              
              className="w-full bg-gray-400 text-white py-2 rounded-md font-semibold hover:bg-slate-600 transition-colors"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
