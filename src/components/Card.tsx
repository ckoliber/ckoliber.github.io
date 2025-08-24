"use client";

import Image from "next/image";
import Link from "next/link";

import Animator from "./Animator";
import Frame from "./Frame";
import Modal from "./Modal";
import Text from "./Text";

export interface CardProps {
    logo?: string;
    link?: string;
    date: string;
    title: string;
    subtitle?: string;
    location?: string;
    modalable?: boolean;
    children?: React.ReactNode;
}

export default function Component(props: CardProps) {
    if (props.modalable) {
        return (
            <Frame illuminator={500} type="underline" size="small">
                {props.children ? (
                    <Modal
                        button={(onClick) => (
                            <Image
                                alt="Personal"
                                src={props.logo as any}
                                width={1000}
                                height={1000}
                                className="cursor-pointer"
                                onClick={onClick}
                            />
                        )}
                    >
                        {props.children}
                    </Modal>
                ) : (
                    <Image
                        alt="Personal"
                        src={props.logo as any}
                        width={1000}
                        height={1000}
                    />
                )}
                <div className="p-4">
                    <div className="flex flex-col justify-between">
                        {props.link ? (
                            <Link
                                href={props.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Text as="h5">{props.title}</Text>
                            </Link>
                        ) : (
                            <Text as="h5">{props.title}</Text>
                        )}
                        {props.date && <Text as="h6">{props.date}</Text>}
                    </div>
                    {props.subtitle && (
                        <div className="flex flex-col justify-between">
                            <Text as="h5" className="secondary">
                                {props.subtitle}
                            </Text>
                        </div>
                    )}
                </div>
            </Frame>
        );
    }

    return (
        <div className="my-4 gap-4 flex flex-col md:flex-row">
            {props.logo && (
                <Frame
                    className="h-full p-2 basis-full md:basis-1/3"
                    illuminator={500}
                    type="corners"
                    size="medium"
                >
                    <Image
                        alt="Personal"
                        src={props.logo}
                        width={1000}
                        height={1000}
                    />
                </Frame>
            )}

            <Frame
                className={`px-8 py-4 basis-full ${
                    props.logo && "md:basis-2/3"
                }`}
                illuminator={500}
                type="kranox"
                size="small"
            >
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    {props.link ? (
                        <Link
                            href={props.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Text as="h3">{props.title}</Text>
                        </Link>
                    ) : (
                        <Text as="h3">{props.title}</Text>
                    )}
                    {props.date && <Text as="h6">{props.date}</Text>}
                </div>
                {props.subtitle && (
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <Text as="h5" className="secondary">
                            {props.subtitle}
                        </Text>
                        {props.location && (
                            <Text as="h6" className="secondary">
                                {props.location}
                            </Text>
                        )}
                    </div>
                )}
                {props.children && (
                    <Animator manager="stagger">
                        <Frame as="hr" className="my-2" />
                        {props.children}
                    </Animator>
                )}
            </Frame>
        </div>
    );
}
