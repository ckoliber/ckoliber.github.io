import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-lg">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-3">
                        <Text as="h2">About</Text>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <Frame
                            as="figure"
                            size="medium"
                            type="corners"
                            className="w-100 h-100 p-2"
                        >
                            <Image
                                alt="Personal"
                                src="/images/personal.jpg"
                                width={400}
                                height={400}
                                className="relative -z-10"
                            />
                        </Frame>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                        <Text as="h3">Who Am I</Text>
                        <Text as="p" className="mb-2">
                            I am a Full-Stack programmer and computer science
                            student, interested in cognitive science and
                            genetics, a true lover of learning who has always
                            sought more experience. I entered the field of
                            programming in 2012, initially with the aim of
                            implementing an audio and video messaging software,
                            I started to learn the concepts of network and
                            server and programming languages, the result of this
                            goal was the ChaM project and a world of new
                            experiences that It helped me find my career path
                            and focus on the Backend field. After learning and
                            doing a few Full-Stack projects, I gradually became
                            familiar with Serverless architecture and LowCode
                            and NoCode technologies, as well as the concepts of
                            cloud computing. Because in my view programming is
                            merely a tool to serve humanity, I try to spend less
                            time programming with NoCode tools and instead spend
                            more time learning basic concepts like math, logic
                            and genetics. To.
                        </Text>
                        <Text as="h3">Contact Me</Text>
                        <div className="flex flwx-row justify-between">
                            <div>
                                <Link
                                    href="https://www.linkedin.com/in/ckoliber/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faUser}
                                    />
                                    Mohammad Hosein Nemati
                                </Link>
                                <br />
                                <Link
                                    href="mailto:koliberr136a1@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faEnvelope}
                                    />
                                    koliberr136a1@gmail.com
                                </Link>
                                <br />
                                <Link
                                    href="mailto:koliberr136a1@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faPhone}
                                    />
                                    +98-937-758-8105
                                </Link>
                            </div>
                            <div>
                                <Frame
                                    as="button"
                                    size="small"
                                    type="hftagon"
                                    className="m-2 px-4 py-2"
                                >
                                    Download CV
                                </Frame>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <>
            <Hero image="/images/hero.jpg">
                <Text as="h1">I'm Mohammad Hosein Nemati</Text>
                <Text as="b">
                    A computer science student and full stack developer who is
                    mainly interested in modeling nature rules with computers
                </Text>
                <span>
                    <Link
                        className="text-inherit m-4"
                        href="mailto:koliberr136a1@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </Link>
                    <Link
                        className="text-inherit m-4"
                        href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </Link>
                    <Link
                        className="text-inherit m-4"
                        href="https://github.com/ckoliber"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Link>
                    <Link
                        className="text-inherit m-4"
                        href="https://gitlab.com/ckoliber"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGitlab} size="2x" />
                    </Link>
                    <Link
                        className="text-inherit m-4"
                        href="tel:+989377588105"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                    </Link>
                </span>
                <span>
                    <Frame
                        as="button"
                        size="small"
                        type="hftagon"
                        className="mt-8 px-8 py-4"
                    >
                        Goto Blog
                    </Frame>
                </span>
            </Hero>
            <About />
            <Hero image="/images/break_resume.jpg" height="40vh">
                <Text as="h1">Resume</Text>
            </Hero>
        </>
    );
}
