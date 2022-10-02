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

import { IAccount } from "../../interfaces";

export const AccountList: React.FC = () => {
  const { tableProps } = useTable<IAccount>({
    metaData: {
      populate: ["distributor"],
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="Artist" />
        <Table.Column dataIndex="username" title="Username" />
        <Table.Column dataIndex="password" title="Password" />
        <Table.Column dataIndex={["distributor", "name"]} title="Distributor" />
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField format="LLL" value={value} />}
        />

        <Table.Column<IAccount>
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
