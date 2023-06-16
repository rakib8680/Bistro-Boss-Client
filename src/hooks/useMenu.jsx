import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const useMenu = () => {

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-delta-blush.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false);
    //         })
    // }, [])

    // new way with tanstack query 
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-server-delta-blush.vercel.app/menu')
            return res.json();
        }
    });



    return [menu, loading, refetch]
}


export default useMenu;