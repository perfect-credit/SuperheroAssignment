import { createContext, useContext, ReactNode, useState } from "react";
import { TSuperhero } from "types";
import api from "utils/api";
import { toast } from "react-toastify";

// Define the context type
interface HomeContextType {
  addSuperhero: (superhero: TSuperhero) => Promise<void>;
  getSuperheroes: () => Promise<void>;
  superheroes: TSuperhero[];
}

// Create the context with a default value
const HomeContext = createContext<HomeContextType | undefined>(undefined);

// Create a provider component
interface HomeProviderProps {
  children: ReactNode;
}

export function HomeProvider({ children }: HomeProviderProps) {
  // Add your state management here
  const [loading, setLoading] = useState(false);
  const [superheroes, setSuperheroes] = useState<TSuperhero[]>([]);
  const addSuperhero = async (superhero: TSuperhero) => {
    try {
      const res = await api().post("/superheroes", superhero);
      if (res.status === 201) {
        setSuperheroes(
          [...superheroes, res.data].sort(
            (a, b) => b.humilityScore - a.humilityScore
          )
        );
        toast.success("New superhero added successfully!");
      }
    } catch (error) {
      toast.error("Failed to add superhero. Please try again.");
    }
  };
  const getSuperheroes = async () => {
    try {
      setLoading(true);
      const res = await api().get("/superheroes");
      if (res.status === 200) {
        console.log("res.data", res.data);
        setSuperheroes(res.data);
        toast.success("Superheroes loaded successfully!");
      }
    } catch (error) {
      toast.error("Failed to load superheroes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    loading,
    superheroes,
    setLoading,
    addSuperhero,
    getSuperheroes,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

// Create a custom hook to use the context
export function useHome() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
}
