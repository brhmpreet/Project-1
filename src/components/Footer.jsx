import { Typography, Space } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { personalInfo, socialLinks } from "../data/portfolio";

const { Text } = Typography;

export default function Footer() {
  return (
    <footer className="footer">
      <Space size="large" className="footer-social">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className="social-link"
            >
              <Icon style={{ fontSize: 20 }} />
            </a>
          );
        })}
      </Space>
      <Text type="secondary" style={{ display: "block", marginTop: 12 }}>
        &copy; {new Date().getFullYear()} {personalInfo.name}. Made with{" "}
        <HeartFilled style={{ color: "#ff4d4f" }} /> and React.
      </Text>
    </footer>
  );
}
