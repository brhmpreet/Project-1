import { Typography, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { experience } from "../data/portfolio";

const { Title, Text, Paragraph } = Typography;

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Title level={2} className="section-title">
          Experience
        </Title>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Timeline
            mode="left"
            items={experience.map((exp) => ({
              dot: <ClockCircleOutlined style={{ fontSize: 18 }} />,
              children: (
                <div className="timeline-item">
                  <Title level={4} style={{ marginBottom: 0 }}>
                    {exp.role}
                  </Title>
                  <Text type="secondary" style={{ fontSize: 15 }}>
                    {exp.company} &middot; {exp.period}
                  </Text>
                  <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                    {exp.description.map((point, i) => (
                      <li key={i}>
                        <Paragraph style={{ marginBottom: 4 }}>{point}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
