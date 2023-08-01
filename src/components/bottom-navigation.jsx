import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BottomNavigation as BottomNavigationZmpUI, Icon } from "zmp-ui";
import { PATH_NAME } from "../constants/router";
import { useVirtualKeyboardVisible } from "../hooks/useVirtualKeyboardVisible";

const tabs = {
  [`${PATH_NAME.HOME}`]: {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
    activeIcon: <Icon icon="zi-home" className="text-primary" />,
  },
  [`${PATH_NAME.TRIP}`]: {
    label: "Chuyến đi của bạn",
    icon: <Icon icon="zi-note" />,
    activeIcon: <Icon icon="zi-note" className="text-primary" />,
  },
  [`${PATH_NAME.NOTIFICATION}`]: {
    label: "Thông báo",
    icon: <Icon icon="zi-notif" />,
    activeIcon: <Icon icon="zi-notif" className="text-primary" />,
  },
  [`${PATH_NAME.USER}`]: {
    label: "Cá nhân",
    icon: <Icon icon="zi-user" />,
    activeIcon: <Icon icon="zi-user" className="text-primary" />,
  },
};

export const NO_BOTTOM_NAVIGATION_PAGES = [];

export const SHOW_BOTTOM_NAVIGATION_PAGES = [
  PATH_NAME.HOME,
  PATH_NAME.TRIP,
  PATH_NAME.NOTIFICATION,
  PATH_NAME.USER,
];

export const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("/");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleActive();
  }, [location.pathname]);

  const handleActive = () => {
    setActiveTab(location.pathname);
  };

  const showBottomNav = useMemo(() => {
    return SHOW_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (showBottomNav || keyboardVisible) {
    return (
      <BottomNavigationZmpUI
        id="footer"
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        className="z-50"
      >
        {Object.keys(tabs).map((path) => (
          <BottomNavigationZmpUI.Item
            className="justify-center"
            key={path}
            // label={tabs[path].label}
            icon={tabs[path].icon}
            activeIcon={tabs[path].activeIcon}
            onClick={() => navigate(path)}
          />
        ))}
      </BottomNavigationZmpUI>
    );
  }

  return <></>;
};
