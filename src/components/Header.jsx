import React from "react";
import {
  Box,
  Stack,
  Flex,
  Link,
} from "@chakra-ui/react";
import logo from "../logo.png";



function Header() {



  return (
    <Flex
      align="center"
      justify="space-between"
      padding={3}
      wrap="wrap"
      bg="#e4242a"
      top="0"
      color="white"
    >
      <Flex align="center" mr={50} margin="15px">
        <Link href="/">
          <img src={logo} alt="" width="150px" height="150px" />
        </Link>
      </Flex>

      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        flexGrow={0.15}
      >
        <Link href="/RedAlertLive">
          <button color="white">
            <center>
              <img src={"imeges/alert.png"} alt="" width="25px" height="25px" alignItems="center" />
              התראות בזמן אמת
            </center>
          </button>
        </Link>
        <Link href="/New-Call">
          <button color="white">
            <center>
              <img src={"imeges/add.png"} alt="" width="25px" height="25px" alignItems="center" />
              פתיחת קריאה
            </center>
          </button>
        </Link>
        <Link href="/Fast-Call">
          <button color="white">
            <center>
              <img src={"imeges/record.png"} alt="" width="25px" height="25px" alignItems="center" />
              קריאה מהירה
            </center>
          </button>
        </Link>
      </Stack>

      <Box
        direction="row"
        spacing={5}
        alignItems="center"
      >
        <Link href="/">
          <button color="white">
            <center>
              <img src={"imeges/home.png"} alt="" width="25px" height="25px" alignItems="center" />
              בית
            </center>
          </button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;