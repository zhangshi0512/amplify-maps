/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HikeCardProps } from "./HikeCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HikesOverridesProps = {
    Hikes?: PrimitiveOverrideProps<CollectionProps>;
    HikeCard?: HikeCardProps;
} & EscapeHatchProps;
export declare type HikesProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HikeCardProps;
} & {
    overrides?: HikesOverridesProps | undefined | null;
}>;
export default function Hikes(props: HikesProps): React.ReactElement;
