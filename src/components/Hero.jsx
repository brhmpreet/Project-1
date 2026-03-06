import { Typography, Button, Space } from "antd";
import { DownloadOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { personalInfo } from "../data/portfolio";

const { Title, Paragraph } = Typography;

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section hero-section">
      <div className="hero-content">
        <Paragraph className="hero-greeting">Hello, I&apos;m</Paragraph>
        <Title level={1} className="hero-name">
          {personalInfo.name}
        </Title>
        <Title level={3} className="hero-title" type="secondary">
          {personalInfo.title}
        </Title>
        <Paragraph className="hero-tagline">{personalInfo.tagline}</Paragraph>
        <Space size="middle" wrap style={{ marginTop: 24 }}>
          {/* <Button
            type="primary"
            size="large"
            icon={<DownloadOutlined />}
            href={personalInfo.resumeUrl}
          >
            Download Resume
          </Button>
          <Button size="large" icon={<ArrowDownOutlined />} onClick={scrollToAbout}>
            Learn More
          </Button> */}
        </Space>
      </div>
    </section>
  );
}
