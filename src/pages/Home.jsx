import { useActionData } from "react-router-dom";
import { Search } from "../components";

// rrd

// action funksiyasi
export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

function Home() {
  const searchParamsFromAction = useActionData();

  return (
    <div>
      <div className="mt-5">
        <h2>Home</h2>
        <Search />
      </div>
    </div>
  );
}

export default Home;
