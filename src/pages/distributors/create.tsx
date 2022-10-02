import { Create, Form, Input, useForm } from "@pankod/refine-antd";

import { IDistributor } from "interfaces";

export const DistributorCreate = () => {
  const { formProps, saveButtonProps } = useForm<IDistributor>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Url"
          name="url"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
