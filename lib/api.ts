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

// axios.defaults.baseURL = "https://next-docs-api.onrender.com";
const api = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhc2hhc2F2ZW5rbzNAZ21haWwuY29tIiwiaWF0IjoxNzU4Njk0MDkwfQ.avJPPRBJ-gHzCG8Vt-xd04OlX1lKCCjR-mkwh2TekIY`
    }

})

const delay = (ms: number) => {new Promise((resolve) => setTimeout(resolve, ms))}

export const getNotes = async () => {
  await delay(2000)
  const res = await api.get<NoteListResponse>("/notes");
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
}