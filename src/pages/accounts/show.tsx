import { useShow } from "@pankod/refine-core";
import { Show, Typography } from "@pankod/refine-antd";

const { Title, Text } = Typography;

export const AccountShow = () => {
  const { queryResult } = useShow({
    metaData: {
      populate: ["distributor"],
    },
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Artist Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Username</Title>
      <Text>{record?.username}</Text>

      <Title level={5}>Password</Title>
      <Text>{record?.password}</Text>

      <Title level={5}>Distributor</Title>
      <Text>{record?.distributor?.name}</Text>
    </Show>
  );
};
