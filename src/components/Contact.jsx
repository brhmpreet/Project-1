import { Typography, Row, Col, Form, Input, Button, message, Space } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { socialLinks } from "../data/portfolio";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    message.success("Thanks for reaching out! I'll get back to you soon.");
    form.resetFields();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Title level={2} className="section-title">
          Get In Touch
        </Title>
        <Row gutter={[48, 32]} justify="center">
          <Col xs={24} md={12}>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
              Have a project in mind or just want to say hello? Feel free to drop
              me a message. I&apos;m always open to discussing new opportunities
              and ideas.
            </Paragraph>
            <Space size="large" style={{ marginTop: 16 }}>
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
                    <Icon style={{ fontSize: 28 }} />
                  </a>
                );
              })}
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              size="large"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="your@email.com" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter a message" }]}
              >
                <TextArea rows={5} placeholder="Your message..." />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  block
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
}
