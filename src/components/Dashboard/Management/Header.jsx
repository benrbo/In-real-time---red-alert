import React from "react";
import {
  Stack,
  Flex,
  Link,
  Box
} from "@chakra-ui/react";
import logo from "../../../logo.png";
import add from "./imeges/add.png";
import record from "./imeges/record.png";
import home from "./imeges/home.png";


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
        <Link href="Management">
          <img src={logo} alt="" width="150px" height="150px" />
        </Link>
      </Flex>

      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        flexGrow={0.15}
      >
        <Link href="/Management/#ragcall">
          <button color="white">
            <center>
              <img src={add} alt="" width="25px" height="25px" alignItems="center" />
              דיווחים על נפילות
            </center>
          </button>
        </Link>
        <Link href="/Management/#fastcall">
          <button color="white">
            <center>
              <img src={record} alt="" width="25px" height="25px" alignItems="center" />
              דיווחים מהירים
            </center>
          </button>
        </Link>
      </Stack>

      <Box
        direction="row"
        spacing={5}
        alignItems="center"
      >
        <Link href="/Management">
          <button color="white">
            <center>
              <img src={home} alt="" width="25px" height="25px" alignItems="center" />
              חזרה לראשי
            </center>
          </button>
        </Link>
      </Box>

    </Flex>
  );
};

export default Header;