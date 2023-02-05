import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/shared/components';

export const TrackSection = () => {
  
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(inputValue){
      console.log("HEre1")
      router.push(`${process.env.linksPath}/tracking/${inputValue}?isOrderTrackingid=${inputValue.indexOf('.') !== -1}`);
    }
  }

  return (
    <section className="py-[68px]">
      <div className="container">
        <div className="w-72 lg:w-[422px] flex flex-col items-center mx-auto">
          <span className="py-[22px] text-center bg-blue-p inline-block text-white cursor-default mb-7 w-full">TRACKING NUMBER</span>
          <p className="text-lg text-center color-blue-p inter-m mb-7">Enter your CDL tracking</p>

          <form
            className="w-full"
            onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              name='trackingID'
              className="w-full rounded-md color-[#979797] h-[50px] px-4 placeholder:text-sm outline-none"
              placeholder="Enter Tracking ID or Reference #"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p className='color-blue-p mb-3 text-right cursor-pointer' onClick={(event) => {
              window.location.href = 'mailto:Support@CDLdelivers.com';
              event.preventDefault();
            }}>Help?</p>

            <Button
              btnType="submit"
              btnText="Track"
              btnStyles={`${ inputValue ? 'opacity-100 cursor-pointer hover:opacity-70' : 'opacity-50 cursor-default' } transition-opacity duration-300 ease-in-out w-40 bg-blue-p text-white h-[50px] rounded-md`}
            />
          </form>
        </div>
      </div>
    </section>
  )
}
