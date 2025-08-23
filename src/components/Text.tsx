"use client";

import { Animator, BleepsOnAnimator, type TextProps, Text } from "@arwes/react";

export default function Component(props: TextProps) {
    return (
        <Animator>
            <Text {...props} className={`primary ${props.className}`} fixed />
            <BleepsOnAnimator
                transitions={{
                    entering: "click",
                    exiting: "assemble",
                }}
            />
        </Animator>
    );
}
