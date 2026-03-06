import { Typography, Row, Col, Card, Progress } from "antd";
import { skills } from "../data/portfolio";

const { Title } = Typography;

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Title level={2} className="section-title">
          Skills
        </Title>
        <Row gutter={[24, 24]}>
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <Col xs={24} md={8} key={group.category}>
                <Card
                  title={
                    <span>
                      <Icon style={{ marginRight: 8 }} />
                      {group.category}
                    </span>
                  }
                  hoverable
                  className="skill-card"
                >
                  {group.items.map((skill) => (
                    <div key={skill.name} style={{ marginBottom: 16 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 4,
                        }}
                      >
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress
                        percent={skill.level}
                        showInfo={false}
                        strokeColor={{
                          "0%": "#1677ff",
                          "100%": "#52c41a",
                        }}
                      />
                    </div>
                  ))}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
