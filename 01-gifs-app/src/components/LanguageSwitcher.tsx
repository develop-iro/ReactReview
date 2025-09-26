import { useTranslation } from "react-i18next";

const buttonStyle: React.CSSProperties = {
  margin: "0 8px",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#1976d2",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background 0.2s",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className="content-center" style={rowStyle}>
      <button style={buttonStyle} onClick={() => changeLanguage("en")}>
        English
      </button>
      <button style={buttonStyle} onClick={() => changeLanguage("es")}>
        Español
      </button>
    </div>
  );
};
