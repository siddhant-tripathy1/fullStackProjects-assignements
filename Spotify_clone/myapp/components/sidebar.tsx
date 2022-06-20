import NextImage from 'next/image'
import NextLink from "next/link"
import {
    List,
    Box,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
  } from '@chakra-ui/layout'
  import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite,
  } from 'react-icons/md'
  const navMenu = [ 
    {
      name: "Your Libraray ",
      icon: MdLibraryMusic,
      route:"/library"
    },
    {
      name: "Home ",
      icon: MdHome,
      route:"/"
    },
    {
      name: "search ",
      icon: MdSearch,
      route:"/search"
    }
  ]
  const songs = [ 
   {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
   },
   {
    name: "Liked Songs",
    icon: MdFavorite,
    route: "/favorites",
   },
   
  ]
const Playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`); 
const Sidebar = () => {
return (
    
  <Box 
      width= "100%"
      height="  calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray" >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/Music-Player.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px" > 
      <List spacing={2}>
            {navMenu.map((menu) => {
              return(
          <ListItem paddingX = "20px" fontsize="16px" key={menu.name}>
            <LinkBox>
            <NextLink href = {menu.route} passHref>
            <LinkOverlay>
            <ListIcon as={menu.icon} color="white" marginRight="20px"/>
            {menu.name}
            </LinkOverlay>
            </NextLink>
            </LinkBox>
          </ListItem>
        )})}
      </List>
        </Box>
        <Box marginY="20px">
        <List spacing={2}>
            {songs.map((menu) => {
              return(
          <ListItem paddingX = "20px" fontsize="16px" key={menu.name}>
            <LinkBox>
            <NextLink href = {menu.route} passHref>
            <LinkOverlay>
            <ListIcon as={menu.icon} color="white" marginRight="20px"/>
            {menu.name}
            </LinkOverlay>
            </NextLink>
            </LinkBox>
          </ListItem>
        )})}
      </List>
        </Box>
        <Divider color="grey.800" />
        <Box height="60%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {Playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/" passHref>
                  <LinkOverlay>
                  {playlist}
                  </LinkOverlay>
                </NextLink>
                </LinkBox>
              </ListItem>
             ))}
             </List>
       </Box>
    </Box>
   </Box>

)    
};

export default Sidebar;
