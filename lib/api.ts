import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
// axios.defaults.baseURL = "https://next-docs-api.onrender.com";
const api = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhc2hhc2F2ZW5rbzNAZ21haWwuY29tIiwiaWF0IjoxNzU4Njk0MDkwfQ.avJPPRBJ-gHzCG8Vt-xd04OlX1lKCCjR-mkwh2TekIY`
    }

})

const delay = (ms: number) => {new Promise((resolve) => setTimeout(resolve, ms))}

export const getNotes = async (category: string | undefined) => {
  await delay(2000)
  console.log(category)
  const res = await api.get<NoteListResponse>("/notes", {
    params: {tag: category?.toUpperCase()}
  });
  console.log(res.data)
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
}

// export const getCategries = async () => {
//   const res = await axios<Category[]>('/categories');
//   return res.data;
// }