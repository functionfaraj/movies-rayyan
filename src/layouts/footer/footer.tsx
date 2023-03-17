import GmailIcon from "@/icons/gmail";
import WhatsAppIcon from "@/icons/whatsapp";
import { useStyle } from "./style";

const Footer = () => {
  const { clasess } = useStyle();
  return (
    <div style={clasess.container}>
      <div style={clasess.devDoneBy}>
        تم تصميم وتطوير التطبيق من قبل شركة{" "}
        <span style={clasess.ouchbox}>
          ouchbox<span style={clasess.io}>.io</span>
        </span>{" "}
      </div>

      <div style={clasess.containerBody}>
        <div style={clasess.joinApp}>سياسة الخصوصية</div>
        <div style={clasess.joinApp}>الاشتراك في التطبيق</div>
        <div style={clasess.phone}>
          <WhatsAppIcon />
          +970 (0) 59-4036365
        </div>
        <div style={clasess.serviceContainer}>
          <div>
            <GmailIcon />
          </div>
          <div>
            <span style={clasess.service}>Service@</span>
            <span style={clasess.ouchbox}>ouchbox</span>
            <span style={clasess.io}>.io</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Footer };
