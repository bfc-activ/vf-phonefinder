import {
  Button,
  Tag,
  Td,
  Tooltip,
  Tr,
  useToast,
  Icon,
  Flex,
} from "@chakra-ui/react";
import DataTable from "./DataTable";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { User } from "@interfaces/Users";
import useCurrentUser from "@hooks/useCurrentUser";
import api from "@api/index";
import { MdDelete, MdPersonAdd } from "react-icons/md";
import { useState } from "react";

const UserTable = ({
  users,
  onRefetch,
}: {
  users: User[];
  onRefetch: () => void;
}) => {
  // Control the loading state of the create user button
  const [isLoadingCreateUser, setLoadingCreateUser] = useState(false);

  // Grab the current user
  const { currentUser } = useCurrentUser();

  // Add the ability to display toasts
  const toast = useToast();

  // Allow dayjs to use relative time (e.g. 2 days ago)
  dayjs.extend(relativeTime);

  // Delete a user
  const onDeleteUser = (userId: string) => {
    api
      .delete("/users/" + userId)
      .then(() => {
        // Display a success toast
        toast({
          title: "User deleted successfully!",
          status: "success",
        });

        onRefetch();
      })
      .catch(() => {
        // Display an error toast
        toast({
          title: "Failed to delete user!",
          status: "error",
        });
      });
  };

  // Create a new dummy user
  const onCreateUser = () => {
    setLoadingCreateUser(true);
    api
      .post("/admin/create-dummy-user")
      .then(() => {
        // Display a success toast
        toast({
          title: "User created successfully!",
          description: "The default password for this user is 'test123'",
          status: "success",
        });

        onRefetch();
      })
      .catch(() => {
        // Display an error toast
        toast({
          title: "Failed to create user!",
          status: "error",
        });
      })
      .finally(() => setLoadingCreateUser(false));
  };

  // Disable delete button if the user is trying to delete themselves
  const canDelete = (userId: string) => {
    return currentUser?.id === userId;
  };

  return (
    <>
      <Flex justifyContent="flex-end" mb={4}>
        <Button
          onClick={onCreateUser}
          leftIcon={<Icon as={MdPersonAdd} />}
          isLoading={isLoadingCreateUser}
        >
          Create Random User
        </Button>
      </Flex>

      <DataTable
        containerProps={{ mt: 4 }}
        headings={[
          { title: "Name" },
          { title: "Email" },
          { title: "Role" },
          { title: "Created" },
          { title: "Actions", isNumeric: true },
        ]}
        bodyData={users?.map((user) => (
          <Tr>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>
              <Tag colorScheme={user.isAdmin ? "red" : "gray"}>
                {user.isAdmin ? "Admin" : "User"}
              </Tag>
            </Td>
            <Td>
              <Tooltip
                label={dayjs(user.createdAt).format("DD/MM/YYYY HH:mm:ss")}
              >
                {dayjs(user.createdAt).fromNow()}
              </Tooltip>
            </Td>
            <Td isNumeric>
              <Button
                isDisabled={canDelete(user._id)}
                variant="outline"
                onClick={() => onDeleteUser(user._id)}
                leftIcon={<Icon as={MdDelete} />}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      />
    </>
  );
};

export default UserTable;
