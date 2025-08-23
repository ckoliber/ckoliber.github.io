import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <Hero id="home" image="/images/hero.jpg">
            <Text as="h1">I am Mohammad Hossein Nemati</Text>
            <Text as="b">
                A DevOps expert, Architecting Scalable Solutions and Automating
                Success
            </Text>
            <span>
                <Link
                    className="text-inherit m-4"
                    href={`mailto:ckoliber@gmail.com`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://www.linkedin.com/in/ckoliber/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://github.com/ckoliber`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://gitlab.com/ckoliber`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </Link>
            </span>
            <span>
                <Link
                    href="/assets/Mohammad_Hossein_Nemati_CV_en.pdf"
                    target="_blank"
                >
                    <Frame
                        as="button"
                        size="small"
                        type="hftagon"
                        className="mt-8 px-8 py-4"
                    >
                        Download CV
                    </Frame>
                </Link>
            </span>
        </Hero>
    );
}

function About() {
    return (
        <section id="about" className="flex flex-col items-center p-4 md:p-8">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-3">
                        <Text as="h2">About</Text>
                        <span className="mb-4 col-span-2">
                            <Text as="p">
                                I am a passionate software engineer specializing
                                in DevOps, AI, and Full-Stack development. My
                                journey in tech began in 2013 with the creation
                                of{" "}
                                <a
                                    href="https://github.com/ckoliber/cham"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ChaM
                                </a>{" "}
                                (Chapar Messenger), an experience that sparked
                                my deep interest in programming and networking.
                            </Text>
                            <Text as="p">
                                Over the years, I&apos;ve contributed to major
                                enterprise projects, including the ManagedFunds
                                system at TIS, CCS at Mobtaker Darya, and the
                                Shahin system. Leveraging cutting-edge
                                technologies like React Native and Hasura,
                                I&apos;ve delivered innovative solutions across
                                various industries.
                            </Text>
                            <Text as="p">
                                As my career evolved, I shifted from development
                                to DevOps, driven by the challenge of scaling
                                systems and optimizing performance in
                                production. To build expertise, I took on DevOps
                                projects with Mobtaker Darya, Pishgam Vira, and
                                the University of Tehran, gaining hands-on
                                experience in infrastructure management and
                                CI/CD pipelines.
                            </Text>
                            <Text as="p">
                                As a Senior DevOps Engineer at Visiwise and
                                Smartech, I revolutionized infrastructure by
                                implementing CI/CD pipelines, Dockerizing
                                applications, and embracing GitOps principles.
                                My work laid the foundation for scalable,
                                reliable, and efficient systems through
                                Infrastructure as Code (IaC) practices using
                                Ansible and Terraform.
                            </Text>
                            <Text as="p">
                                With a B.S. and M.S. in Computer Science, I have
                                a strong foundation in AI, which drives my
                                interest in MLOps. I&apos;m focused on
                                automating model training, testing, and
                                inference infrastructure. I&apos;m eager to
                                apply my skills to innovative projects and
                                collaborate with others who share my vision for
                                leveraging technology to create positive impact.
                            </Text>
                        </span>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <Frame
                            as="figure"
                            size="medium"
                            type="corners"
                            className="w-100 h-100 p-2 aspect-square"
                        >
                            <Image
                                alt="Personal"
                                src="/images/personal.jpg"
                                width={1000}
                                height={1000}
                            />
                        </Frame>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                        <Text as="h3">Interests</Text>
                        <ul className="mb-4">
                            <li>
                                High Performance Computing and Parallel
                                Processing
                            </li>
                            <li>DevOps and MLOps and Infrastructure as Code</li>
                            <li>Machine Learning and Deep Learning</li>
                            <li>Human Computer Interraction</li>
                        </ul>

                        <Text as="h3">Languages</Text>
                        <ul className="mb-4">
                            <li>
                                <b>Persian:</b> Native
                            </li>
                            <li>
                                <b>English:</b> Full professional proficiency
                            </li>
                            <li>
                                <b>Deutsch:</b> Elementary proficiency
                            </li>
                        </ul>

                        <Text as="h3">Contact Me</Text>
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div className="mb-4 md:mb-0">
                                <Link
                                    href={`https://www.linkedin.com/in/ckoliber/`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faLinkedin}
                                    />
                                    Mohammad Hossein Nemati
                                </Link>
                                <br />
                                <Link
                                    href={`mailto:ckoliber@gmail.com`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faEnvelope}
                                    />
                                    ckoliber@gmail.com
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/assets/Mohammad_Hossein_Nemati_CV_en.pdf"
                                    target="_blank"
                                >
                                    <Frame
                                        as="button"
                                        size="small"
                                        type="hftagon"
                                        className="px-4 py-2"
                                    >
                                        Download CV
                                    </Frame>
                                </Link>
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
            <Home />
            <About />
        </>
    );
}
