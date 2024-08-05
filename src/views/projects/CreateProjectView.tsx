import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ProjectFromData } from "../../types";
import { createProject } from "../../api/ProjectAPI";
import ProjectForm from "../../components/projects/ProjectForm";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

export default function CreateProjectView() {
  const navigate = useNavigate();

  const initialValues: ProjectFromData = {
    projectName: "",
    clientName: "",
    description: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { initialValues } });

  const mutation = useMutation({
    mutationFn: createProject,
    onError: (errors) => {
      toast.error(errors.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/");
    },
  });

  const handleForm = (formData: any) => mutation.mutate(formData);

  return (
    <>
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
            value="Crear proyecto"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
