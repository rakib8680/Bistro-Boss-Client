import { useQuery } from "@tanstack/react-query";
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/admin/${user?.email}`);
            return response.data.admin;
        }

    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin