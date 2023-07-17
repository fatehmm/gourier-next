import { useState } from "react";

export default function Slider() {
  const [sliderState, setSliderState] = useState(1);
  const [translateCount, setTranslateCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [initialTranslate, setInitialTranslate] = useState(0); // Add this new state variable

  function CarouselHandler(prop: number) {
    switch (prop) {
      case 1:
        setTranslateCount(0);
        setSliderState(1);
        break;
      case 2:
        setTranslateCount(-100);
        setSliderState(2);
        break;
      case 3:
        setTranslateCount(-200);
        setSliderState(3);
        break;
      case 4:
        setTranslateCount(-300);
        setSliderState(4);
      default:
        break;
    }
  }
  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
    setInitialPosition(e.clientX);
    setInitialTranslate(translateCount);
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const sensitivityFactor = 4;
    const newPosition = (e.clientX - initialPosition) / sensitivityFactor;
    setCurrentTranslate(newPosition);
  }

  //   function onMouseUp() {
  //     setIsDragging(false);
  //     setInitialTranslate(translateCount + currentTranslate);

  //     if (currentTranslate > 25) {
  //       setSliderState(1);
  //       setTranslateCount(0);
  //     } else if (currentTranslate < -275) {
  //       setSliderState(4);
  //       setTranslateCount(-300);
  //     } else {
  //       let roundedTranslate = Math.round(currentTranslate / 100) * 100;
  //       setTranslateCount(initialTranslate + roundedTranslate);
  //       setSliderState(-roundedTranslate / 100 + 1);
  //     }

  //     setCurrentTranslate(0);
  //   }
  function onMouseUp() {
    console.log(currentTranslate);
    setIsDragging(false);
    setInitialTranslate(currentTranslate);

    if (currentTranslate > 75) {
      setSliderState(1);
      setTranslateCount(0);
    } else if (currentTranslate > -25) {
      setSliderState(2);
      setTranslateCount(-100);
    } else if (currentTranslate < -90) {
      setSliderState(4);
      setTranslateCount(-300);
    } else {
      setSliderState(3);
      setTranslateCount(-200);
    }

    setCurrentTranslate(0);
  }

  return (
    <>
      <div className="px-4 py-12 mt-12 bg-gray-100 overflow-hidden sm:grid sm:grid-cols-10 sm:grid-rows-6 lg:px-20 ">
        <div className="row-start-1 row-end-5 col-start-1 col-end-6 sm:px-4 sm:pt-5 lg:px-20 mt-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:font-semibold font-space">
            {" "}
            Why Gourier?{" "}
          </h3>
          <p className="mt-4 text-gray-600 2xl:text-lg">
            {" "}
            Our experience in delivery industry makes Gourier better for your
            packages.{" "}
          </p>
        </div>
        <div className="col-start-4 col-end-8 row-start-5 row-end-6">
          <div className="flex gap-1 pr-20 h-2 mt-6">
            <div
              onClick={(e) => CarouselHandler(1)}
              style={
                sliderState == 1
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "gray" }
              }
              className="cursor-pointer transition transition-duration-[0.5] w-1/4 lg:w-[5rem] h-full rounded-xl bg-gray-400"
            ></div>
            <div
              onClick={(e) => CarouselHandler(2)}
              style={
                sliderState == 2
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "gray" }
              }
              className="cursor-pointer transition transition-duration-[0.5] w-1/4 lg:w-[5rem] h-full rounded-xl bg-gray-400"
            ></div>
            <div
              onClick={(e) => CarouselHandler(3)}
              style={
                sliderState == 3
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "gray" }
              }
              className="cursor-pointer transition transition-duration-[0.5] w-1/4 lg:w-[5rem] h-full rounded-xl bg-gray-400"
            ></div>
            <div
              onClick={(e) => CarouselHandler(4)}
              style={
                sliderState == 4
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "gray" }
              }
              className="cursor-pointer transition transition-duration-[0.5] w-1/4 lg:w-[5rem] h-full rounded-xl bg-gray-400"
            ></div>
          </div>
        </div>
        <div
          className="w-screen overflow-hidden row-start-1 row-end-5 col-start-6 col-end-11 select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="mt-6 space-x-6 flex overflow-hidden w-[65rem] sm:w-[70rem] md:w-[90rem] lg:w-[120rem] xl:w-[140rem]">
            <div
              style={{
                transform:
                  "translateX(" + (translateCount + currentTranslate) + "%)",
                transition: isDragging ? "none" : "0.5s",
              }}
              className="bg-[#C5C5DA] rounded-xl w-full h-52 xl:h-64 px-4 py-6"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold font-space">
                No more unavailable. We make it available.
              </h3>
              <p className="mt-4 text-gray-600 md:text-lg 2xl:text-lg">
                We will deliver rare and expensive products that you do not have
                access in your area.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-xl"> Learn more </span>
                <img
                  className="ml-2 lg:ml-6 "
                  src="/assets/icons/arrow.svg"
                  alt="Arrow icon"
                />
              </div>
            </div>
            <div
              style={{
                transform:
                  "translateX(" + (translateCount + currentTranslate) + "%)",
                transition: isDragging ? "none" : "0.5s",
              }}
              className="bg-[#F4F5B5] rounded-xl w-full h-52 xl:h-64 px-4 py-6"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold font-space">
                Save your time and money.
              </h3>
              <p className="mt-4 text-gray-600 md:text-lg 2xl:text-lg">
                In Gourier Marketplace, everything is cheaper and more
                accesible.{" "}
              </p>
              <div className="flex items-center mt-6">
                <span className="text-xl"> Learn more </span>
                <img
                  className="ml-2 lg:ml-6 "
                  src="/assets/icons/arrow.svg"
                  alt="Arrow icon"
                />
              </div>
            </div>
            <div
              style={{
                transform:
                  "translateX(" + (translateCount + currentTranslate) + "%)",
                transition: isDragging ? "none" : "0.5s",
              }}
              className="bg-[#BFE499] rounded-xl w-full h-52 xl:h-64 px-4 py-6"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold font-space">
                Eco-friendly solution.
              </h3>
              <p className="mt-4 text-gray-600 md:text-lg 2xl:text-lg">
                Gourier's delivery system reduces carbon footprint, making
                deliveries more eco-friendly.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-xl"> Learn more </span>
                <img
                  className="ml-2 lg:ml-6 "
                  src="/assets/icons/arrow.svg"
                  alt="Arrow icon"
                />
              </div>
            </div>
            <div
              style={{
                transform:
                  "translateX(" + (translateCount + currentTranslate) + "%)",
                transition: isDragging ? "none" : "0.5s",
              }}
              className="bg-[#e4adff] rounded-xl w-full h-52 xl:h-64 px-4 py-6"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold font-space">
                Angel travelers.
              </h3>
              <p className="mt-4 text-gray-600 md:text-lg 2xl:text-lg">
                Angel travelers are delivering vital items to countries to
                people in need.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-xl"> Learn more </span>
                <img
                  className="ml-2 lg:ml-6 "
                  src="/assets/icons/arrow.svg"
                  alt="Arrow icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-4 row-end-5 col-start-1 col-end-6 flex justify-center">
          <div className="flex mt-6 w-1/2">
            <button
              onClick={() => {
                sliderState > 1 ? setSliderState(sliderState - 1) : null;
                translateCount < 0
                  ? setTranslateCount(translateCount + 100)
                  : null;
              }}
              className="w-10 h-10  bg-white rounded-full flex items-center justify-center"
            >
              <img
                className="w-[50%] h-[50%] "
                src="/assets/icons/arrow-back.svg"
                alt="Arrow Back"
              />
            </button>
            <button
              onClick={() => {
                sliderState < 4 ? setSliderState(sliderState + 1) : null;
                translateCount > -300
                  ? setTranslateCount(translateCount - 100)
                  : null;
              }}
              className="ml-6 w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <img
                className="w-[50%] h-[50%]  "
                src="/assets/icons/arrow-forward.svg"
                alt="Arrow Back"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
        <div
          className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
          style={{ minHeight: "19rem" }}
        >
          <div
            className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            style={{ minHeight: "19rem" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              alt=""
            />
            <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
              <svg
                className="w-full h-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 239 120"
              >
                <path d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"></path>
              </svg>
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
              <p className="text-gray-600">
                <span className="text-gray-900">Missguided</span> is a UK-based
                fashion retailer that has nearly doubled in size since last
                year. They integrated Stripe to deliver seamless checkout across
                mobile and web for customers in 100+ countries, all while
                automatically combating fraud.
              </p>
              <a
                className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
                href=""
              >
                <span>Learn more about our users</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </a>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
            <span className="block" style={{ transform: "scale(-1)" }}>
              &#x279c;
            </span>
          </button>
          <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
            <span className="block" style={{ transform: "scale(1)" }}>
              &#x279c;
            </span>
          </button>
        </div>

        <div className="flex items-center pt-5 justify-between">
          <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
            <img
              className="w-full"
              src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              alt=""
              style={{ maxHeight: "60px" }}
            />
          </button>
          <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
            <img
              className="w-full"
              src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              alt=""
              style={{ maxHeight: "60px" }}
            />
          </button>
          <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
            <img
              className="w-full"
              src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              alt=""
              style={{ maxHeight: "60px" }}
            />
          </button>
          <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
            <img
              className="w-full"
              src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              alt=""
              style={{ maxHeight: "60px" }}
            />
          </button>
          <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
            <img
              className="w-full"
              src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              alt=""
              style={{ maxHeight: "60px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
