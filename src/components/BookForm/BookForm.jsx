import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import SubmitBtn from "../Buttons/SubmitBtn";
import css from "./BookForm.module.css";

const BookForm = () => {
  const notify = () =>
    toast.success(
      "The form has been sent successfully! We will contact you shortly.",
      {
        position: "top-right",
      }
    );

  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    date: Yup.date()
      .min(new Date(), "Date cannot be in the past!")
      .required("Please, choose a date!"),
    comment: Yup.string().max(500, "Too Long!"),
  });

  const handleSubmit = (values, actions) => {
    notify();
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Form className={css.form}>
            <Field className={css.input} name="name" type="text" placeholder="Name*" />
            <ErrorMessage className={css.error} name="name" component="span" />

            <Field className={css.input} name="email" type="email" placeholder="Email*" />
            <ErrorMessage className={css.error} name="email" component="span" />

            <Field className={css.input} name="date" type="date" placeholder="Date*" />
            <ErrorMessage className={css.error} name="date" component="span" />

            <Field className={css.comment} name="comment" as="textarea" placeholder="Comment" />
            <ErrorMessage className={css.error} name="comment" component="span" />

            <SubmitBtn>Send</SubmitBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
