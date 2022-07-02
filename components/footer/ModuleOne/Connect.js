import { Flex, Box } from "@chakra-ui/react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Text from "../../ui/Text";
import Link from "next/link";

export default function Connect() {
  return (
    <Flex flexDirection="column" mb="15px">
      <Text fontWeight="900" color="white">
        CONNECT
      </Text>
      <Flex>
        <Box fontSize="30px">
          <Link
            passHref
            href="https://www.linkedin.com/in/educación-diversa-making-change"
          >
            <a rel="noopener noreferrer" target="_blank">
              <FaLinkedin />
            </a>
          </Link>
        </Box>
        <Box fontSize="30px">
          <Link passHref href="https://www.instagram.com/educaciondiversa/">
            <a rel="noopener noreferrer" target="_blank">
              <FaInstagramSquare />
            </a>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
