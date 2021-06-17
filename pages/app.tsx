import { useEffect } from 'react';
export default function Redirect() {
    useEffect(() => {
        window.location.assign('https://install.appcenter.ms/orgs/pyram3d/apps/pyram3d/distribution_groups/beta%20testers')
    })
    return (
        <></>
    );
}