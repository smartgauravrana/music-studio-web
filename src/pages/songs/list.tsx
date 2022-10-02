import { useMany } from "@pankod/refine-core";
import {
  List,
  TextField,
  TagField,
  DateField,
  Table,
  useTable,
  FilterDropdown,
  Select,
  ShowButton,
  useSelect,
  Space,
  EditButton,
  DeleteButton,
} from "@pankod/refine-antd";

import { ISong } from "../../interfaces";

export const SongList: React.FC = () => {
  const { tableProps } = useTable<ISong>({
    metaData: {
      populate: ["account"],
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="Song Name" />
        <Table.Column dataIndex="spotifyUrl" title="Spotify link" />
        <Table.Column dataIndex="views" title="views" />
        <Table.Column dataIndex={["account", "name"]} title="Artist" />
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField format="LLL" value={value} />}
        />

        <Table.Column<ISong>
          title="Actions"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton size="small" recordItemId={record.id} hideText />
                <EditButton size="small" recordItemId={record.id} hideText />
                <DeleteButton size="small" recordItemId={record.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};
