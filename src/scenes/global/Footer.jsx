import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Harmonious Sparkle
          </Typography>
          <div>
            This is an open source project found on github (requires developer
            experience to set up and configure). This website provides a little
            extra functionality to allow users to easily register and manage
            their own data sets. It helps fund the open source project, so
            thanks for signing up!
          </div>
        </Box>

    <Box>
        <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
        </Typography>
        <Typography mb="30px">Careers</Typography>
        <Typography mb="30px">Our Stores</Typography>
        <Typography mb="30px">Terms & Conditions</Typography>
        <Typography mb="30px">Privacy Policy</Typography>
    </Box>
    <Box>
        <Typography variant="h4" fontWeight="bold" mb="30px">
           Customer Care
        </Typography>
        <Typography mb="30px">Help Center</Typography>
        <Typography mb="30px">Track Your Order</Typography>
        <Typography mb="30px">Bulk purchasing</Typography>
        <Typography mb="30px">Returns & Refunds</Typography>
    </Box>
    <Box width="clamp(20%, 25%, 30%)">
    <Typography variant="h4" fontWeight="bold" mb="30px">
           Contact Us
        </Typography>
        <Typography mb="30px">123 Fake Address</Typography>
        <Typography mb="30px">Email: thisIsrealemail@gmail.com</Typography>
        <Typography mb="30px">Phone: +44 123 423123</Typography>
        </Box>
                
      </Box>
    </Box>
  );
};

export default Footer;
