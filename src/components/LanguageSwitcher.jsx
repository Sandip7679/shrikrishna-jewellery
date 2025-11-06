// import { useEffect } from "react";

// export default function LanguageSwitcher() {
//   useEffect(() => {
//     // add google translate script dynamically
//     const addTranslateScript = () => {
//       const script = document.createElement("script");
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       document.body.appendChild(script);
//     };

//     // define the callback for Google Translate
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,hi,te,bn,gu,ta,ml,or",
//           layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
//         },
//         "google_translate_element"
//       );
//     };

//     addTranslateScript();
//   }, []);

//   return (
//     <div
//       id="google_translate_element"
//       style={{
//         position: "fixed",
//         top: "85px",
//         // bottom:"1px",
//         right: "15px",
//         zIndex: 15,
//         background: "white",
//         borderRadius: "8px",
//         padding: "6px 10px",
//         boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
//         // width:"170px"
//       }}
//     ></div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Globe } from "lucide-react";

// export default function LanguageSwitcher() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // add google translate script dynamically
//     const addTranslateScript = () => {
//       const script = document.createElement("script");
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       document.body.appendChild(script);
//     };

//     // define the callback for Google Translate
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,hi,bn,ta,te,ml,gu,or",
//           layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
//         },
//         "google_translate_element"
//       );
//     };

//     addTranslateScript();
//   }, []);

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setVisible(!visible)}
//         title="Change Language"
//         className="fixed bottom-6 right-6 z-50 bg-amber-600 text-white rounded-full p-3 shadow-lg hover:bg-amber-700 transition"
//       >
//         <Globe size={22} />
//       </button>

//       {/* Popup Language Box */}
//       {visible && (
//         <div
//           id="google_translate_element"
//           className="fixed bottom-20 right-6 z-50 bg-white rounded-lg shadow-xl p-3 border border-gray-200 transition-all duration-300"
//           style={{
//             width: "170px",
//           }}
//         ></div>
//       )}
//     </>
//   );
// }



import { useEffect, useState, useRef } from "react";
import { Globe, Globe2, Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    // Load Google Translate script once
    if (window.googleTranslateScriptAdded) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,bn,ta,te,ml,gu,or",
          layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
        },
        "google_translate_element"
      );
      setLoaded(true);
    };

    document.body.appendChild(script);
    window.googleTranslateScriptAdded = true;
  }, []);

  // 🧠 Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    if (visible) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [visible]);

  return (
    <div className="relative" ref={boxRef}>
      {/* 🌐 Language Icon Button */}
      <button
        onClick={() => setVisible(!visible)}
        title="Change Language"
        className="z-[9999] rounded-full hover:text-amber-700 transition flex"
      >
        <Globe size={18} className="mt-1 mr-1"/> Language
        {/* <Globe2 size={20} /> */}
      </button>

      {/* <button
        onClick={() => setVisible(!visible)}
        title="Change Language"
        className="z-[10] flex items-center gap-1 text-gray-700 hover:text-amber-700 transition"
      >
        <Languages size={20} />
        <span className="hidden sm:inline text-sm font-medium">Language</span>
      </button> */}

      {/* 🪄 Google Translate Box */}
      <div
        id="google_translate_element"
        className={`fixed top-20 right-6 bg-white rounded-lg shadow-xl p-3 border border-gray-200 transition-all duration-300 ${visible
            ? "opacity-100 z-[999] pointer-events-auto translate-y-0"
            : "opacity-0 -z-10 pointer-events-none translate-y-3"
          }`}
        style={{ width: "180px" }}
      >
        {!loaded && (
          <div className="flex flex-col items-center justify-center text-gray-600 text-sm py-3">
            <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
            <span>Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}




// import { useEffect, useState, useRef } from "react";
// import { Globe } from "lucide-react";

// export default function HeaderLanguageDropdown() {
//   const [loaded, setLoaded] = useState(false);
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Load Google script only once
//     if (window.googleTranslateScriptAdded) {
//       setLoaded(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,hi,bn,ta,te,ml,gu,or",
//           layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
//         },
//         "google_translate_element"
//       );
//       setLoaded(true);
//     };

//     document.body.appendChild(script);
//     window.googleTranslateScriptAdded = true;
//   }, []);

//   // Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative" ref={containerRef}>
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium transition"
//       >
//         <Globe size={18} />
//         <span>Language</span>
//         <svg
//           className={`w-4 h-4 transform transition ${open ? "rotate-180" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {/* Dropdown Panel */}
//       <div
//         className={`absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 overflow-hidden ${
//           open
//             ? "opacity-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 -translate-y-2 pointer-events-none"
//         }`}
//         style={{
//           minWidth: "180px",
//           zIndex: 9999,
//         }}
//       >
//         {!loaded ? (
//           <div className="p-3 text-center text-gray-500 text-sm">
//             <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
//             Loading...
//           </div>
//         ) : (
//           <div
//             id="google_translate_element"
//             className="p-2 cursor-pointer"
//             style={{
//               pointerEvents: "auto", // ensure iframe clickable
//               minHeight: "40px",
//             }}
//           ></div>
//         )}
//       </div>
//     </div>
//   );
// }
