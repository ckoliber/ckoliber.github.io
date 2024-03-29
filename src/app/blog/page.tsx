import type { GetStaticProps } from "next";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

import research from "@/contents/experiences/research.yaml";
import teaching from "@/contents/experiences/teaching.yaml";
import work from "@/contents/experiences/work.yaml";

// export const getStaticProps: GetStaticProps<{}> = async (context) => {
//     const res = await fetch("https://api.github.com/repos/vercel/next.js");
//     const repo = await res.json();
//     return { props: { repo } };
// };

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Blog</Text>
            </Hero>
            {/* <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Research Experiences
                    </Text>
                    <Animator manager="sequence">
                        {research.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section> */}
        </>
    );
}
