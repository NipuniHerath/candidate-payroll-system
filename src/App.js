import logo from './logo.svg';
import './App.css';
import InputField from './components/Shared/Input';

import LoginImg from "./assets/images/LoginImg.jpg";


// const FacebookIcon = () => (
//   <svg
//     className="w-4 h-4"
//     aria-hidden="true"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="currentColor"
//     viewBox="0 0 8 19"
//   >
//     <path
//       fillRule="evenodd"
//       d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

const App = () => {
  return (
    <div className="">
    
  
    <div class="font-[sans-serif]">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
        <div class="max-md:order-1 h-screen min-h-full">
        <img 
              src={LoginImg} 
              className="w-full h-full object-cover" 
              alt="login-image" 
            />
        </div>

        <form class="max-w-xl w-full p-1 mx-auto">
          <div class="mb-36">
            <h3 class="text-gray-800 text-4xl font-extrabold">Sign in</h3>
            <p class="text-gray-800 text-sm mt-6">Don't have an account <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
          </div>

          <div>
            <label class="text-gray-800 text-sm block mb-2">Email</label>
            <div class="relative flex items-center">
            <InputField
            className="w-full"
            />
            </div>
          </div>

          <div class="mt-8">
            <label class="text-gray-800 text-sm block mb-2">Password</label>
            <div class="relative flex items-center">
              <InputField
                 className="w-full"/>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div>
              <a href="jajvascript:void(0);" class="text-blue-600 font-semibold text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div class="mt-12">
            <button type="button" class="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Sign in
            </button>
          </div>

          <div class="my-6 flex items-center gap-4">
            <hr class="w-full border-gray-300" />
            <p class="text-sm text-gray-800 text-center">or</p>
            <hr class="w-full border-gray-300" />
          </div>

         
        </form>
      </div>
    </div>
    </div>
  );
};
export default App;