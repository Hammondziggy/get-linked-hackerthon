import images from "../../images";

const Rules = () => {
    return(
        <section className=" w-full border">
            <div className="mx-auto w-3/4 flex items-center p-10 justify-between border">
                <div className="w-1/2">
                    <h2 className="font-sans text-3xl font-bold">
                    Rules and
                    <br />
                    <span className="font-sans text-3xl text-primary font-bold">Guidelines</span>
                    </h2>
                    <p className="font-serif text-sm font-normal">
                        Our tech hackathon is a melting pot of visionaries, and its purpose
                        is as clear as day: to shape the future. Whether you're a coding
                        genius, a design maverick, or a concept wizard, you'll have the
                        chance to transform your ideas into reality. Solving real-world
                        problems, pushing the boundaries of technology, and creating
                        solutions that can change the world, that's what we're all about!
                    </p>
                </div>
                <div className="w-[490px] h-[477px]">
                    <img src={images.guidelines} alt="Idea" className="w-[400px]" />
                </div>
            </div>
        </section>
    )
}
export default Rules;
