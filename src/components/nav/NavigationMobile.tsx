import { Menu, MenuItem } from '@mui/joy'

export const NavigationMobile = () => {
  return (
    <Menu
      id="basic-menu"
      // anchorEl={anchorEl}
      open={true}
      // aria-labelledby="basic-demo-button"

      onClose={() => {
        console.log('close')
      }}>
      <MenuItem>Profile</MenuItem>
      <MenuItem onClick={() => {}}>My account</MenuItem>
      <MenuItem onClick={() => {}}>Logout</MenuItem>
    </Menu>
  )
}
