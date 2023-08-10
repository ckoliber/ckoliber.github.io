"use client";

import {
    Animated,
    type AnimatedProps as Props,
    Illuminator,
    FrameSVGLines,
    type FrameSVGLinesProps,
    FrameSVGNefrex,
    type FrameSVGNefrexProps,
    FrameSVGKranox,
    type FrameSVGKranoxProps,
    FrameSVGOctagon,
    type FrameSVGOctagonProps,
    FrameSVGCorners,
    type FrameSVGCornersProps,
    FrameSVGUnderline,
    type FrameSVGUnderlineProps,
    createFrameKranoxClip,
    createFrameOctagonClip,
    useFrameSVGAssemblingAnimation,
    useBleeps,
} from "@arwes/react";

import { useRef } from "react";

type Color = "primary" | "secondary" | "success" | "warning" | "error" | "info";
type Size = "small" | "medium" | "large";
type Type =
    | "lines"
    | "nefrex"
    | "kranox"
    | "neranox"
    | "octagon"
    | "hftagon"
    | "corners"
    | "underline";
export interface AnimatedProps extends Props {
    contentClass?: string;
    illuminator?: number;
    onClick?: any;
    color?: Color;
    type?: Type;
    size?: Size;
}

const createFrame = (type?: Type, size?: Size) => {
    const sizure = ["small", "medium", "large"].indexOf(size || "");

    if (type === "lines") {
        const frameProps: FrameSVGLinesProps = {
            strokeWidth: [2, 3, 4][sizure],
            largeLineWidth: [2, 3, 4][sizure],
            smallLineWidth: [3, 4, 5][sizure],
            smallLineLength: [16, 32, 64][sizure],
        };

        return {
            FrameComponent: FrameSVGLines,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: 0,
                rightBottom: false,
                leftBottom: false,
                rightTop: false,
                leftTop: false,
            }),
        };
    }

    if (type === "nefrex") {
        const frameProps: FrameSVGNefrexProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            smallLineLength: [16, 32, 64][sizure],
            largeLineLength: [64, 128, 256][sizure],
        };

        return {
            FrameComponent: FrameSVGNefrex,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
                leftBottom: false,
                rightTop: false,
            }),
        };
    }

    if (type === "kranox") {
        const frameProps: FrameSVGKranoxProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            smallLineLength: [16, 32, 64][sizure],
            largeLineLength: [64, 128, 256][sizure],
        };

        return {
            FrameComponent: FrameSVGKranox,
            frameProps: frameProps as any,
            frameClip: createFrameKranoxClip({
                squareSize: frameProps.squareSize,
            }),
        };
    }

    if (type === "neranox") {
        const frameProps: FrameSVGKranoxProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            smallLineLength: [16, 32, 64][sizure],
            largeLineLength: [64, 128, 256][sizure],
        };

        // TODO
        return {
            FrameComponent: FrameSVGKranox,
            frameProps: frameProps as any,
            frameClip: createFrameKranoxClip({
                squareSize: frameProps.squareSize,
            }),
        };
    }

    if (type === "octagon") {
        const frameProps: FrameSVGOctagonProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
        };

        return {
            FrameComponent: FrameSVGOctagon,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
            }),
        };
    }

    if (type === "hftagon") {
        const frameProps: FrameSVGOctagonProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            leftBottom: false,
            rightTop: false,
        };

        return {
            FrameComponent: FrameSVGOctagon,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
                leftBottom: false,
                rightTop: false,
            }),
        };
    }

    if (type === "corners") {
        const frameProps: FrameSVGCornersProps = {
            strokeWidth: [2, 3, 4][sizure],
            cornerLength: [16, 32, 64][sizure],
        };

        return {
            FrameComponent: FrameSVGCorners,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: 0,
                rightBottom: false,
                leftBottom: false,
                rightTop: false,
                leftTop: false,
            }),
        };
    }

    if (type === "underline") {
        const frameProps: FrameSVGUnderlineProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
        };

        return {
            FrameComponent: FrameSVGUnderline,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
                leftBottom: false,
                rightTop: false,
                leftTop: false,
            }),
        };
    }

    return {};
};

export default function Component(props: AnimatedProps) {
    const { contentClass, illuminator, color, type, size, ...rest } = props;
    const { FrameComponent, frameProps, frameClip } = createFrame(type, size);

    const bleeps = useBleeps();
    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    return (
        <Animated
            {...rest}
            style={{ clipPath: frameClip }}
            className={`${props.className} relative root ${color}`}
            onClick={() => {
                if (props.as === "button") {
                    bleeps.click?.play();
                    props.onClick?.();
                }
            }}
        >
            {illuminator && (
                <Illuminator
                    color="hsl(180 50% 50% / 20%)"
                    size={illuminator}
                />
            )}
            {FrameComponent && (
                <FrameComponent
                    {...frameProps}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}
            <div className={`${contentClass} relative content`}>
                {props.children}
            </div>
        </Animated>
    );
}