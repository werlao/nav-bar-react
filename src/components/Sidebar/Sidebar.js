import React, { useContext, useRef, useState } from "react";
import { logoPNG } from "../../assets";
import { AiOutlineSearch, AiOutlineHome, AiOutlineApartment, AiOutlineSetting, AiOutlineLeft } from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { 
    SDivider, 
    SLink, 
    SLinkContainer, 
    SLinkIcon, 
    SLinkLabel, 
    SLinkNotification, 
    SLogo, 
    SSearch, 
    SSearchIcon, 
    SSidebar, 
    SSidebarButton, 
    STheme,
    SThemeLabel,
    SThemeToggler,
    StoggleThumb
} from "./styles";

const Sidebar = () => {
    const searchref = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [ sidebarOpen, setSidebarOpen ] = useState(false);
    const { pathName } = useLocation();

    const searchClickHandler = () => {
        if(!sidebarOpen) {
            setSidebarOpen(true);
            searchref.current.focus();
        } else {

        }
    }

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={ logoPNG } alt="logo" />
            </SLogo>
            <SSearch onClick={searchClickHandler} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input ref={searchref} placeholder="Pesquisar" style={!sidebarOpen ? { width: 0, padding: 0 } : {}} />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathName === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {!!notification && (<SLinkNotification>{notification}</SLinkNotification>)}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Modo Escuro</SThemeLabel>}
                <SThemeToggler 
                    isActive={theme === 'dark'}
                    onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
                >
                    <StoggleThumb style={theme === 'dark' ? {right: "1px"} : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "Estatisticas",
        icon: <MdOutlineAnalytics />,
        to: "/statistics",
        notification: 3,
    },
    {
        label: "Clientes",
        icon: <BsPeople />,
        to: "/customers",
        notification: 0,
    },
    {
        label: "Diagramas",
        icon: <AiOutlineApartment />,
        to: "/diagrams",
        notification: 1,
    },
];

const secondaryLinksArray = [
    {
        label: "Configurações",
        icon: <AiOutlineSetting />,
    },
    {
        label: "Sair",
        icon: <MdLogout />,
    },
];

export default Sidebar;