import {
  useForm,
  Form,
  Input,
  Select,
  Edit,
  useSelect,
} from "@pankod/refine-antd";
import { IAccount, IPost } from "interfaces";

export const AccountEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IAccount>({
    metaData: {
      populate: ["distributor"],
    },
  });

  const { selectProps: categorySelectProps } = useSelect<IAccount>({
    resource: "distributors",
    optionLabel: "name",
    optionValue: "id",
    // defaultValue: queryResult?.data?.data.distributor.id,
  });

  // console.log(queryResult?.data?.data.distributor.id);

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          <Select {...categorySelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
