import React from 'react'
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";


const DropMenu = (props) => {
        const { id , onDelete } = props ;
        return (
            <Menu>
                <MenuButton>
                    Menu <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => onDelete(id)}>Delete</MenuItem>
                </MenuList>
            </Menu>
        );

    
}
export default DropMenu;