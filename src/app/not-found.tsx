import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Hero image="/images/hero.jpg">
                <div className="flex flex-col items-center">
                    <Text as="h1">Page Not Found!</Text>
                    <Link href="/">
                        <Frame
                            as="button"
                            size="small"
                            type="hftagon"
                            className="mt-8 px-8 py-4"
                        >
                            Goto Home
                        </Frame>
                    </Link>
                </div>
            </Hero>
        </>
    );
}
