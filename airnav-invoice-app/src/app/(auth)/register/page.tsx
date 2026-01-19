import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold">Registrasi Akun</h1>
        <RegisterForm />
        <p className="text-sm text-slate-600">
          Sudah punya akun?{" "}
          <Link className="text-blue-600 hover:underline" href="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
