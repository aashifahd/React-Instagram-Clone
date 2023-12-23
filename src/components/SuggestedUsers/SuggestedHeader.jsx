import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={4}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          aashifahd
        </Text>
      </Flex>

      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
