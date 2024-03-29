export interface HeroProps {
    children?: React.ReactNode;
    height?: string;
    image: string;
    id?: string;
}

export default function Component(props: HeroProps) {
    return (
        <section
            id={props.id}
            className="w-full flex flex-col justify-center text-center align-middle gap-8 p-4"
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: props.height || "100vh",
            }}
        >
            {props.children}
        </section>
    );
}
