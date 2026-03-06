import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { navItems } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [current, setCurrent] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  const handleClick = (e) => {
    setCurrent(e.key);
    scrollTo(e.key);
    setDrawerOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => scrollTo("home")}>
          Portfolio
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          onClick={handleClick}
          items={navItems}
          className="navbar-menu-desktop"
          style={{ flex: 1, justifyContent: "flex-end", borderBottom: "none" }}
        />

        <Button
          type="text"
          icon={isDark ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle dark mode"
        />

        <Button
          className="navbar-menu-toggle"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="vertical"
          selectedKeys={[current]}
          onClick={handleClick}
          items={navItems}
          style={{ borderInlineEnd: "none" }}
        />
      </Drawer>
    </header>
  );
}
