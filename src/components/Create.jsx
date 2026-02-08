import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.iscomplete = false;
    data.id = nanoid();
    console.log(data);
    settodo([...todo, data]);
    reset();
    toast.success("Task added successfuly")
  };
console.log(errors)
  return (
    <div className="w-[70%]  text-white p-10 ">
      <h1 className="text-6xl font-thin mb-15">
        Set <span className="text-red-400">Reminders</span> for your <br />
        todos
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col ">
        <input
          type="text"
          {...register("task", { required: "Task can not be empty",})}
          className="text-3xl w-[70%] border-b outline-0 px-3 py-1 "
          placeholder="Enter task"
        />
        
        <small className="text-xl p-3 text-red-500">{errors?.task?.message} </small>
        <br />
        <br />
        <button className="text-2xl border py-3 px-10 mt-2 rounded font-thin bg-gray-300 text-gray-900 w-fit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;
