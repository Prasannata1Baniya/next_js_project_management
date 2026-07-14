import Link from "next/link";
import { signUp } from "@/actions/auth";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="text-center text-3xl font-bold text-gray-900">
       Create Account
      </h1>

    <p className="mt-2 text-center text-gray-500">
      Join your Project Management workspace
    </p>
       
        <form action={signUp} className="mt-8 space-y-5">
             <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700" >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700" >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
             autoComplete="new-password"
               required
              minLength={6}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-orange-500 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}