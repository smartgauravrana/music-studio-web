import { useShow, useOne } from "@pankod/refine-core";
import { Show, Typography, Tag, DateField } from "@pankod/refine-antd";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const DistributorShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Url</Title>
      <Text>
        <Tag>{record?.url}</Tag>
      </Text>

      <Title level={5}>Created At</Title>
      <DateField format="LLL" value={record?.createdAt} />
    </Show>
  );
};
