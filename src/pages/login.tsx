// https://supabase-schema.vercel.app/
// supabase token: sbp_a9476c8be4789bc12bda7f1e8c5144f0c5a51565
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BsCartX } from "react-icons/bs";
import { trpc } from "../utils/trpc";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <Flex
      pos={"relative"}
      w="100vw"
      h="85vh"
      align={["start", "center"]}
      justify="center"
      mt={["8", "0"]}
      px="4"
    >
      <Center
        flexDirection={"column"}
        justifyContent={"top"}
        pos={"relative"}
        display={"flex"}
      >
        <Box
          boxSize="sm"
          opacity={"0.2"}
          pos={"relative"}
          justifyContent={"center"}
          display={"flex"}
          h={"10rem"}
        >
          <Image
            src="unimed.svg"
            fallbackSrc="../../public/unimed.svg"
            alt="unimed"
            justifyContent={"top"}
            display={"flex"}
            w={"10rem"}
            h={"10rem"}
          />
        </Box>
        <Flex
          pos="relative"
          direction="column"
          as="form"
          w={"30rem"}
          h={"15rem"}
          // maxW={360}
          bg="gray.100"
          p="8"
          borderRadius={8}
          //   onSubmit={handleLogin}
          boxShadow={"0 3px 20px rgb(0 0 0 / 0.7)"}
        >
          <Stack spacing="4">
            <Input type="text" placeholder="Usuário" flexDirection={"row"} />
            <Input type="password" placeholder="Senha" />
            <Stack
              spacing="8"
              direction={"row"}
              alignItems={"flex-end"}
              justify="center"
              paddingTop={2}
            >
              <Button
                // onClick={}
                pos="relative"
                colorScheme="cyan"
                variant="outline"
              >
                Login
              </Button>
            </Stack>
            <Center>
              <Text>Esqueceu sua senha?</Text>
              <Link ml={2}>Clique Aqui!</Link>
            </Center>
          </Stack>
        </Flex>
      </Center>
    </Flex>
  );
}
