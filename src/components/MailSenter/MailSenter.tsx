import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  ListItem,
  ListItemPrefix,
  Radio,
  List,
} from "@material-tailwind/react";

import loginImage from "../../../public/OE9CEO0.jpg";
import loginBackImage from "../../../public/15273939_5590795.jpg";
import { formSubmit } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EmailSenderSchema } from "../../formValidation/Formvalidation";
import { useFormik } from "formik";

export default function MailSenter() {
  const navigate = useNavigate();

  const innitialvalue = {
    companyName: "",
    companyEmail: "",
    position: "",
  };

  const { handleSubmit, handleChange, resetForm, values, touched, errors } =
    useFormik({
      initialValues: innitialvalue,
      validationSchema: EmailSenderSchema,
      onSubmit: async (values) => {
        try {
          const response = await formSubmit(values);
          if (response?.status === 200) {
            toast.success(response.data.message);
            resetForm();
          } else {
            toast.error(response?.data.message);
          }
        } catch (error) {
          console.error(error);
        }
      },
    });

  return (
    <div
      className=" h-auto md:h-screen w-screen flex justify-center items-center "
      style={{ backgroundImage: `url(${loginBackImage})` }}
    >
      <Card className="w-[60rem] max-w-[68rem] flex-row justify-center items-center h-[42rem]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/4 shrink-0 rounded-r-none lg:block hidden"
        >
          <img
            src={loginImage}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="">
          <Typography variant="h4" color="blue-gray" className="mb-0">
            Mail Senter
          </Typography>

          <div className="bg max-h-96">
            <Card shadow={false} className="">
              <form className="mt-2 mb-2 sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Company Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="company name"
                    name="companyName"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    onChange={handleChange}
                    value={values.companyName}
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                  {touched.companyName && errors.companyName && (
                    <p className="text-red-500">{errors.companyName}</p>
                  )}
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Company Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    name="companyEmail"
                    onChange={handleChange}
                    value={values.companyEmail}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                  {touched.companyEmail && errors.companyEmail && (
                    <p className="text-red-500">{errors.companyEmail}</p>
                  )}

                  <Card>
                    <List>
                      <ListItem className="p-0">
                        <label
                          htmlFor="vertical-list-react"
                          className="flex w-full cursor-pointer items-center px-3 py-2"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              onChange={handleChange}
                              name="position"
                              value="MEAN stack developer"
                              checked={
                                values.position === "MEAN stack developer"
                              }
                              id="vertical-list-react"
                              ripple={false}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                              crossOrigin={undefined}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-blue-gray-900"
                          >
                            MEAN stack developer
                          </Typography>
                        </label>
                      </ListItem>
                      <ListItem className="p-0">
                        <label
                          htmlFor="vertical-list-vue"
                          className="flex w-full cursor-pointer items-center px-3 py-2"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              name="position"
                              id="vertical-list-vue"
                              value="Angular developer"
                              onChange={handleChange}
                              checked={values.position === "Angular developer"}
                              ripple={false}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                              crossOrigin={undefined}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-blue-gray-900"
                          >
                            Angular developer
                          </Typography>
                        </label>
                      </ListItem>
                      <ListItem className="p-0">
                        <label
                          htmlFor="vertical-list-svelte"
                          className="flex w-full cursor-pointer items-center px-3 py-2"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              name="position"
                              id="vertical-list-svelte"
                              value="Node js developer"
                              checked={values.position === "Node js developer"}
                              ripple={false}
                              onChange={handleChange}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                              crossOrigin={undefined}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-blue-gray-900"
                          >
                            Node js developer
                          </Typography>
                        </label>
                      </ListItem>
                    </List>
                    {touched.position && errors.position && (
                      <p className="text-red-500">{errors.position}</p>
                    )}
                  </Card>
                </div>

                <Button className="mt-6" fullWidth type="submit">
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  className="mt-4"
                  onClick={() => {
                    navigate(`/mailLIst`);
                  }}
                >
                  Company List
                </Button>
              </form>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
