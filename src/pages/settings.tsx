//https://youtu.be/VyNaze8uYzQ
//https://codevoweb.com/setup-trpc-api-server-client-with-nextjs-and-prisma/
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  MdAccountCircle,
  MdEmail,
  MdGroupWork,
  MdLock,
  MdPhone,
  MdWork,
} from "react-icons/md";

import { BiRename } from "react-icons/bi";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "../types/layout";
import React from "react";
import type { ReactElement } from "react";
import type { SubmitHandler } from "react-hook-form";
import { UserSchema } from "../server/common/UserSchema";
import { trpc } from "../utils/trpc";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Settings: NextPageWithLayout = () => {
  const [show, setShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
  });
  const handleClick = () => setShow(!show);
  const { mutateAsync: createUser } = trpc.user.create.useMutation();

  const submitUser: SubmitHandler<z.infer<typeof UserSchema>> = async (
    data
  ) => {
    const response = await createUser(data);
    console.log(response);
    reset();
  };

  console.log(errors);

  return (
    <Flex
      pos="relative"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      borderRadius="1.6875rem"
      w="100%"
      h="98%"
      flexDir="column"
      justifyContent="space-between"
      backgroundColor="#f1f1f1 !important"
    >
      <Accordion
        allowToggle
        borderRadius="1.6875rem"
        pos="absolute"
        left="0.5rem"
        w="99%"
      >
        <AccordionItem borderRadius="1.6875rem">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <b>CRIAR ACESSO DE USUÁRIO</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box as="form" onSubmit={handleSubmit(submitUser)}>
              <HStack direction={"column"} spacing="5rem">
                <Box display="flex" flexDirection={"column"}>
                  <FormLabel>Username</FormLabel>
                  <InputGroup>
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Password"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<MdAccountCircle />}
                    />
                    <Input
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Write one username"
                      w={"20rem"}
                      h={"2rem"}
                      // aria-invalid={errors.username?.message ? "true" : "false"}
                      isInvalid={errors.username?.message ? true : false}
                      {...register("username")}
                    />
                  </InputGroup>

                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Password"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<MdLock />}
                    />
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter one password"
                      w={"20rem"}
                      h={"2rem"}
                      {...register("password")}
                    />
                    {/* {errors.password && <span>This field is required</span>} */}
                    <InputRightElement width="4.5rem" right={"5rem"}>
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Telefone</FormLabel>
                  <InputGroup size="md">
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Phone"
                      fontSize="1.2rem"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      icon={<MdPhone />}
                      mr={"0.5rem"}
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      w={"20rem"}
                      h={"2rem"}
                      {...register("telefone")}
                    />
                    {/* {errors.telefone && <span>This field is required</span>} */}
                  </InputGroup>
                  <FormLabel>Nome / Razão Social</FormLabel>
                  <InputGroup>
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Password"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<BiRename />}
                    />
                    <Input
                      type="text"
                      w={"30rem"}
                      placeholder="Write your name or Corporate Name"
                      h={"2rem"}
                      {...register("nome")}
                    />
                    {/* {errors.nome && <span>This field is required</span>} */}
                  </InputGroup>
                </Box>
                <Box display="flex" flexDirection={"column"}>
                  <FormLabel>CPF / CNPJ</FormLabel>
                  <InputGroup>
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Password"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<BsFileEarmarkPersonFill />}
                    />
                    <Input
                      type="text"
                      w={"20rem"}
                      placeholder="Write your CPF or CNPJ"
                      h={"2rem"}
                      {...register("cpf")}
                    />
                    {/* {errors.cpf && <span>This field is required</span>} */}
                  </InputGroup>
                  <FormLabel>Email Address</FormLabel>
                  <InputGroup>
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Send email"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<MdEmail />}
                    />
                    <Input
                      type="email"
                      w={"20rem"}
                      placeholder="Write your e-mail adress"
                      h={"2rem"}
                      {...register("email")}
                    />
                    {/* {errors.email && <span>This field is required</span>} */}
                  </InputGroup>
                  <FormLabel>Setor</FormLabel>
                  <InputGroup>
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Password"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<MdGroupWork />}
                    />
                    <Input
                      type="text"
                      w={"20rem"}
                      placeholder="Write your sector"
                      h={"2rem"}
                      {...register("setor")}
                    />
                    {/* {errors.setor && <span>This field is required</span>} */}
                  </InputGroup>
                  <FormLabel>Cargo</FormLabel>
                  <InputGroup>
                    <IconButton
                      variant="outline"
                      colorScheme="blackAlpha"
                      aria-label="Password"
                      w={"1.9rem"}
                      h={"1.9rem"}
                      mr={"0.5rem"}
                      icon={<MdWork />}
                    />
                    <Input
                      type="text"
                      w={"20rem"}
                      placeholder="Write your position in the company"
                      h={"2rem"}
                      {...register("cargo")}
                    />
                    {/* {errors.cargo && <span>This field is required</span>} */}
                  </InputGroup>
                </Box>
              </HStack>
              <Button
                colorScheme="teal"
                variant="outline"
                mt={"2rem"}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Register"}
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <b>LISTAGEM DE USUÁRIOS</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Settings;
