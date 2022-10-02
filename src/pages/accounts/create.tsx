import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";

import { IAccount, IDistributor } from "interfaces";

export const AccountCreate = () => {
  const { formProps, saveButtonProps } = useForm<IAccount>();
  const { selectProps: distributorSelectProps } = useSelect<IDistributor>({
    resource: "distributors",
    optionLabel: "name",
    optionValue: "id",
  });

  console.log("dis: ", distributorSelectProps);

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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Distributor"
          name={["distributor"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...distributorSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
