import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";


export default function ProtectedRoute({ children }) {
    const { user, loadingUser } = useAuth()
    if (loadingUser) {
        return (
            <Flex justifyContent="center" alignItems="center" h="100vh" w="100vw">
                <Spinner
                    thickness='0.8rem'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#FFFF01'
                    w="10rem"
                    h="10rem"
                />
            </Flex>)
    }
    if (!user) return <Navigate to={"/login"} />

    return <><Outlet /></>
}