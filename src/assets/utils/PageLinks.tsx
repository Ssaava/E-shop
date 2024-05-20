import { PersonAdd } from "@mui/icons-material";
import Settings from "@mui/icons-material/Settings";
import CallIcon from "@mui/icons-material/Call";
import InfoIconOutlined from "@mui/icons-material/InfoOutlined";
/**
 * @DATA_TYPE of the data to be exported
 */
type SettingsTypes = {
  title: string;
  link: string;
  icon: JSX.Element;
};
type CompanyInfo = {
  title: string;
  infoLink: string;
  marginRight?: number;
  icon: JSX.Element;
};

/**
 * @DATA {to be exported}
 */
export const pages = ["Everything", "Women", "Men", "Accessories"];

export const settings: SettingsTypes[] = [
  {
    title: "Profile",
    link: "user-profile",
    icon: <PersonAdd fontSize="small" />,
  },

  {
    title: "Settings",
    link: "user-settings",
    icon: <Settings fontSize="small" />,
  },
];

export const companyInfo: CompanyInfo[] = [
  {
    title: "About us",
    infoLink: "about-us",
    icon: <InfoIconOutlined fontSize="small" />,
  },
  {
    title: "Contact us",
    infoLink: "contact-us",
    icon: <CallIcon fontSize="small" />,
    marginRight: 2,
  },
];
