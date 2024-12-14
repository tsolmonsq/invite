'use client';
import { Button, Layout, Menu, theme } from "antd"; // Ant Design-ийн компонентыг импортлон авна
import { usePathname, useRouter } from "next/navigation"; // next/navigation-с pathname болон router ашиглана
import { CalendarOutlined, CheckCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'; // Ant Design-ийн icon-уудыг импортлон авна
import { useEffect, useState } from "react"; // useEffect болон useState hook-уудыг ашиглана

const { Sider, Content } = Layout;    // Layout компонентыг ашиглан Sider болон Content-г задлана

// ApNavbar компонент
const ApNavbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter(); // useRouter hook ашиглан page руу шилжих
  const pathname = usePathname(); // Хуудасны pathname-г авна

  const [collapsed, setCollapsed] = useState(false);    // Sider-ийн багассан эсэхийг хянах state

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  // Menu-н item-уудыг тодорхойлно
  const menuItems = [
    { key: '/events', label: 'Миний эвентүүд', icon: <CalendarOutlined /> }, // Эвентүүдийн хуудсыг зааж буй холбоос
    { key: '/events/user', label: 'Хувийн мэдээлэл', icon: <UserOutlined /> }, // Хувийн мэдээлэл хуудсыг зааж буй холбоос
    { key: '/events/password', label: 'Нууц үг солих', icon: <CheckCircleOutlined /> }, // Нууц үг солих хуудсыг зааж буй холбоос
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);   // key ашиглан тухайн хуудас руу шилжих
  };

  // Хэмжээ өөрчлөгдөх үед багасах эсэхийг шалгах effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {   // Хэрэв дэлгэцийн өргөн 768px-аас бага бол Sider багасна
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();   // Эхэндээ хэмжээг шалгана
    window.addEventListener('resize', handleResize); // Дэлгэцийн хэмжээ өөрчлөгдсөн тохиолдолд handleResize-г дуудах
    return () => window.removeEventListener('resize', handleResize); // Компонент устах үед event listener-ийг цуцална
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sider компонент */}
      <Sider className="bg-myGray pt-8"
        trigger={null} // Sider-ийн нууцлах товчлуурыг устгана
        collapsible // Sider-ийг багасгаж өргөжүүлэх боломжтой
        collapsed={collapsed} // collapsed state ашиглан Sider багассан эсэхийг хянах
        width={300} // Sider-ийн өргөн
      >
        {/* Menu компонент */}
        <Menu className="bg-myGray custom-menu"
          mode="inline"
          defaultSelectedKeys={['1']} // Эхлээд сонгогдсон цэс
          selectedKeys={[pathname]} // Одоо сонгогдсон цэсийг pathname-р дамжуулна
          items={menuItems} // Менюийн цэснүүд
          onClick={handleMenuClick} // Цэсийг дарах үед page руу шилжих
        />
      </Sider>
      <Layout>
        {/* Sider-ийн багасах товч */}
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} // Багассан эсэхээс хамааран icon солигдоно
          onClick={() => setCollapsed(!collapsed)} // Багасах эсвэл өргөжих товчийг дарахад collapsed state-г өөрчилнө
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
