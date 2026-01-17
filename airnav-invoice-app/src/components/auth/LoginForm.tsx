export default function LoginForm() {
  return (
    <form className="space-y-4 rounded bg-white p-6 shadow">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="mt-1 w-full rounded border px-3 py-2" type="email" name="email" />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input className="mt-1 w-full rounded border px-3 py-2" type="password" name="password" />
      </div>
      <button className="w-full rounded bg-slate-900 px-4 py-2 text-white" type="submit">
        Login
      </button>
    </form>
  );
}
