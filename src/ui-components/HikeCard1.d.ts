/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HikeCard1OverridesProps = {
    HikeCard1?: PrimitiveOverrideProps<FlexProps>;
    HikeCard140462711?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type HikeCard1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HikeCard1OverridesProps | undefined | null;
}>;
export default function HikeCard1(props: HikeCard1Props): React.ReactElement;
