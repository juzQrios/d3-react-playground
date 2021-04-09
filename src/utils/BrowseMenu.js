import {
  Menu,
  SubMenu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {Link} from 'react-router-dom';
import './BrowseMenu.css';


const BrowseMenu = () => {
  return (
    <Menu menuButton={<MenuButton>Browse</MenuButton>}>
      <SubMenu label="Bar charts">
        <MenuItem><Link to="./bar1">Bar1</Link></MenuItem>
      </SubMenu>
    </Menu>
  );
}

export default BrowseMenu;