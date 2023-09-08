"use client";
import { signIn } from "next-auth/react";
import NavigationBar from "../../components/navigation";
import Credit from "../../components/credit";
import Button from "../../components/button";

export default function LoginPage() {
  return (<>
    <NavigationBar />
        <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl'>
            <section className="login">
            <div className='text-center'>
                <h1 className='text-4xl p-10'>Sign In</h1>
                <Button color='blue' onClick={() => signIn("github", { callbackUrl: "/plan" })}>
                    Sign in with Github
                </Button>
            </div>
            </section>
        </main>
    <Credit />
  </>);
}