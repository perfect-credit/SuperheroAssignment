import { useHome } from "context/HomeContext";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "components";

const SuperheroSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  superpower: Yup.string().required("Superpower is required"),
  humilityScore: Yup.number()
    .min(1, "Score must be at least 1")
    .max(10, "Score must be at most 10")
    .required("Humility score is required"),
});

export const HomeView: React.FC = () => {
  const { getSuperheroes, superheroes, addSuperhero } = useHome();

  useEffect(() => {
    getSuperheroes();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      superpower: "",
      humilityScore: 1,
    },
    validationSchema: SuperheroSchema,
    onSubmit: async (values, { resetForm }) => {
      await addSuperhero(values);
      resetForm();
    },
  });

  return (
    <div className="w-full px-4 py-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3">
        <form onSubmit={formik.handleSubmit} className="w-full space-y-4">
          <Input
            name="name"
            type="text"
            placeholder="Superhero name"
            value={formik.values.name}
            onChange={formik.handleChange}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
          <Input
            name="superpower"
            type="text"
            placeholder="Superpower"
            value={formik.values.superpower}
            onChange={formik.handleChange}
            touched={formik.touched.superpower}
            error={formik.errors.superpower}
          />
          <Input
            name="humilityScore"
            type="number"
            min="1"
            max="10"
            value={formik.values.humilityScore}
            onChange={formik.handleChange}
            touched={formik.touched.humilityScore}
            error={formik.errors.humilityScore}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Add Superhero
          </button>
        </form>
      </div>

      <div className="w-full lg:w-2/3 overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Superpower</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humility Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {superheroes.map((superhero, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{superhero.name}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{superhero.superpower}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{superhero.humilityScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
