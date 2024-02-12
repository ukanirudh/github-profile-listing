import { createBrowserRouter } from "react-router-dom";
import Listing from '../Users/Listing';
import UserDetails from "../Users/UserDetails";
import { BASE_API_LIST_URL } from "../constants";

export async function userLoader({ params }: any) {
    const userDetailsRes = await fetch(`${BASE_API_LIST_URL}/${params.userId}`);
    const userDetails = await userDetailsRes.json();
    return { userDetails };
}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Listing />,
    },
    {
        path: "user/:userId",
        loader: userLoader,
        element: <UserDetails />,
    }
]);
