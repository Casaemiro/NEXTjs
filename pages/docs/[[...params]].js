import { useRouter } from "next/router";
const ProjectDocs = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params);
    return ( 
        <>
            Project documents
        </>
     );
}
 
export default ProjectDocs;