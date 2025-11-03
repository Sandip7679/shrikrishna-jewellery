import { MessageCircle } from "lucide-react";

const WhatsAppButton = ({
  phoneNumber = "919999999999", // ✅ Replace with your WhatsApp number (no + or spaces)
  message = "Hello! I'm interested in your products.", // Optional default message
}) => {
  const handleClick = () => {
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg 
                 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
