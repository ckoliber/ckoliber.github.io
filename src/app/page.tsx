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
            <Text as="h1">Mohammad Hossein Nemati</Text>
            <Text manager="decipher" as="b">
                Senior DevOps Engineer. Architecting Scalable & Automated
                Infrastructure.
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
                <Link href="/cv">
                    <Frame
                        as="button"
                        size="small"
                        type="hftagon"
                        className="mt-8 px-8 py-4"
                    >
                        Goto CV
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
                        <span className="mb-4 col-span-2">
                            <Text as="p">
                                I am a <b>Senior DevOps Engineer</b> with over
                                five years of experience in CI/CD,
                                Dockerization, and Infrastructure as Code. My
                                passion is to build scalable, reliable systems
                                and drive efficiency through automation.
                                I&apos;ve successfully optimized deployments for
                                systems handling millions of daily transactions
                                and managed multi-cloud infrastructure using{" "}
                                <b>Kubernetes</b>, <b>Terraform</b>, and{" "}
                                <b>Ansible</b>. I have successfully built and
                                managed scalable clusters, improved build and
                                deployment speeds, and ensured high
                                availability. My work has also included
                                standardizing CI/CD templates across 50+
                                repositories to unify deployment processes and
                                building centralized monitoring with{" "}
                                <b>Grafana</b>, <b>Prometheus</b>, and{" "}
                                <b>Loki</b>.
                            </Text>
                            <Text as="p">
                                While my core focus is on DevOps, I have a
                                strong foundation in AI and am exploring MLOps,
                                particularly in automating model training and
                                inference. I am eager to apply my skills to
                                innovative projects and collaborate with others
                                who share my vision for leveraging technology to
                                create a positive impact.
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
