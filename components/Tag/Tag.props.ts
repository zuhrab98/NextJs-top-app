import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 's' | 'm'
    color?: 'grey' | 'ghost' | 'red' | 'primary' | 'green'
    href?: string
    children: ReactNode;
}