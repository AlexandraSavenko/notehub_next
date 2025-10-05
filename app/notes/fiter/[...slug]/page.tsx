import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

type Props = {
    params: Promise<{ slug: string[]}>
}
const NoteByCategory =  async ({params}: Props) => {
    const {slug } = await params;
console.log(slug)
    const category = slug[0] === 'all' ? undefined : slug[0];
    console.log(category)
    const response = await getNotes(category);

    return <div>
        <h1>Note List</h1>
        {response?.notes?.length > 0 && <NoteList notes={response.notes}/>}
    </div>
};
export default NoteByCategory;