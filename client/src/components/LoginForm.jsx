import { Link } from "react-router-dom";
import LoginLeftSide from "./LoginLeftSide";
import { ArrowLeftIcon } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full max-w-md animate-fade-in">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-slate-400
        hover:text-slate-700 text-sm mb-10 transition-colors"
        >
          <ArrowLeftIcon size={16} /> Back to portals
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
