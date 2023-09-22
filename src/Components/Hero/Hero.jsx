import images from "../../images";
const Hero = () => (
  <>
    <div className="text-center mt-5 w-fit mx-auto flex flex-col items-center justify-center  lg:w-11/12 lg:items-end">
      <p
        className="italic font-sans text-base text-white font-bold
        tracking-widest lg:text-3xl"
      >
        Igniting a Revolution in HR Innovation
      </p>
      <svg
        className="self-end w-[100px] lg:w-[200px]"
        height="17"
        viewBox="0 0 255 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector 4"
          d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
          stroke="#FF26B9"
          strokeWidth="5"
        />
      </svg>
    </div>
    <section className="relative flex flex-col items-start justify-center  gap-10 py-5 lg:flex-row">
      <div className="flex flex-col items-center justify-center z-10  gap-1 lg:items-start lg:ml-20 lg:gap-0">
        <div className="mt-5 text-center  relative pt-5 lg:pt-14 lg:mt-0">
          <h1 className="text-3xl lg:text-[60px]  font-bold leading-normal">
            getlinked Tech
          </h1>
          <img
            src={images.creative}
            alt="creative"
            className="absolute w-5 top-0 right-4 lg:w-[40px] lg:right-6 lg:top-8"
          />
        </div>
        <div className="flex items-center justify-center lg:mb-3">
          <h1 className="text-3xl lg:text-[60px] font-bold ">
            Hackathon <span className="text-primary">1.0</span>
          </h1>
          <img src={images.chain} alt="chain" className="w-[60px]" />
          <img src={images.spack} alt="spack" className="w-[60px]" />
        </div>
        <p className="text-center font-serif text-sm px-10 leading-6 lg:px-0 lg:max-w-[370px] lg:text-left">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <a className=" btn-color py-4 px-10 rounded-md my-7" href="#">
          Register
        </a>
        <p className="font-unica text-center text-5xl">
          <span>00</span>
          <span className="text-sm font-serif font-normal">H</span>
          <span style={{ marginRight: "1.5rem" }}></span>
          <span>00</span>
          <span className="text-sm font-serif font-normal">M</span>
          <span style={{ marginRight: "1.5rem" }}></span>
          <span>00</span>
          <span className="text-sm font-serif font-normal">S</span>
        </p>
      </div>
      <div className="relative">
        <img
          src={images.manWithGlasses}
          alt="manWithGlasses"
          className="min-w-full mix-blend-luminosity lg:w-[35rem]"
        />
        <img
          src={images.hero}
          alt="sparkle light"
          className="absolute top-0 w-96 mix-blend-hard-light lg:w-[500px] lg:-left-20"
        />
      </div>
      <img
        src={images.purpleLens1}
        alt="purpleLens1"
        className="mix-blend-hard-light absolute rounded-full w-72  h-72 top-5 left-0 filter blur-xl lg:w-[550px] lg:h-[550px] lg:left-8 lg:-top-32"
      />
      <img
        src={images.purpleLens2}
        alt="purpleLens2"
        className="invisible lg:visible mix-blend-hard-light absolute rounded-full -top-10  right-10 w-[500px] h-[500px] blur-lg"
      />

      <img
        src={images.metrix}
        alt="metrix"
        className="invisible lg:visible mix-blend-hard-light absolute w-[500px] h-[500px]"
      />
      <img
        src={images.star}
        alt="star"
        className="absolute top-8 left-28 w-[10px] h-3 lg:top-0 lg:w-5 lg:h-5"
      />
      <img
        src={images.star1}
        alt="star"
        className="absolute top-5 right-16 w-[10px] h-3 lg:w-5 lg:h-5 lg:right-auto"
      />
      <img
        src={images.star1}
        alt="star"
        className="absolute top-64 right-16 w-[10px] lg:w-5 lg:h-5 lg:right-auto lg:left-[30rem] lg:top-96"
      />
    </section>
  </>
);

export default Hero;
