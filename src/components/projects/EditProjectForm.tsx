import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ProjectFromData } from "../../types";
import ProjectForm from "./ProjectForm";

type EditProjectFromProps = {
  data: ProjectFromData;
};

export default function EditProjectForm({ data }: EditProjectFromProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: data.projectName,
      clientName: data.clientName,
      description: data.description,
    },
  });

  const handleForm = () => {};

  return (
    <>
      {" "}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear proyecto</h1>
        <p className="text-2xl font-ligth text-gray-500 mt-5">
          Completa el formulario para crear un proyecto
        </p>
        <nav className="my-5">
          <Link
            to="/"
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-color"
          >
            Volver a projectos
          </Link>
        </nav>
        <form
          onSubmit={handleSubmit(handleForm)}
          className=" mt-10 bg-white shadow-lg p-10 rounded-lg"
          noValidate
        >
          <ProjectForm register={register} errors={errors} />
          <input
            type="submit"
            value={data.clientName}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
