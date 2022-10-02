import {
  useForm,
  Form,
  Input,
  Select,
  Edit,
  useSelect,
} from "@pankod/refine-antd";
import { ISong } from "interfaces";

export const SongEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<ISong>({
    metaData: {
      populate: ["distributor"],
    },
  });

  const { selectProps: categorySelectProps } = useSelect<ISong>({
    resource: "accounts",
    optionLabel: "name",
    optionValue: "id",
  });

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
          <Select {...categorySelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
