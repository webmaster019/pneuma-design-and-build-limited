import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className="p-4">
           <div className="d-flex flex-column">
            <span className="fw-bold lg-text">Our Recent Projects</span>

            <span>Best Project of the Years</span>
           </div>

           <div className="row justify-content-center gap-4">
                <div className="col-12 col-xl-3 col-lg-3 card p-4">
                    <div className="d-flex flex-column justify-content-center">
                        <Image
                            src="/images/services-right-cover.png"
                            alt="logo"
                            width={433}
                            height={263}
                        />

                        <div className="card-body">
                            <span className="fw-bold">Sobha Hearland II Villas</span>

                            <p className="pt-2">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>

                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-3 col-lg-3 card p-4">
                    <div className="d-flex flex-column justify-content-center">
                        <Image
                            src="/images/services-left-cover.png"
                            alt="logo"
                            width={433}
                            height={263}
                        />

                        <div className="card-body">
                            <span className="fw-bold">Sobha Hearland II Villas</span>

                            <p className="pt-2">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>

                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-3 col-lg-3 card p-4">
                    <div className="d-flex flex-column justify-content-center">
                        <Image
                            src="/images/home-background.png"
                            alt="logo"
                            width={433}
                            height={263}
                        />

                        <div className="card-body">
                            <span className="fw-bold">Sobha Hearland II Villas</span>

                            <p className="pt-2">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>

                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Projects;