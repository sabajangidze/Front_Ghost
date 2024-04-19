import React, { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";

import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

import CarouselItem from "./CarouselItem/CarouselItem";
import StatsItem from "./StatsItem/StatsItem";

import ReactPlayer from "react-player";
import ReviewItem from "./ReviewItem/ReviewItem";

function Home() {
  const [backgroundColor, setBackgroundColor] = useState("bg-main-bg"); // Initial background color
  // Array of background colors you want to cycle through
  // const backgroundColors = [
  //   // "bg-main-green",
  //   "bg-main-purple",
  // ];

  const backgroundColors = ["bg-main-bg"];

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate through background colors
      const currentIndex = backgroundColors.indexOf(backgroundColor);
      const nextIndex = (currentIndex + 1) % backgroundColors.length;
      setBackgroundColor(backgroundColors[nextIndex]);
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundColor]); // Re-run effect when backgroundColor changes

  return (
    <>
      <div
        className={`flex justify-center h-[60vh] transition-colors duration-1000 ${backgroundColor} lg:h-[70vh]`}
      >
        <div className="wrapper flex flex-col">
          <div className="header_space" />
          <div className="h-full relative">
            <div className="items-center flex flex-col justify-evenly h-full lg:w-3/6">
              <h1 className="font-bold text-main-purple text-3xl text-center lg:text-5xl md:text-4xl">
                გახადე შენი {""}
                <br />
                <TypeAnimation
                  sequence={[
                    "#საუნივერსიტეტო",
                    3000,
                    "#სასკოლო",
                    3000,
                    "#სახალისო",
                    3000,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{
                    display: "inline-block",
                    zIndex: "30",
                    fontStyle: "italic",
                    WebkitTextStroke: "0.1px",
                    WebkitTextStrokeColor: "#4a154b",
                    color: "transparent",
                  }}
                  repeat={Infinity}
                />
                <br />
                ცხოვრება ყველაზე მარტივი!
              </h1>
              <div className="w-full items-center grid grid-cols-1 gap-2 lg:grid-cols-2">
                <button className="btn w-full bg-main-yellow text-main-purple">
                  შეკვეთა
                </button>
                <button className="btn w-full btn-outline bg-main-red text-white">
                  შესვლა
                </button>
              </div>
              {/* <div className="mouse invisible xl:visible"
                          onClick={() => {
                              const element = document.getElementById(`HomeScreenStats`);
                              if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                              }
                          }}
              ><span></span></div> */}
            </div>
            <div className="hidden lg:flex lg:absolute bottom-0 right-[-100px] z-0">
              <img
                src={process.env.PUBLIC_URL + "/images/home-hero4.png"}
                alt="Person"
                className="h-[62vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-16 lg:h-24 bg-background-gray">
        <div className="w-full flex flex-col overflow-hidden">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
              })"
            className="w-full inline-flex flex-nowrap overflow-hidden 
              [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]
              md:[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-20px),transparent_100%)]
              "
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/tsu_logo.webp"}
                  alt="TSU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/seu_logo.png"}
                  alt="SEU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/cu_logo.png"}
                  alt="CU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/unis/freeuni_logo.webp"
                  }
                  alt="FREEUNI Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/ibsu_logo.png"}
                  alt="IBSU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/gau_logo.webp"}
                  alt="GAU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/stu_logo.svg"}
                  alt="GAU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/alte_logo.svg"}
                  alt="GAU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/ciu_logo.png"}
                  alt="CIU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/ug_logo.png"}
                  alt="UG Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/kiu_logo.png"}
                  alt="KIU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/agruni_logo.png"}
                  alt="AGRUNI Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/iliauni_logo.png"}
                  alt="ILIAUNI Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/btu_logo.png"}
                  alt="BTU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll "
              aria-hidden="true"
            >
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/tsu_logo.webp"}
                  alt="TSU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/seu_logo.png"}
                  alt="SEU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/cu_logo.png"}
                  alt="CU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/unis/freeuni_logo.webp"
                  }
                  alt="FREEUNI Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/ibsu_logo.png"}
                  alt="IBSU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/gau_logo.webp"}
                  alt="GAU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/stu_logo.svg"}
                  alt="GAU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/alte_logo.svg"}
                  alt="GAU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/ciu_logo.png"}
                  alt="CIU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/ug_logo.png"}
                  alt="UG Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/kiu_logo.png"}
                  alt="KIU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/agruni_logo.png"}
                  alt="AGRUNI Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/iliauni_logo.png"}
                  alt="ILIAUNI Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/unis/btu_logo.png"}
                  alt="BTU Logo"
                  className="h-10 lg:h-14 grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-150 ease-in"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  py-12">
        <div className="wrapper flex flex-col ">
          {/* <h1 className="font-bold text-2xl w-full py-10">
            ჩვენი სტატისტიკა:
          </h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <StatsItem MainText="97.5%" SubText="ჩაბარებული საგანი" />
            <StatsItem MainText="97.5%" SubText="ჩაბარებული საგანი" />
            <StatsItem MainText="97.5%" SubText="ჩაბარებული საგანი" />
            <StatsItem MainText="97.5%" SubText="ჩაბარებული საგანი" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-background-gray2 py-8">
        <div className="wrapper xl:wrapper flex flex-col my-8 xl:flex-row lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 text-main-purple">
              საუკეთესო ნაწილი? ყველაფერი
            </h1>
            <div className="mb-6">
              <div className="flex items-center mb-1 text-main-purple ">
                <FaRegCircleCheck size={24} className="" />
                <h3 className="font-bold ml-2">იაფფასიანი</h3>
              </div>
              <h4 className="text-md">
                არ გადაცდე შენს ბიუჯეტს და არ გაიძვირო კიდე შენი საუნივერსიტეტო
                ცხოვრება
              </h4>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-1 text-main-purple">
                <FaRegCircleCheck size={24} />
                <h3 className="font-bold ml-2">იაფფასიანი</h3>
              </div>
              <h4 className="text-md">
                არ გადაცდე შენს ბიუჯეტს და არ გაიძვირო კიდე შენი საუნივერსიტეტო
                ცხოვრება
              </h4>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-1 text-main-purple">
                <FaRegCircleCheck size={24} />
                <h3 className="font-bold ml-2">იაფფასიანი</h3>
              </div>
              <h4 className="text-md">
                არ გადაცდე შენს ბიუჯეტს და არ გაიძვირო კიდე შენი საუნივერსიტეტო
                ცხოვრება
              </h4>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-1 text-main-purple">
                <FaRegCircleCheck size={24} />
                <h3 className="font-bold ml-2">იაფფასიანი</h3>
              </div>
              <h4 className="text-md">
                არ გადაცდე შენს ბიუჯეტს და არ გაიძვირო კიდე შენი საუნივერსიტეტო
                ცხოვრება
              </h4>
            </div>
          </div>
          <div className="h-56 lg:h-[28rem] xl:w-full xl:ml-24">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=8qRZcXIODNU"}
              height={"100%"}
              width={"100%"}
              controls
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-8 py-12">
        <div className="wrapper">
          <h1 className="text-2xl font-bold mt-8 text-main-purple">სერვისები:</h1>
          <div className="carousel sm:hidden w-full carousel-center sm:max-w-md p-4 space-x-4  rounded-box">
            <div className="carousel-item w-full">
              <CarouselItem
                Icon={MdOutlineLaptopChromebook}
                BackgroundColor={'bg-main-red'}
                MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
                SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
              />
            </div>
            <div className="carousel-item w-full">
              <CarouselItem
                Icon={MdOutlineLaptopChromebook}
                BackgroundColor={'bg-main-yellow'}
                MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
                SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
              />
            </div>
            <div className="carousel-item w-full">
              <CarouselItem
                Icon={MdOutlineLaptopChromebook}
                BackgroundColor={'bg-main-green'}
                MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
                SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
              />
            </div>
            <div className="carousel-item w-full">
              <CarouselItem
                Icon={MdOutlineLaptopChromebook}
                BackgroundColor={'bg-main-cyan'}
                MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
                SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
              />
            </div>
          </div>
          <div className="hidden sm:grid grid-cols-1 gap-3 justify-center items-center md:grid-cols-2 xl:grid-cols-4">
            <CarouselItem
              Icon={MdOutlineLaptopChromebook}
              BackgroundColor={'bg-main-red'}
              MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
              SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
            />
            <CarouselItem
              Icon={MdOutlineLaptopChromebook}
              BackgroundColor={'bg-main-yellow'}
              MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
              SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
            />
            <CarouselItem
              Icon={MdOutlineLaptopChromebook}
              BackgroundColor={'bg-main-green'}
              MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
              SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
            />
            <CarouselItem
              Icon={MdOutlineLaptopChromebook}
              BackgroundColor={'bg-main-cyan'}
              MainText="ნებისმიერი აკადემიური დავალების დაწერა და ახსნა"
              SubText="სამაგისტრო ნაშრომების შესრულების სერვისი, რომელიც გადაჭრის შენს ყველა აკადემიურ პრობლემას"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-background-gray py-12">
        <div className="wrapper">
          <h1 className="text-2xl font-bold mt-8 text-main-purple">კლიენტების შეფასებები:</h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <ReviewItem
              ImageUrl={
                "https://images.ctfassets.net/9pmgfh9t51r0/1GmDeF065koy22JQxV1ktE/7d0f5f9f5afd35fdd84954e1e5b040c1/testimonial-img-1.jpg"
              }
              Major="პროგრამირების სტუდენტი"
              Name="ანდრია"
              Body="გმადლობთ, 🙏 საკმაოდ მაღალი ქულა მივიღე 💯. აუცილებლად კიდევ დაგიკავშირდებით 🔥"
            />
            <ReviewItem
              ImageUrl={
                "https://images.ctfassets.net/9pmgfh9t51r0/1GmDeF065koy22JQxV1ktE/7d0f5f9f5afd35fdd84954e1e5b040c1/testimonial-img-1.jpg"
              }
              Major="პროგრამირების სტუდენტი"
              Name="ანდრია"
              Body="გმადლობთ, 🙏 საკმაოდ მაღალი ქულა მივიღე 💯. აუცილებლად კიდევ დაგიკავშირდებით 🔥"
            />
            <ReviewItem
              ImageUrl={
                "https://images.ctfassets.net/9pmgfh9t51r0/1GmDeF065koy22JQxV1ktE/7d0f5f9f5afd35fdd84954e1e5b040c1/testimonial-img-1.jpg"
              }
              Major="პროგრამირების სტუდენტი"
              Name="ანდრია"
              Body="გმადლობთ, 🙏 საკმაოდ მაღალი ქულა მივიღე 💯. აუცილებლად კიდევ დაგიკავშირდებით 🔥"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <div className="wrapper">
          <h1 className="text-2xl font-bold mt-8 w-full mb-6 text-main-purple">
            ხშირად დასმული შეკითხვები:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="collapse collapse-arrow bg-main-yellow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg text-main-purple font-bold lg:text-lg">
                რა გარანტია მაქვს, რომ ხარისხიან ნაშრომს მივიღებ?
              </div>
              <div className="collapse-content">
                <p className="text-sm lg:text-md">
                  ნაშრომის გამოგზავნამდე მიმდინარეობს რედაქტირების 5-დონიანი
                  პროცესი. თუმცა, თუ ნაშრომის მიღების შემდეგ იპოვით თქვენს მიერ
                  გამოგზავნილ მოთხოვნებთან შეუსაბამობას, ჩვენ კიდევ ერთხელ,
                  მაქსიმალური აკურატულობით ჩავასწორებთ ნაშრომს.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-main-yellow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg text-main-purple font-bold lg:text-lg">
                რა გარანტია მაქვს, რომ ხარისხიან ნაშრომს მივიღებ?
              </div>
              <div className="collapse-content">
                <p className="text-sm lg:text-md">
                  ნაშრომის გამოგზავნამდე მიმდინარეობს რედაქტირების 5-დონიანი
                  პროცესი. თუმცა, თუ ნაშრომის მიღების შემდეგ იპოვით თქვენს მიერ
                  გამოგზავნილ მოთხოვნებთან შეუსაბამობას, ჩვენ კიდევ ერთხელ,
                  მაქსიმალური აკურატულობით ჩავასწორებთ ნაშრომს.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-main-yellow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg text-main-purple font-bold lg:text-lg">
                რა გარანტია მაქვს, რომ ხარისხიან ნაშრომს მივიღებ?
              </div>
              <div className="collapse-content">
                <p className="text-sm lg:text-md">
                  ნაშრომის გამოგზავნამდე მიმდინარეობს რედაქტირების 5-დონიანი
                  პროცესი. თუმცა, თუ ნაშრომის მიღების შემდეგ იპოვით თქვენს მიერ
                  გამოგზავნილ მოთხოვნებთან შეუსაბამობას, ჩვენ კიდევ ერთხელ,
                  მაქსიმალური აკურატულობით ჩავასწორებთ ნაშრომს.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
