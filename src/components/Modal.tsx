"use client";

import { useCallback, useEffect, useState, useRef, useId } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { Animator } from "@arwes/react";

import Frame from "./Frame";

export interface ModalProps {
    className?: string;
    children: React.ReactNode;
    button: React.ReactNode;
}

export default function Component(props: ModalProps) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const id = useId();

    const onClose = useCallback(() => {
        setShow(false);
        setTimeout(() => setOpen(false), 500);
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);

    return (
        <>
            <Frame
                as="button"
                className="m-4"
                onClick={() => {
                    setOpen(true);
                    setShow(true);
                }}
            >
                {props.button}
            </Frame>

            <Animator root active={show}>
                {open &&
                    createPortal(
                        <div
                            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
                            onClick={onClose}
                            ref={overlay}
                        >
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
                                ref={wrapper}
                            >
                                <Frame
                                    size="small"
                                    type="kranox"
                                    className="info px-8 py-4 spacing-4"
                                >
                                    <div className="w-full flex justify-end pe-2">
                                        <Frame as="button" onClick={onClose}>
                                            <FontAwesomeIcon
                                                icon={faClose}
                                                size="2x"
                                            />
                                        </Frame>
                                    </div>
                                    <Frame as="hr" className="mt-2 mb-4" />
                                    <div className={props.className}>
                                        <Animator manager="stagger">
                                            {props.children}
                                        </Animator>
                                    </div>
                                </Frame>
                            </div>
                        </div>,
                        window.document.querySelector("#modal") as any,
                        id
                    )}
            </Animator>
        </>
    );
}
