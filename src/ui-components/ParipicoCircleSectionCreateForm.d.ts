/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ParipicoCircleSectionCreateFormInputValues = {
    section?: string;
};
export declare type ParipicoCircleSectionCreateFormValidationValues = {
    section?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParipicoCircleSectionCreateFormOverridesProps = {
    ParipicoCircleSectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    section?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParipicoCircleSectionCreateFormProps = React.PropsWithChildren<{
    overrides?: ParipicoCircleSectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ParipicoCircleSectionCreateFormInputValues) => ParipicoCircleSectionCreateFormInputValues;
    onSuccess?: (fields: ParipicoCircleSectionCreateFormInputValues) => void;
    onError?: (fields: ParipicoCircleSectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParipicoCircleSectionCreateFormInputValues) => ParipicoCircleSectionCreateFormInputValues;
    onValidate?: ParipicoCircleSectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ParipicoCircleSectionCreateForm(props: ParipicoCircleSectionCreateFormProps): React.ReactElement;
