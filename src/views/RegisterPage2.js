import React from 'react';
import Button from '../components/Shared/Button';
import InputField from '../components/Shared/Input';
import LoginImg4 from "../assets/images/LoginImg4.png";

const RegisterPage2 = () => {
  return (
    

<div>
<div class=" bg-gray-900 md:h-screen">
      <div class="grid md:grid-cols-2 items-center gap-8 h-full">
        <div class="max-md:order-1 p-4">
          <img src={LoginImg4} class="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>

        <div class="flex items-center md:p-8 p-6 bg-gray-100 md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
            
        <form action="#" className=" grid grid-cols-6 gap-6 pl-16">
            
           
           <div className="col-span-4 sm:col-span-3">
             
             <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
               First Name
             </label>
             <InputField
             className='w-full'/>
           </div>
 
           <div className="col-span-6 sm:col-span-3">
             <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
               Last Name
             </label>
 
             <InputField
             className='w-full'/>
        
           </div>
 
           <div className="col-span-6">
             <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
 
             <InputField
             className='w-full'/>
           </div>
 
           <div className="col-span-6 sm:col-span-3">
             <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
 
             <InputField
             className='w-full'/>
           </div>
 
           <div className="col-span-6 sm:col-span-3">
             <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
               Password Confirmation
             </label>
 
             <InputField
             className='w-full'/>
           </div>
 
           <div className="col-span-6">
             <label htmlFor="MarketingAccept" className="flex gap-4">
               <input
                 type="checkbox"
                 id="MarketingAccept"
                 name="marketing_accept"
                 className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
               />
 
               <span className="text-sm text-gray-700">
               By creating an account, you agree to our terms and conditions  and privacy policy
               </span>
             </label>
           </div>
 
      
           <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mt-6">
           
             <Button
        type="button"
        variant="signUp"
        className=" inline-block  shrink-0"
       
      >
              Create an Account
      </Button>
           
 
             <p className="mt-4 text-sm text-gray-500 sm:mt-0">
               Already have an account?
               <a href="#" className="text-gray-700 underline mx-4">Log in</a>.
             </p>
           </div>
         </form>
        </div>
      </div>
    </div>
</div>
  );
};
export default RegisterPage2;