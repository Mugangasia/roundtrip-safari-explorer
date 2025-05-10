
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in booking a safari tour." 
}: WhatsAppButtonProps) => {
  // Format phone number (remove spaces, dashes, etc.)
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  // Create WhatsApp URL with phone number and message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white w-7 h-7" />
      
      <div className="absolute right-16 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 invisible transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:visible">
        Chat with us on WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;
