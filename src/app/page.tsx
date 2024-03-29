import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";

import about from "@/contents/about.yaml";
import interests from "@/contents/interests.yaml";
import languages from "@/contents/languages.yaml";

import educations from "@/contents/educations.yaml";
import licenses from "@/contents/licenses.yaml";
import courses from "@/contents/courses.yaml";
import honors from "@/contents/honors.yaml";
import skills from "@/contents/skills.yaml";

function Home() {
    return (
        <Hero id="home" image="/images/hero.jpg">
            <Text as="h1">I&apos;m {about.name}</Text>
            <Text as="b">{about.desc}</Text>
            <span>
                <Link
                    className="text-inherit m-4"
                    href={`mailto:${about.email}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://www.linkedin.com/in/${about.linkedin}/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://github.com/${about.github}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://gitlab.com/${about.gitlab}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={about.skype}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </Link>
            </span>
            <span>
                <Link href="/assets/CV.pdf" target="_blank">
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
                        <span className="mb-4">
                            {about.summary
                                .split("\n")
                                .map((text: any, idx: number) => (
                                    <Text key={idx} as="p">
                                        {text}
                                    </Text>
                                ))}
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
                            {interests.map((item: any, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <Text as="h3">Languages</Text>
                        <ul className="mb-4">
                            {languages.map((item: any, index: number) => (
                                <li key={index}>
                                    <b>{`${item.title}: `}</b>
                                    {item.description}
                                </li>
                            ))}
                        </ul>

                        <Text as="h3">Contact Me</Text>
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div className="mb-4 md:mb-0">
                                <Link
                                    href={`https://www.linkedin.com/in/${about.linkedin}/`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faLinkedin}
                                    />
                                    {about.name}
                                </Link>
                                <br />
                                <Link
                                    href={`mailto:${about.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faEnvelope}
                                    />
                                    {about.email}
                                </Link>
                                <br />
                                <Link
                                    href={about.skype}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faSkype}
                                    />
                                    skype
                                </Link>
                            </div>
                            <div>
                                <Link href="/assets/CV.pdf" target="_blank">
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

function Resume() {
    return (
        <section id="about" className="flex flex-col items-center p-4 md:p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning mb-4">
                    Educations
                </Text>
                {educations.map((item: any, index: number) => (
                    <Card key={index} {...item} />
                ))}

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning mb-4">
                    Honors & Awards
                </Text>
                <ul>
                    {honors.map((item: any, index: number) => (
                        <li key={index}>
                            {item.title} {item.date}
                        </li>
                    ))}
                </ul>

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning mb-4">
                    Technical Skills
                </Text>
                <ul>
                    {skills.map((item: any, index: number) => (
                        <li key={index} className="w-full pr-8">
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <b>{`${item.title}: `}</b>
                                <i className="text-start md:text-end mb-2 md:mb-0">
                                    {item.skills.join(", ")}
                                </i>
                            </div>
                        </li>
                    ))}
                </ul>

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning">
                    Relevant Courses
                </Text>
                <Text as="blockquote" className="mb-4">
                    Graduate courses are indicated by *
                </Text>
                <ul className="grid grid-cols-1 md:grid-cols-2">
                    {courses.map((item: any, index: number) => (
                        <li key={index} className="w-full md:pr-8">
                            <div className="flex justify-between">
                                <b>{`${item.title}: `}</b>
                                <i>{item.grade}</i>
                            </div>
                        </li>
                    ))}
                </ul>

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning mb-4">
                    Licenses & Certifications
                </Text>
                {licenses.map((item: any, index: number) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <>
            <Home />
            <About />
            <Hero id="resume" image="/images/break_resume.jpg" height="40vh">
                <Text as="h1">Resume</Text>
            </Hero>
            <Resume />
        </>
    );
}
