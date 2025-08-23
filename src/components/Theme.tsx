"use client";

import { type CSSObject, Global } from "@emotion/react";
import {
    createAppTheme,
    createAppStylesBaseline,
    type AnimatorGeneralProviderSettings,
    AnimatorGeneralProvider,
    type BleepsProviderSettings,
    BleepsProvider,
    Animator,
} from "@arwes/react";

export const theme = createAppTheme({
    settings: {
        hues: {
            primary: 200,
            secondary: 80,
        },
        fontFamilies: {
            title: undefined,
            input: undefined,
            body: undefined,
            code: undefined,
            cta: undefined,
        },
    },
});

const stylesBaseline = createAppStylesBaseline(theme);

const animatorsSettings: AnimatorGeneralProviderSettings = {
    duration: {
        enter: 0.2,
        exit: 0.2,
        stagger: 0.04,
    },
};

const bleepsSettings: BleepsProviderSettings = {
    master: {
        volume: 0.9,
    },
    bleeps: {
        type: {
            sources: [{ src: "/sounds/type.webm", type: "audio/webm" }],
        },
        open: {
            sources: [{ src: "/sounds/open.webm", type: "audio/webm" }],
        },
        close: {
            sources: [{ src: "/sounds/close.webm", type: "audio/webm" }],
        },
        click: {
            sources: [{ src: "/sounds/click.webm", type: "audio/webm" }],
        },
        intro: {
            sources: [{ src: "/sounds/intro.webm", type: "audio/webm" }],
        },
        content: {
            sources: [{ src: "/sounds/content.webm", type: "audio/webm" }],
        },
        info: {
            sources: [{ src: "/sounds/info.webm", type: "audio/webm" }],
        },
        error: {
            sources: [{ src: "/sounds/error.webm", type: "audio/webm" }],
        },
        assemble: {
            sources: [{ src: "/sounds/assemble.webm", type: "audio/webm" }],
        },
    },
};

export default function Component(props: { children: React.ReactNode }) {
    return (
        <AnimatorGeneralProvider {...animatorsSettings}>
            <BleepsProvider {...bleepsSettings}>
                <Global
                    styles={{
                        ...(stylesBaseline as Record<string, CSSObject>),
                        body: {
                            lineHeight: 1.8,
                        },
                        p: {
                            display: "inline",
                        },

                        ...Object.assign(
                            {},
                            ...[
                                "primary",
                                "secondary",
                                "success",
                                "warning",
                                "error",
                                "info",
                            ].map((color) => ({
                                [`.${color}`]: {
                                    color: (theme.colors as any)[color].text(2),
                                    transitionProperty: "color",
                                    transitionDuration: "200ms",
                                    transitionTimingFunction: "ease-out",
                                    path: {
                                        transitionProperty: "color",
                                        transitionDuration: "200ms",
                                        transitionTimingFunction: "ease-out",
                                    },
                                    "[data-name=bg]": {
                                        color: (theme.colors as any)[color].bg(
                                            5,
                                            {
                                                alpha: 0.5,
                                            }
                                        ),
                                        filter: `drop-shadow(0 0 4px ${(
                                            theme.colors as any
                                        )[color].bg(5, {
                                            alpha: 0.5,
                                        })})`,
                                    },
                                    "[data-name=line]": {
                                        color: (theme.colors as any)[
                                            color
                                        ].main(5),
                                        filter: `drop-shadow(0 0 4px ${(
                                            theme.colors as any
                                        )[color].main(5)})`,
                                    },
                                },
                                [`.${color}:is(h1,h2,h3,h4,h5,h6)`]: {
                                    color: (theme.colors as any)[color].main(5),
                                    textShadow: `0 0 2px ${(
                                        theme.colors as any
                                    )[color].main(5)}`,
                                },
                                [`.${color}:is(button)`]: {
                                    color: (theme.colors as any)[color].text(2),
                                    textShadow: `0 0 2px ${(
                                        theme.colors as any
                                    )[color].text(2)}`,

                                    ":hover": {
                                        color: (theme.colors as any)[
                                            color
                                        ].text(1),
                                        textShadow: `0 0 2px ${(
                                            theme.colors as any
                                        )[color].text(1)}`,
                                        "[data-name=bg]": {
                                            color: (theme.colors as any)[
                                                color
                                            ].bg(1, {
                                                alpha: 0.5,
                                            }),
                                            filter: `drop-shadow(0 0 4px ${(
                                                theme.colors as any
                                            )[color].bg(1, {
                                                alpha: 0.5,
                                            })})`,
                                        },
                                        "[data-name=line]": {
                                            color: (theme.colors as any)[
                                                color
                                            ].main(1),
                                            filter: `drop-shadow(0 0 4px ${(
                                                theme.colors as any
                                            )[color].main(1)})`,
                                        },
                                    },
                                },
                                [`.${color}:is(figure)`]: {
                                    "[data-name=bg]": {
                                        color: (theme.colors as any)[color].bg(
                                            5,
                                            {
                                                alpha: 0.1,
                                            }
                                        ),
                                        filter: `drop-shadow(0 0 4px ${(
                                            theme.colors as any
                                        )[color].bg(5, {
                                            alpha: 0.1,
                                        })})`,
                                    },
                                },
                                [`.${color}:is(hr)`]: {
                                    backgroundColor: (theme.colors as any)[
                                        color
                                    ].main(5),
                                    boxShadow: `0 0 2px ${(theme.colors as any)[
                                        color
                                    ].main(5)}`,
                                },
                            }))
                        ),
                    }}
                />
                <Animator combine manager="stagger">
                    {props.children}
                </Animator>
            </BleepsProvider>
        </AnimatorGeneralProvider>
    );
}
