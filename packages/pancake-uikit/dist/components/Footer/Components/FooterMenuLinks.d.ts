import React from "react";
import { FlexProps } from "../../Box";
interface SimpleFooterLink {
    label: string;
    href?: string;
}
export declare type LinksProps = FlexProps & {
    links: SimpleFooterLink[];
};
declare const _default: React.NamedExoticComponent<LinksProps>;
export default _default;
