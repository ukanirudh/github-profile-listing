import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
// import { parseLinkHeader } from '@web3-storage/parse-link-header'

const octokit = new Octokit({ auth: `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` });

const useUsersList = (): {users: Array<any>, loading: boolean, error: Error | null} => {
    const [users, setUsers] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        octokit.rest.users.list({
            per_page: 10
        }).then((data) => {
            // console.log("list", data);
            // console.log("parse(data.headers.link)", parseLinkHeader(data.headers.link));
            setUsers(data.data);
        }).catch((error) => {
            setError(error as Error);
        }).finally(() => {
            setLoading(false);
        });
    }, [])

    return { users, error, loading }
}

export default useUsersList;