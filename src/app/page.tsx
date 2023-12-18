"use client"
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import heroProfile from '../Images/Untitled_design__5_-removebg-preview__1_-removebg-preview (1).png'
import aboutMe from '../Images/Untitled design (7).png'
import blob from '../Images/blob.svg'
import { useState, useEffect, useRef } from 'react';
import frontEnd from '../Images/bx-code-curly.svg'
import up from '../Images/bxs-chevron-up.svg'
import down from '../Images/bxs-chevron-down.svg'
import Portfolio from '../Data/portfolio';
import contact from '../data/contact'
import conta from '../Images/istockphoto-1458164457-612x612.jpg'
import server from '../Images/bx-server.svg'
import hero from '../Images/Untitled design (2).svg'
import about from '../Images/Untitled design (4).svg'
import Thanku from '../Images/istockphoto-1532143483-612x612.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Preloader from '../Components/Preloader';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link'
import ThankYouPage, { runFireworks } from '../Components/Confetti';

// Import Swiper styles



export default function Home() {

  const [count, setCount] = useState(0);
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openBackend, setOpenBackend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, handleSubmit] = useForm('xyyqqork');


  useEffect(() => {
    if (count < 35) {
      setTimeout(() => {
        setCount(count + 1)
      }, 100)
    }
  }, [count]);


  const handleDownload = async () => {
    try {
      const fileName = 'goldexcool-resume.pdf';
      const downloadUrl = `/${fileName}`; // Adjust the path

      const response = await fetch(downloadUrl);

      if (!response.ok) {
        throw new Error(`Error fetching file: ${response.statusText}`);
      }

      const contentDisposition = response.headers.get('Content-Disposition');
      const filename =
        contentDisposition ? contentDisposition.split('=')[1] : fileName;

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      console.log('Download successful!');
    } catch (error) {
      console.error('Error during download:', error);
    }
  };



  const OpenFrontEnd = () => {
    setOpenFrontend(!openFrontend)
  }
  const OpenBackEnd = () => {
    setOpenBackend(!openBackend)
  }
  useEffect(() => {
    setOpenFrontend(true);
  }, []);


  const onInit = (typewriter: any) => {
    // Access to the typewriter instance (typewriter) here.
    console.log('Typewriter initialized');

    setTimeout(() => {
      typewriter.start();
    }, 1000);
  };

  const handleFormSubmit = async (submission: any) => {
    setIsSubmitting(true);

    try {
      //  form submission logic
      await handleSubmit(submission);

      // Once the submission is successful, set the form to "succeeded"
      setIsSubmitting(false);
      setCount(count + 1);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };




  if (state.succeeded) {
    return <ThankYouPage />;
  }


  return (

    <main>
      <Preloader />
      {/* ============================= Hero section =========================================== */}
      <section className='flex items-center justify-center max-w-full lg:mt-[7rem] mt-[3rem]'>
        <article className='flex items-center lg:justify-center max-w-full'>
          <div className='flex lg:flex-row flex-col-reverse  lg:items-center justify-between max-w-full  w-[900px] lg:p-0 md:p-[4rem]'>
            <div className='flex flex-col  px-4 gap-1'>
              <h1 className='lg:text-[50px] text-[40px] max-w-full w-[200px] font-[700] text-main-color-black'>Hi, <span className='text-main-color'>I&apos;m Goldexcool.</span></h1>
              <h2 className='lg:text-[40px] text-[35px] text-main-color-black'>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Freelancer",
                      "Backend Developer",
                    ],
                    autoStart: true,

                    loop: true,
                  }}
                />
              </h2>
              <h3 className='sm:w-[450px] text-[16px] text-main-color-black'>Your gateway to web experiences that transcend the ordinary. With a passion for front-end development, I bring pixel-perfect precision and captivating user interfaces to the forefront.</h3>
              <div className='flex gap-3 mt-[10px]'>
                <a href='#contact'><button className='lg:p-5 lg:px-8 sm:p-3 p-4 px-3 sm:px-5 bg-main-color text-[15px] text-main-color-white rounded-full flex items-center   ' id='#contact'>Contact Me  <i className='bx bx-chevron-right bx-fade-right text-[20px] arrow animate-moveRightAndBack animation-duration-2s'></i></button></a>
                <a href='#portfolio'><button className='lg:p-5 lg:px-8 sm:p-3 p-4 px-3 sm:px-5 bg-gradient-to-r from-main-color-gray-dark to-main-color-darker  inline-block  text-main-color-white rounded-full flex items-center  '>My Works <i className='bx bx-chevron-right bx-fade-right text-[20px] arrow animate-moveRightAndBack animation-duration-2s'></i></button></a>
              </div>
            </div>
            <div className="relative ">
              <div className="">
                <div className="w-full h-full bg-cover bg-center" >
                  <div>
                    <Image src={hero} alt='' height={400} width={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>



      {/* ================================ About Me ====================================== */}
      {/* =========== Header ========== */}
      <div className='flex items-center justify-center w-full Max-w-full flex-col mb-[3rem] mt-[5rem] ' id='about'>
        <h1 className='text-[50px] font-[700] text-main-color-black'>About <span className='text-main-color'>Me</span></h1>
        <Image src={blob} alt='' className='text-main-color' />
      </div>
      <section className='flex  items-center justify-center max-w-full '>
        <div className='flex flex-col lg:gap-0 gap-8 lg:flex-row justify-between  items-center w-[900px]'>
          <div className='lg:block flex justify-center items-center'>
            <Image src={about} alt='' height={450} width={450} className='rounded-[50px]' />
          </div>
          <article className='sm:w-3/4  sm:px-0 px-8 lg:w-[400px] lg:mx-0 mx-auto text-main-color-black text-center lg:text-left' >
            <p className='text-[15px]'>
              I&apos;m Ogunseitan Gold, a dedicated developer with a passion for turning code into stunning projects. Over the past two years, I&apos;ve had the privilege of bringing creative ideas to life through the world of web development and software engineering.
              I work with technologies like React, TypeScript, Next.js, Tailwind CSS, Firebase, and Sanity, crafting digital experiences that stand out from the crowd.
              Currently, I&apos;m a Mechatronics student at Bowen University, where I&apos;m blending my engineering and coding skills to open up new horizons.
              Every day, I&apos;m on a journey of exploration, embracing the ever-evolving tech world. My commitment to constant learning and problem-solving is what keeps me excited about the future.
              If you have an exciting project or just want to chat about the endless possibilities of technology, don&apos;t hesitate to reach out. Let&apos;s collaborate and make magic together.
              Welcome to my digital playground.
            </p>

            <div className='flex max-w-full flex-col gap-3 mt-3'>
              <div className='p-3 rounded-[10px] bg-main-color text-main-color-gray-dark w-full justify-center text-center text-[15px]'>
                <button>
                  Over <span className='font-semibold text-[20px]'>{count}</span> Completed Projects
                </button>
              </div>
              <div className='flex items-center bg-main-color p-3 cursor-pointer text-main-color-gray-dark rounded-[10px] gap-3 text-[15px] w-full justify-center' onClick={handleDownload}>
                <button className='cursor-pointer'>
                  Download Resume
                </button>
                <i className='bx bx-download text-[20px] text-main-color-black text-white'></i>
              </div>
            </div>
          </article>
        </div>
      </section>



      {/* ======================== Skills=============================== */}
      {/* =========== Header ========== */}
      <div className='flex items-center justify-center w-full Max-w-full flex-col mb-[3rem] mt-[7rem] ' id='skill'>
        <h1 className='text-[50px] font-[700] text-main-color-black'>Skills</h1>
        <Image src={blob} alt='' className='text-main-color' />
      </div>
      <section className='flex  justify-center max-w-full'>
        <div className='md:flex justify-between w-[900px] md:px-o px-6 '>
          <div className='flex md:gap-10 justify-between md:w-fit w-full md:justify-start flex-col items-center cursor-pointer' onClick={OpenFrontEnd}  >
            <div className='flex gap-10 justify-between w-full mb-2' >
              <div className="flex gap-10 items-center text-main-color-black">
                <i className='bx bx-code-curly text-[40px]'></i>
                {/* <Image src={frontEnd} alt='' width={40} height={40} className='text-main-color-black'/> */}
                <div className='flex flex-col'>
                  <h1 className='text-[20px]'>Frontend Technologies</h1>
                  <p className='text-[17px]'>Progressive</p>
                </div>
              </div>
              <div className='text-main-color-black text-[35px]'>
                <i className={openFrontend ? "bx bx-chevron-down bx--chevron-up" : "bx bx-chevron-up bx--chevron-up"} ></i>
                {/* <Image src={openFrontend ? up : down} alt='' width={35} height={35} className='bx-chevron-up text-main-color-black' /> */}
              </div>
            </div>
            {openFrontend && (
              <div className='flex items-center flex-col w-full gap-5 openfront-end'>
                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>HTML</h1>
                      <h2>95%</h2>
                    </div>
                    <div className='w-full bg-main-color-light rounded-[10px]'>
                      <p className='w-[95%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>CSS</h1>
                      <h2>90%</h2>
                    </div>
                    <div className='w-full bg-main-color-light rounded-[10px]'>
                      <p className='w-[90%] transition-all bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>Javascript</h1>
                      <h2>85%</h2>
                    </div>
                    <div className='w-full bg-main-color-light rounded-[10px]'>
                      <p className='w-[85%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>React</h1>
                      <h2>70%</h2>
                    </div>
                    <div className='w-full bg-main-color-light rounded-[10px]'>
                      <p className='w-[70%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>Next Js</h1>
                      <h2>80%</h2>
                    </div>
                    <div className='w-full bg-main-color-light rounded-[10px]'>
                      <p className='w-[80%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>Tailwind </h1>
                      <h2>80%</h2>
                    </div>
                    <div className='w-full bg-main-color-light rounded-[10px]'>
                      <p className='w-[80%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          <div className=' md:mt-0 mt-8'>
            <div className='flex flex-row'>
              <div className='items-center md:w-fit w-full flex flex-col gap-10 '>
                <div className='flex md:gap-10 justify-between md:w-fit w-full md:justify-start flex-row items-center cursor-pointer ' onClick={OpenBackEnd}  >
                  <div className='flex gap-10 items-center ' >
                    <i className='bx bx-server text-main-color-black text-[30px]'></i>
                    <div className='flex flex-col text-main-color-black'>
                      <h1 className='text-[20px]'>Backend Technologies</h1>
                      <p className='text-[17px]'>Progressive</p>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center text-main-color-black text-[35px]">
                    {
                      <i className={openBackend ? "bx bx-chevron-down bx--chevron-up" : "bx bx-chevron-up bx--chevron-down"} ></i>
                    }
                  </div>
                </div>
                {
                  openBackend && (
                    <div className='flex items-center flex-col w-full gap-5 openfront-end'>
                      <div className='flex items-center w-full'>
                        <div className='flex items-center w-full flex-col'>
                          <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                            <h1>Sanity</h1>
                            <h2>90%</h2>
                          </div>
                          <div className='w-full bg-main-color-light rounded-[10px]'>
                            <p className='w-[90%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                          </div>
                        </div>
                      </div>

                      <div className='flex items-center w-full'>
                        <div className='flex items-center w-full flex-col'>
                          <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                            <h1>Firebase</h1>
                            <h2>85%</h2>
                          </div>
                          <div className='w-full bg-main-color-light rounded-[10px]'>
                            <p className='w-[95%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                          </div>
                        </div>
                      </div>

                      <div className='flex items-center w-full'>
                        <div className='flex items-center w-full flex-col'>
                          <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                            <h1>Python</h1>
                            <h2>50%</h2>
                          </div>
                          <div className='w-full bg-main-color-light rounded-[10px]'>
                            <p className='w-[50%] bg-main-color rounded-ful p-2 rounded-[10px]'></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =============================== Portfolio ================================= */}
      <div className='flex items-center justify-center w-full Max-w-full flex-col mb-[3rem] mt-[6rem] ' id='portfolio'>
        <h1 className='text-[50px] font-[700] text-main-color-black'>Portfolio </h1>
        <Image src={blob} alt='' className='text-main-color' />
      </div>
      <section className='flex justify-center items-center w-full max-w-full'>
        <div className='flex lg:w-[1000px] w-[90%] h-full justify-center items-center'>
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[ Pagination]}
            onSwiper={swiper => console.log(swiper)}
            className='h-96 w-full rounded-lg'
          >
            <div className='flex sm:flex-col lg:flex-row gap-[2rem] justify-center max-w-full'>
              {
                Portfolio.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={index} className='flex md:mt-0 mt-4 items-center justify-between w-[900px] flex-col lg:flex-row'>
                      <div className='flex lg:flex-row flex-col items-center justify-center'>
                        <div className='mb-3'>
                          <Image src={item.image01} alt='portfolio' className=' w-[390px] lg:mx-0 mx-auto lg:w-[450px] lg:h-[300px] h-[200px] rounded-[30px] ' />
                        </div>
                        <article className=' mt-4 text-main-color-black'>
                          <h1 className='text-[30px] text-center font-[700]'>{item.title}</h1>
                          <p className='w-[100%] lg:w-[90%] flex items-center text-center lg:text-[15px] text-[12px]'>{item.description}</p>
                          <div className='flex justify-center items-center  gap-3 mt-[10px]'>
                            <a href={item.link} target='_blank'><button className='lg:p-3 lg:px-8 p-2 px-4 bg-main-color text-main-color-white rounded-full flex items-center lg:text-[15px] text-[12px]'>View Live <i className='bx bx-chevron-right bx-fade-right text-[20px] arrow animate-moveRightAndBack animation-duration-2s'></i></button></a>
                            <a href={item.githublink} target='_blank'><button className='lg:p-3 lg:px-8 p-2 px-4  bg-gradient-to-r from-main-color-gray-dark to-main-color-darker   text-main-color-white rounded-full flex items-center lg:text-[15px] text-[12px]'>View Source <i className='bx bx-chevron-right bx-fade-right text-[20px] arrow animate-moveRightAndBack animation-duration-2s'></i></button></a>
                          </div>
                        </article>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </div>
          </Swiper>


        </div>
      </section>



      {/* =============================== Contact Me ================================= */}
      <div className='flex items-center justify-center w-full Max-w-full flex-col mb-[3rem] mt-[6rem]' id='contact'>
        <h1 className='text-[50px] text-center font-[700] text-main-color-black'>Contact <span className='text-main-color'>Me.</span> </h1>
        <Image src={blob} alt='' className='text-main-color' />
      </div>
      <section className="flex justify-center max-w-full">
        <div className="w-[900px] max-w-screen-xl px-4">
          <div className="flex  justify-center items-center">
            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between w-full">
              {contact.map((item: any, index: any) => (
                <div key={index} className="flex items-center justify-center max-w-full">
                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <div className=' p-2 sm:p-6 bg-main-color rounded-full'>
                        <Image src={item.icon} alt="" width={30} height={30} />
                      </div>
                      <div className="flex flex-col items-center text-main-color-black">
                        <h1 className="text-[20px]">{item.title}</h1>
                        <h2 className="text-[15px]">{item.description}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </section>



      {/* ============================== Messages ================================= */}
      <section className="flex justify-center max-w-full mt-[4rem]">
        <div className="w-full max-w-5/6 px-4">
          <div className="md:flex justify-center mx-4 items-center gap-8">
            <div className="flex">
              <Image src={conta} alt="" className='w-full object-cover sm:w-[450px] h-[350px] rounded-[10px]' />
            </div>
            <div className="flex flex-col text-main-color-black">
              <h1 className="text-2xl md:text-left text-center mb-4 text-[25px] font-[700]">Get in <span className='text-main-color'>Touch</span></h1>
              {state.succeeded ? (
                <ThankYouPage />
              ) : (
                <form
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col rounded-[5px] ">
                      <label htmlFor="name" className="text-sm">Name:</label>
                      <input type="text" name="name" id="name" className="py-2 px-3 border rounded  text-black" />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm">Email:</label>
                      <input type="email" name="email" id="email" className="py-2 px-3 border rounded text-black" />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-3">
                    <label htmlFor="message" className="text-sm">Message:</label>
                    <textarea name="message" id="message" rows={6} className="py-2 px-3 border rounded resize-none  text-black" ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting || isSubmitting}
                    className='cursor-pointer flex md:w-fit justify-center bg-blue-500 text-white py-2 px-4 rounded-[10px] hover:bg-blue-600 transition duration-300 w-1/2 items-center gap-1 mt-3 '
                  >
                    {isSubmitting || state.submitting ? (
                      <>
                        Sending...
                        {/* You can replace the ellipsis with your loading spinner or icon */}
                        <i className='bx bx-loader bx-spin'></i>
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className='bx bxl-telegram'></i>
                      </>
                    )}
                  </button>

                  {state.succeeded && isSubmitting && <ThankYouPage />}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main >

  );
}



