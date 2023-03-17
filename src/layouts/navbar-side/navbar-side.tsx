import { RayyanTextInput } from "@/components";
import { useRayyanRouter, useNavBarTabs } from "@/hooks";
import SearchIcon from "@/icons/search";
import { useTranslation } from "react-i18next";
import { useStyle } from "./style";

const NavbarSide = () => {
  const { t } = useTranslation();
  const { clasess } = useStyle();
  const { tabs, onClickRoute } = useNavBarTabs();
  const { router } = useRayyanRouter();
  return (
    <div style={clasess.container}>
      <div style={clasess.searchInputContainer}>
        <RayyanTextInput
          placeholder={t("navBarSide.search")}
          Lefticon={<SearchIcon />}
        />
      </div>
      {tabs.map((tab: any) => {
        return (
          <div key={tab?.name} style={clasess.tabsContainer}>
            <div
              style={
                router?.route === tab?.route
                  ? clasess.selectedTab
                  : clasess.unSelectedTab
              }
              onClick={() => onClickRoute(tab)}
            >
              {tab?.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { NavbarSide };
