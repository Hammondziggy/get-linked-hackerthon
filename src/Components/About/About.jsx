import React from "react";
import images from "../../images"; 


const About = () => {
  return (
    <section className=" w-full border">
      <div className="mx-auto w-4/5 flex items-center p-10 justify-between border">
        <div className="w-[490px] h-[477px] border">
            <img src={images.idea} alt="Idea" className="w-[400px] mt-10" />
        </div>
        <div><img src={images.arrow} alt="arrow" className="mt-96" /></div>
        <div className="w-1/2">
            <h2 className="font-sans text-3xl font-bold">
            Introduction to getlinked
            <br />
            <span className="font-sans text-3xl text-primary font-bold">techHackathon1.0</span>
            </h2><br/>
            <p className="font-serif text-sm font-normal">
                Our tech hackathon is a melting pot of visionaries, and its purpose
                is as clear as day: to shape the future. Whether you're a coding
                genius, a design maverick, or a concept wizard, you'll have the
                chance to transform your ideas into reality. Solving real-world
                problems, pushing the boundaries of technology, and creating
                solutions that can change the world, that's what we're all about!
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
