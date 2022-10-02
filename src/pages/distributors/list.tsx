import {
  List,
  TextField,
  DateField,
  Table,
  useTable,
  ShowButton,
  Space,
  EditButton,
  DeleteButton,
} from "@pankod/refine-antd";

import { IDistributor } from "../../interfaces";

export const DistributorList: React.FC = () => {
  const { tableProps } = useTable<IDistributor>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="name" />
        <Table.Column
          dataIndex="url"
          title="url"
          render={(value) => (
            <TextField
              value={value}
              onClick={() => window.open(value, "_blank")}
              className="text-blue-500 cursor-pointer"
            />
          )}
        />
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value) => <DateField format="LLL" value={value} />}
        />

        <Table.Column<IDistributor>
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
