import { getSingleNote } from "@/lib/api";

type Props = {
    params: Promise<{ id: string }>
}

const NoteDitails = async ({params}: Props) => {
    const { id } = await params;
    const response = await getSingleNote(id)
    console.log(response)
    console.log('note id:', id)
    return <div>Note Details</div>
}

export default NoteDitails;