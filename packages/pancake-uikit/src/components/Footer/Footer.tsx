import React from "react";
// import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
// import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  // StyledList,
  // StyledListItem,
  // StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledPrivacyLinks,
  StyledFooterMenuLinks,
} from "./styles";
import { FooterProps } from "./types";
// import { ThemeSwitcher } from "../ThemeSwitcher";
// import LangSelector from "../LangSelector/LangSelector";
// import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon } from "../Svg";
// import { Button } from "../Button";
// import { Colors } from "../..";

interface SimpleFooterLink {
  label: string;
  href?: string;
}

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
          style={{ borderBottom: "1px solid #E9EAEB" }}
        >
          <Box display={["none", null, "block"]}>
            <LogoWithTextIcon isDark width="160px" />
          </Box>
          <StyledFooterMenuLinks
            links={items as SimpleFooterLink[]}
            order={[2]}
            pb={["42px", null, "32px"]}
            mb={["0", null, "32px"]}
          />
        </Flex>

        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          // style={{ borderBottom: "1px solid #9590A3" }}
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <StyledPrivacyLinks
              order={[2]}
              pb={["42px", null, "32px"]}
              mb={["0", null, "32px"]}
              style={{ border: "none" }}
            />
          </Flex>
          <Flex
            order={[1, null, 2]}
            mb={["24px", null, "0"]}
            justifyContent="space-between"
            alignItems="center"
            borderBottom="none"
          >
            <StyledSocialLinks
              order={[2]}
              pb={["42px", null, "32px"]}
              mb={["0", null, "32px"]}
              style={{ border: "none" }}
            />
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
