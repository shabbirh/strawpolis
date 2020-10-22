import {useRouter} from 'next/router';
import Poll from '../../components/Poll';
export default function Page() {
    const router = useRouter();
    const { slug } = router.query;

    return <Poll slug={slug}></Poll>
}