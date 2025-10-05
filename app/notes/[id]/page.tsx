import { getSingleNote } from "@/lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

type Props = {
    params: Promise<{ id: string }>
}

const NoteDitails = async ({params}: Props) => {
    const { id } = await params;
    // const response = await getSingleNote(id)
   const queryClient = new QueryClient();
   await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id)
   })
    return <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient/>
    </HydrationBoundary> 
}

export default NoteDitails;