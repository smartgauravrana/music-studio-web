import { useShow } from "@pankod/refine-core";
import { Show, Typography } from "@pankod/refine-antd";

const { Title, Text } = Typography;

export const SongShow = () => {
  const { queryResult } = useShow({
    metaData: {
      populate: ["account"],
    },
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Song Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Spotify Url</Title>
      <Text>{record?.spotifyUrl}</Text>

      <Title level={5}>Views</Title>
      <Text>{record?.views}</Text>

      <Title level={5}>Artist</Title>
      <Text>{record?.account?.name}</Text>
    </Show>
  );
};
