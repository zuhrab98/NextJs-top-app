import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 14 | 16 | 18;
    children: ReactNode
}