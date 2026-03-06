import { useState, useMemo } from "react";
import { Typography, Row, Col, Card, Tag, Button, Segmented, Space } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { projects } from "../data/portfolio";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <Title level={2} className="section-title">
          Projects
        </Title>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Segmented
            options={allTags}
            value={filter}
            onChange={setFilter}
            size="large"
          />
        </div>
        <Row gutter={[24, 24]}>
          {filtered.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.title}>
              <Card
                hoverable
                className="project-card"
                cover={
                  <img
                    alt={project.title}
                    src={project.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                }
                actions={[
                  <Button
                    key="github"
                    type="text"
                    icon={<GithubOutlined />}
                    href={project.github}
                    target="_blank"
                  >
                    Code
                  </Button>,
                  <Button
                    key="live"
                    type="text"
                    icon={<LinkOutlined />}
                    href={project.live}
                    target="_blank"
                  >
                    Demo
                  </Button>,
                ]}
              >
                <Meta
                  title={project.title}
                  description={
                    <>
                      <Paragraph
                        ellipsis={{ rows: 2 }}
                        style={{ marginBottom: 12 }}
                      >
                        {project.description}
                      </Paragraph>
                      <Space wrap>
                        {project.tags.map((tag) => (
                          <Tag color="blue" key={tag}>
                            {tag}
                          </Tag>
                        ))}
                      </Space>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
