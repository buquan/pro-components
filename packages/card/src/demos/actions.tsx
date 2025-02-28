import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <ProCard
        title="Actions 操作项"
        style={{ maxWidth: 300 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>

      <ProCard
        title="单独的 Actions 操作项"
        style={{ maxWidth: 300 }}
        actions={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
            }}
          >
            <SettingOutlined key="setting" />
            设置
          </div>
        }
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>

      <ProCard title="无 Actions 操作项" style={{ maxWidth: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </Space>
  );
};
