import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://young-coast-42098.herokuapp.com/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data?.role) {
                        setAdmin(true)
                        setAdminLoading(false)
                    }
                })
        }
    }, [user])

    return [admin, adminLoading]
}
export default useAdmin;