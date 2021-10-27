import React from "react";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";

interface SimpleFooterLink {
  label: string;
  href?: string;
}

export type LinksProps = FlexProps & { links: SimpleFooterLink[] };

const FooterMenuLinks: React.FC<LinksProps> = ({ ...props }) => (
  <Flex {...props}>
    {props.links.map((linkItem, index) => {
      const mr = index < props.links.length - 1 ? "24px" : 0;
      if (linkItem.href) {
        return (
          <Link
            external
            color="#9590A3"
            fontWeight="normal"
            key={linkItem.label}
            href={linkItem.href}
            aria-label={linkItem.label}
            mr={mr}
          >
            {linkItem.label}
          </Link>
        );
      }
      return (
        <Flex mr={mr} justifyContent="center" alignItems="center" style={{ color: "#9590A3" }}>
          {linkItem.label}
        </Flex>
      );
    })}
  </Flex>
);

export default React.memo(FooterMenuLinks, () => true);
