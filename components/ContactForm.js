import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const { Option } = Select;

const ContactForm = () => {
  const [message, setMessage] = useState({ error: false, message: "" });

  useEffect(() => {
    if (message.message !== "") {
      openNotification();
    }
  }, [message]);

  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: "Form Submission",
      description: message.message,
      icon: message.error ? (
        <SmileOutlined style={{ color: "#108ee9" }} rotate={180} />
      ) : (
        <SmileOutlined style={{ color: "#108ee9" }} />
      ),
    });
  };

  const onFinishForm = (values) => {
    setMessage({
      error: false,
      message: `Thank you for your submission, I will contact you soon ${values.fullname}.`,
    });

    window.setTimeout(() => form.resetFields(), 700);
  };

  const onFinishFailed = (errorInfo) => {
    setMessage({
      error: true,
      message: `There are ${errorInfo.errorFields.length} fields that should be looked at`,
    });
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="c-contact">
      <div className="o-container">
        <div className="o-grid o-grid--center o-grid--middle">
          <div className="o-grid__col u-8/12@md">
            <h2 className="c-contact__title">Contact Me</h2>
            <Form
              form={form}
              layout="vertical"
              name="contact"
              onFinish={onFinishForm}
              onFinishFailed={onFinishFailed}
              action="https://submit-form.com/tEaqb5NhXwYmQzXONPzHy"
              target="_self"
            >
              <Form.Item noStyle name="contact" initialValues="contact">
                <Input type="hidden" />
              </Form.Item>
              <label htmlFor="fullname">
                <Form.Item
                  name="fullname"
                  label="Full Name"
                  rules={[{ required: true, message: "Full name?" }]}
                >
                  <Input />
                </Form.Item>
              </label>
              <label htmlFor="email">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Email?" }]}
                >
                  <Input />
                </Form.Item>
              </label>
              <label htmlFor="phone">
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Phone number?",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </label>
              <label htmlFor="comments">
                <Form.Item
                  name="comments"
                  label="Comments"
                  rules={[
                    {
                      required: true,
                      message: "Tell me more",
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
              </label>
              <label htmlFor="contact_preference">
                <Form.Item
                  name="contact_preference"
                  label="How do you prefer to be contacted?"
                  rules={[
                    {
                      required: true,
                      message: "How do you prefer to be contacted?",
                    },
                  ]}
                >
                  <Select
                    placeholder="How do you prefer to be contacted?"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="email">Email</Option>
                    <Option value="whatsapp">WhatsApp</Option>
                    <Option value="linkedin">LinkedIn</Option>
                    <Option value="phone-call">Phone Call</Option>
                    <Option value="video-call">Video Call</Option>
                  </Select>
                </Form.Item>
              </label>
              <Form.Item>
                <Button
                  aria-label="Submit to contact me"
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ marginTop: "2rem" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
