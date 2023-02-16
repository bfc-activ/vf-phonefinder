import {
  Box,
  Button,
  Icon,
  Heading,
  Stack,
  Td,
  Tr,
  useToast,
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardBody,
  SimpleGrid,
  Tooltip,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tag,
} from "@chakra-ui/react";
import DataTable from "@components/admin/DataTable";
import useCurrentUser from "@hooks/useCurrentUser";
import api from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/Users";
import { Question } from "../types/Questions";
import { MdDelete, MdPersonAdd } from "react-icons/md";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import UserTable from "@components/admin/UserTable";
import QuestionTable from "@components/admin/QuestionTable";
import ResultTable from "@components/admin/ResultTable";
import { Result } from "@interfaces/Results";
import DataCounters from "@components/admin/DataCounters";
import UserChart from "@components/admin/UserChart";

const Admin = () => {
  dayjs.extend(relativeTime);

  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();
  const toast = useToast();

  const [users, setUsers] = useState<User[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<Result[]>([]);

  if (!currentUser || !currentUser.isAdmin) {
    navigate("/");
  }

  const fetchAdminData = () =>
    api
      .get("/admin")
      .then(({ data }) => {
        setUsers(data.users);
        setQuestions(data.questions);
        setResults(data.results);
      })
      .catch(() => {
        // Display an error toast
        toast({
          title: "Failed to fetch Admin data!",
          status: "error",
        });
      });

  // Fetch the admin data on page load
  useEffect(() => {
    fetchAdminData();

    // Cleanup function to reset the users state on unmount
    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <Box pt={12}>
      <Stack>
        <Heading size="2xl" mb={2}>
          Admin
        </Heading>
        <Heading size="md" color="gray.500">
          Manage the Vodafone PhoneFinder application.
        </Heading>
      </Stack>

      <DataCounters
        data={[
          {
            title: "Users",
            count: users.length,
          },
          {
            title: "Questions",
            count: questions.length,
          },
          {
            title: "Results",
            count: results.length,
          },
        ]}
      />

      <Tabs colorScheme="brand" isFitted>
        <TabList>
          <Tab>Users</Tab>
          <Tab>Questions</Tab>
          <Tab>Results</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UserChart users={users} />
            <UserTable users={users} onRefetch={fetchAdminData} />
          </TabPanel>
          <TabPanel>
            <QuestionTable questions={questions} />
          </TabPanel>
          <TabPanel>
            <ResultTable results={results} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Admin;
