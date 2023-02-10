import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import DataTable from "@components/admin/DataTable";
import useCurrentUser from "@hooks/useCurrentUser";
import api from "../api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  if (!currentUser || !currentUser.isAdmin) {
    navigate("/");
  }

  useEffect(() => {
    const res = api.get("/admin");

    console.log(res);

    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <Box pt={24}>
      <Stack>
        <Heading size="2xl" mb={2}>
          Admin
        </Heading>
        <Heading size="md" color="gray.500">
          Manage the Vodafone PhoneFinder application.
        </Heading>
      </Stack>

      <DataTable
        containerProps={{ mt: 12 }}
        headings={[{ title: "ID" }, { title: "Question" }, { title: "Answer" }]}
        bodyData={[
          {
            data: [{ text: "1" }, { text: "2" }, { text: "2" }],
            isNumeric: false,
          },
        ]}
      />
    </Box>
  );
};

export default Admin;
