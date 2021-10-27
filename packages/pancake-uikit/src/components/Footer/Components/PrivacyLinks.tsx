import React from "react";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { privacyLinks } from "../config";

export type LinksProps = FlexProps & { links: [{ label: string; href?: string }] };

const PrivacyLinks: React.FC<FlexProps> = ({ ...props }) => (
  <Flex {...props}>
    {privacyLinks.map((privacyLinkItem, index) => {
      const mr = index < privacyLinks.length - 1 ? "24px" : 0;
      if (privacyLinkItem.href) {
        return (
          <Link
            external
            color="#9590A3"
            fontWeight="normal"
            key={privacyLinkItem.label}
            href={privacyLinkItem.href}
            aria-label={privacyLinkItem.label}
            mr={mr}
          >
            {privacyLinkItem.label}
          </Link>
        );
      }
      return (
        <Flex mr={mr} justifyContent="center" alignItems="center" style={{ color: "#9590A3" }}>
          {privacyLinkItem.label}
        </Flex>
      );
    })}
  </Flex>
);

export default React.memo(PrivacyLinks, () => true);
