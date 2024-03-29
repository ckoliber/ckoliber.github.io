"use client";

import { type CSSObject, Global } from "@emotion/react";
import {
    createAppTheme,
    createAppStylesBaseline,
    type AnimatorGeneralProviderSettings,
    AnimatorGeneralProvider,
    type BleepsProviderSettings,
    BleepsProvider,
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
        enter: 0.3,
        exit: 0.3,
    },
};

const bleepsSettings: BleepsProviderSettings = {
    master: {
        volume: 0.9,
    },
    bleeps: {
        type: {
            sources: [{ src: "/sounds/type.mp3", type: "audio/mpeg" }],
        },
        click: {
            sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
        },
        intro: {
            sources: [{ src: "/sounds/intro.mp3", type: "audio/mpeg" }],
        },
        warning: {
            sources: [{ src: "/sounds/warning.mp3", type: "audio/mpeg" }],
        },
        assemble: {
            sources: [{ src: "/sounds/assemble.mp3", type: "audio/mpeg" }],
            loop: true,
        },
    },
};

export default function Component(props: { children: React.ReactNode }) {
    return (
        <>
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
                                    color: (theme.colors as any)[color].bg(5, {
                                        alpha: 0.5,
                                    }),
                                    filter: `drop-shadow(0 0 4px ${(
                                        theme.colors as any
                                    )[color].bg(5, {
                                        alpha: 0.5,
                                    })})`,
                                },
                                "[data-name=line]": {
                                    color: (theme.colors as any)[color].main(5),
                                    filter: `drop-shadow(0 0 4px ${(
                                        theme.colors as any
                                    )[color].main(5)})`,
                                },
                            },
                            [`.${color}:is(h1,h2,h3,h4,h5,h6)`]: {
                                color: (theme.colors as any)[color].main(5),
                                textShadow: `0 0 2px ${(theme.colors as any)[
                                    color
                                ].main(5)}`,
                            },
                            [`.${color}:is(button)`]: {
                                color: (theme.colors as any)[color].text(2),
                                textShadow: `0 0 2px ${(theme.colors as any)[
                                    color
                                ].text(2)}`,

                                ":hover": {
                                    color: (theme.colors as any)[color].text(1),
                                    textShadow: `0 0 2px ${(
                                        theme.colors as any
                                    )[color].text(1)}`,
                                    "[data-name=bg]": {
                                        color: (theme.colors as any)[color].bg(
                                            1,
                                            {
                                                alpha: 0.5,
                                            }
                                        ),
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
                                    color: (theme.colors as any)[color].bg(5, {
                                        alpha: 0.1,
                                    }),
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
            <AnimatorGeneralProvider {...animatorsSettings}>
                <BleepsProvider {...bleepsSettings}>
                    {props.children}
                </BleepsProvider>
            </AnimatorGeneralProvider>
        </>
    );
}
