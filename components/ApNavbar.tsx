'use client';
import { Button, Layout, Menu, theme } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { CalendarOutlined, CheckCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

const { Sider, Content } = Layout;


const ApNavbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    { key: '/event', label: 'Миний эвентүүд', icon: <CalendarOutlined /> },
    { key: '/event/user', label: 'Хувийн мэдээлэл', icon: <UserOutlined /> },
    { key: '/event/password', label: 'Нууц үг солих', icon: <CheckCircleOutlined /> },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="bg-myGray pt-8"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={300}
      >
        <Menu className="bg-myGray custom-menu"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: '#000',
          }}
        />
        <Content
          style={{
            margin: '12px 24px',
            padding: 12,
            minHeight: 280,
            border: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ApNavbar;
