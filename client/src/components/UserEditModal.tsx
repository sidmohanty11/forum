import { useMutation, useQuery } from "@apollo/client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  ModalFooter,
  Text,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikProps } from "formik";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { GET_PROFILE } from "../lib/getProfile";
import { BRANCHES } from "../consts/branch";
import { validateRegNo, validateStringPresent } from "../utils/validateAuth";
import { UPDATE_USER } from "../lib/updateUser";
import { FormikTypes } from "../shared/FormikTypes";

type UserEditModalValues = {
  avatarUrl: string;
  bio: string;
  branch: string;
  year: string;
  regNo: string;
}

const UserEditModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [profileInfo, setProfileInfo] = useState({
    avatarUrl: "",
    bio: "",
    branch: "",
    year: "",
    regNo: "",
  });
  const { userId } = useContext(UserContext);
  const { data, loading, error, refetch } = useQuery(GET_PROFILE, {
    variables: { userId },
  });
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (!loading && !error) {
      setProfileInfo({
        avatarUrl: data.profile.avatarUrl,
        bio: data.profile.bio,
        branch: data.profile.branch,
        year: data.profile.year,
        regNo: data.profile.regNo,
      });
    }
  }, [loading, data, error]);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit your Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            initialValues={{ ...profileInfo }}
            onSubmit={async (values, actions) => {
              const { data } = await updateUser({
                variables: {
                  userId,
                  profileInfo: {
                    bio: values.bio,
                    regNo: values.regNo,
                    branch: values.branch,
                    year: values.year,
                    avatarUrl: values.avatarUrl,
                  },
                },
              });
              if (data.updateUser.userErrors.length) {
                actions.setErrors({
                  year: data.updateUser.userErrors[0].message,
                  branch: data.updateUser.userErrors[0].message,
                  bio: data.updateUser.userErrors[0].message,
                  regNo: data.updateUser.userErrors[0].message,
                  avatarUrl: data.updateUser.userErrors[0].message,
                });
                return;
              }
              onClose();
              refetch();
            }}
          >
            {(props: FormikProps<UserEditModalValues>) => (
              <Form>
                <Field name="regNo" validate={validateRegNo}>
                  {({ field, form }: FormikTypes) => (
                    <FormControl>
                      <FormLabel mt={4} htmlFor="regNo">
                        Registration Number
                      </FormLabel>
                      <Input
                        {...field}
                        type="text"
                        id="regNo"
                        placeholder={profileInfo.regNo}
                      />
                      <Text color="red.500">{form.errors.regNo}</Text>
                    </FormControl>
                  )}
                </Field>
                <Field name="bio" validate={validateStringPresent}>
                  {({ field, form }: FormikTypes) => (
                    <FormControl>
                      <FormLabel mt={4} htmlFor="bio">
                        Bio
                      </FormLabel>
                      <Input
                        {...field}
                        type="text"
                        id="bio"
                        placeholder={profileInfo.bio}
                      />
                      <Text color="red.500">{form.errors.bio}</Text>
                    </FormControl>
                  )}
                </Field>
                <Field name="avatarUrl" validate={validateStringPresent}>
                  {({ field, form }: FormikTypes) => (
                    <FormControl>
                      <FormLabel mt={4} htmlFor="avatarUrl">
                        Avatar URL
                      </FormLabel>
                      <Input
                        {...field}
                        type="text"
                        id="avatarUrl"
                        placeholder={profileInfo.avatarUrl}
                      />
                      <Text color="red.500">{form.errors.avatarUrl}</Text>
                    </FormControl>
                  )}
                </Field>
                <Field name="branch" validate={validateStringPresent}>
                  {({ field, form }: FormikTypes) => (
                    <FormControl>
                      <FormLabel mt={4} htmlFor="branch">
                        Branch
                      </FormLabel>
                      <Select
                        {...field}
                        id="branch"
                        placeholder={profileInfo.branch}
                      >
                        (
                        {BRANCHES.map((branch) => (
                          <option value={branch} key={branch}>
                            {branch}
                          </option>
                        ))}
                        )
                      </Select>
                      <Text color="red.500">{form.errors.branch}</Text>
                    </FormControl>
                  )}
                </Field>
                <Field name="year" validate={validateStringPresent}>
                  {({ field, form }: FormikTypes) => (
                    <FormControl>
                      <FormLabel mt={4} htmlFor="year">
                        Year
                      </FormLabel>
                      <Select
                        {...field}
                        id="year"
                        placeholder={profileInfo.year}
                      >
                        <option value="1st year">1st year</option>
                        <option value="2nd year">2nd year</option>
                        <option value="3rd year">3rd year</option>
                        <option value="4th year">4th year</option>
                      </Select>
                      <Text color="red.500">{form.errors.year}</Text>
                    </FormControl>
                  )}
                </Field>
                <ModalFooter>
                  <Button
                    type="submit"
                    isLoading={props.isSubmitting}
                    colorScheme="blue"
                    mr={3}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserEditModal;
