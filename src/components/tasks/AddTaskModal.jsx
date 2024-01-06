import Modal from "../ui/Modal";
import { Form, useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming">
      <Form control={control} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <label htmlFor="title">Title</label>
      <input 
      id='title'
      className="w-full rounded-lg " type="text" {...register('name')} />
      </div>
        <button type="submit">submit</button>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
