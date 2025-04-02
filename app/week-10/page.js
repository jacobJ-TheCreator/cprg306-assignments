"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main className="min-h-screen bg-pink-100 p-8 text-left flex flex-col items-start justify-start">
            {!user ? (
                <>
                    <h1 className="text-4xl font-bold text-purple-700 mb-6">Welcome to the Shopping List App</h1>
                    <button
                        onClick={gitHubSignIn}
                        className="bg-yellow-200 text-purple-800 px-6 py-3 rounded hover:bg-yellow-300 transition shadow"
                    >
                        Sign in with GitHub
                    </button>
                </>
            ) : (
                <>
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome, {user.displayName}!</h1>
                    <p className="mb-6 text-lg text-pink-600">({user.email})</p>
                    <Link
                        href="/week-10"
                        className="text-blue-500 underline text-lg hover:text-blue-700 mb-4"
                    >
                        Go to your Shopping List
                    </Link>
                    <button
                        onClick={firebaseSignOut}
                        className="mt-4 px-6 py-2 bg-pink-300 text-white rounded hover:bg-pink-400 shadow"
                    >
                        Log out
                    </button>
                </>
            )}
        </main>
    );
}
