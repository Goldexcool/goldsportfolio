import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import tag from '../Images/258122-200.png';

export const runFireworks = () => {
  var duration = 12 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  var interval: any = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

const ThankYouPage = () => {
  useEffect(() => {
    runFireworks();
  }, []); // Run the confetti effect when the component mounts

  return (
    <div className="mt-10 w-full flex justify-center items-center flex-col gap-4">
        <i className='bx bx-code-alt text-[125px] sm:text-[200px] text-main-color-black'></i>
      {/* <Image src={tag} alt="" width={200} height={200} /> */}
      <div className='flex flex-col items-center gap-3 text-main-color-black'>
        <h1 className="text-[3rem]">Thank You</h1>
        <h2 className=' text-[1.45rem] sm:text-[2rem] text-center'>Your Message has been sent successfully!</h2>
        <h3 className='text-[.75rem] text-center'>
          For additional information, you can contact me at{' '}
          <span className='font-bold'>ogunseitangold105@gmail.com</span>
        </h3>
      </div>
      <div className="flex items-center gap-2 justify-center text-main-color-black">
        <i className="bx bxl-github text-[25px] cursor-pointer opacity-90"></i>
        <i className="bx bxl-facebook text-[25px] cursor-pointer opacity-90"></i>
        <i className="bx bxl-linkedin text-[25px] cursor-pointer opacity-90"></i>
      </div>
      <div className="mt-5 text-main-color-gray-dark">
        <h2>@2023 Goldexcool. All rights reserved</h2>
      </div>
    </div>
  );
};

export default ThankYouPage;
