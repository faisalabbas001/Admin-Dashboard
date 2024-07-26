"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import logo from "./logo.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ArticleIcon from '@mui/icons-material/Article';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { usePathname, useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

const drawerWidth = 240;


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function Layout(props: Props) {
  const { window } = props;
  const {children}= props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [coolapes,sedCoolapes] = React.useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleCollapes = () => {
    if (!isClosing) {
        sedCoolapes(!coolapes);
    }
  };

  const router = useRouter();
  const pathname=usePathname();
  console.log(pathname);




  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
      // redirect('/api/auth/signin?callbackUrl=/client')
    }
  })


  if (session) {
    let user = session["user"];
    console.log('Session User ', user);
  }

  const userLogout = () => {
    signOut();
  }


  const drawer = (
    <div>
      <Toolbar>
          <Image src={logo} alt="logo" width={50} height={50} className=' ml-2 mr-2' />
         
      <Typography variant="h6" noWrap component="div">
           Codeing😈
          </Typography>


      </Toolbar>
      <Divider />
      <List>
        {['Dashboard', 'Analytics', 'Users', 'Projects','Records','Setting','Profile'].map((text, index) => (
          <ListItem key={text} disablePadding className={pathname.startsWith("/" + text.toLocaleLowerCase())? " text-sky-300":"text-slate-700"} onClick={()=>router.push("/" + text.toLocaleLowerCase())}>
            <ListItemButton>
              <ListItemIcon className={pathname.startsWith("/" + text.toLocaleLowerCase())? " text-sky-300":"text-slate-700"}>

                {index===0 && <DashboardIcon/>}
                {index===1 && <AnalyticsIcon/>}
                {index===2 && <PeopleAltIcon/>}
                {index===3 && < GroupWorkIcon/>}
                {index===4 && <MessageIcon/>}
                {index===5 && <SettingsIcon/>}
                {index===6 && <AccountCircleIcon/>}
             
               
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
         <ListItem disablePadding  onClick={handleCollapes} className={pathname.startsWith("/help")? " text-sky-300":"text-slate-700"}>
            <ListItemButton>
              <ListItemIcon>
            <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />

              {
                coolapes ? <ExpandLessIcon /> : <ExpandMoreIcon />
              }
            </ListItemButton>
          </ListItem>

      </List>
      <Divider />

      <Collapse in={coolapes} timeout="auto" unmountOnExit>
      <List>
        {['Library','Support', 'Faq' ].map((text, index) => (
          <ListItem key={text} disablePadding className={pathname.startsWith("/help")? " text-sky-300":"text-slate-700"}>
            <ListItemButton>
              <ListItemIcon>
               
              {index===0 && <LibraryBooksIcon/>}
                {index===1 && <ThumbUpIcon/>}
                {index===2 && <ContactSupportIcon/>}
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#FFFFFF",
          color: "#2f2f2f",
        }}
      >
        <div className="flex justify-between">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
          <div className="mt-3 mr-3 cursor-pointer" onClick={() => userLogout()}>
            <Typography variant="h6" noWrap component="div">
              <LogoutIcon /> Logout
            </Typography>
          </div>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        <main>{children}</main>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}
