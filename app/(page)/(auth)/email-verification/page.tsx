import { verifyEmail } from '@/lib/auth/verifyEmail';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { redirect } from 'next/navigation';

export default async function Page({searchParams}: {searchParams:{token:string}}) {
    const token = searchParams.token
    console.log(token)
    if (!token) {
        redirect('/not-found')
    }

    let response;

    try {
        response = await verifyEmail(token);
    } catch (err) {
        console.log("Error", err);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-md mx-3 shadow-lg">
                {response ? (
                    <h1 className="text-4xl font-bold mb-4">
                        Email verification success!
                    </h1>
                ) :   <h1 className="text-4xl font-bold mb-4">
                Email verification failed!
            </h1>}
       
                <PrimaryButton href="/" text="Go back to Home" />
            </div>
        </div>
    );
}
