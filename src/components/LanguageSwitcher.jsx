import { useEffect } from "react";

export default function LanguageSwitcher() {
  useEffect(() => {
    // add google translate script dynamically
    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    // define the callback for Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,te,bn,gu,ta,ml,or",
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };

    addTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
        top: "85px",
        // bottom:"1px",
        right: "15px",
        zIndex: 15,
        background: "white",
        borderRadius: "8px",
        padding: "6px 10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
        // width:"170px"
      }}
    ></div>
  );
}
