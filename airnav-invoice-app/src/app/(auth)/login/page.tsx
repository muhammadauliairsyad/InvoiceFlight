import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold">Login AirNav Invoice</h1>
        <LoginForm />
      </div>
    </main>
  );
}
