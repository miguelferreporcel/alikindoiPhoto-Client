import { useNavigate } from "react-router-dom";

export function UnauthorizedPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section>
      <h1 className="text-white text-2xl flex-grow">Unauthorized</h1>
      <br />
      <p className="text-white text-2xl flex-grow">
        You do not have access to the requested page.
      </p>
      <div className="text-white text-2xl flex-grow">
        <button onClick={goBack}>Go Back</button>
      </div>
    </section>
  );
}
