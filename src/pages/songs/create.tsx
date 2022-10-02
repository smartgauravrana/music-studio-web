import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";

import { ISong } from "interfaces";

export const SongCreate = () => {
  const { formProps, saveButtonProps } = useForm<ISong>();
  const { selectProps: distributorSelectProps } = useSelect({
    resource: "accounts",
    optionLabel: "name",
    optionValue: "id",
  });

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
          label="SpotifyUrl"
          name="spotifyUrl"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Views"
          name="views"

          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Artist"
          name={["account"]}
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
