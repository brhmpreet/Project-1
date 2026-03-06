import { Typography, Row, Col, Avatar, Card, Statistic } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { personalInfo, aboutMe } from "../data/portfolio";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Title level={2} className="section-title">
          About Me
        </Title>
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <Avatar
              size={200}
              src={personalInfo.avatar}
              icon={<UserOutlined />}
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
            />
          </Col>
          <Col xs={24} md={16}>
            {aboutMe.bio.map((paragraph, i) => (
              <Paragraph key={i} style={{ fontSize: 16, lineHeight: 1.8 }}>
                {paragraph}
              </Paragraph>
            ))}
          </Col>
        </Row>
        {/* <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
          {aboutMe.highlights.map((item) => (
            <Col xs={12} sm={6} key={item.label}>
              <Card hoverable className="highlight-card">
                <Statistic title={item.label} value={item.value} />
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    </section>
  );
}
