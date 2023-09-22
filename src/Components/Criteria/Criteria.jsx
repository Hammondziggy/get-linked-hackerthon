import images from "../../images";

const Criteria = () => {
    return(
        <section className="mx-auto w-4/5 flex items-center p-10 justify-between border">
            <div className="w-[710px] h-[587px] border flex items-center">
                <img src={images.judges} alt="Idea" className="w-[400px] contain" />
            </div>
            <div className="w-1/2 border">
                <h2 className="font-sans text-3xl font-bold">
                Judging Criteria
                <br />
                <span className="font-sans text-3xl text-primary font-bold">Key attributes</span>
                </h2><br/>
                <p className="font-serif text-sm font-normal">
                    <span className="font-sans text-sm text-primary-light font-normal">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel 
                    way or introduces innovative features.
                </p>
                <p className="font-serif text-sm font-normal mt-2">
                    <span className="font-sans text-sm text-primary-light font-normal">Functionality:</span> Evaluate the uniqueness and creativity of the
                    Assess how well the solution works. Does it perform its 
                    intended functions effectively and without major issues? Judges would
                    consider the completeness and robustness of the solution.
                </p>
                <p className="font-serif text-sm font-normal mt-2">
                    <span className="font-sans text-sm text-primary-light font-normal">Impact and Relevance: </span>
                    Determine the potential impact of the solution 
                    in the real world. Does it address a significant problem, and is it relevant 
                    to the target audience? Judges would assess the potential social, 
                    economic, or environmental benefits.
                </p>
                <p className="font-serif text-sm font-normal mt-2">
                    <span className="font-sans text-sm text-primary-light font-normal">Technical Complexity: </span>Evaluate the technical sophistication of the solution. 
                    Judges would consider the complexity of the code, the use of advanced 
                    technologies or algorithms, and the scalability of the solution.
                </p>
                <p className="font-serif text-sm font-normal mt-2">
                    <span className="font-sans text-sm text-primary-light font-normal">Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered 
                    to the rules and guidelines of the hackathon, including deadlines, use of 
                    specific technologies or APIs, and any other competition-specific requirements.
                </p>
            </div>
        </section>
    )
}
export default Criteria;
