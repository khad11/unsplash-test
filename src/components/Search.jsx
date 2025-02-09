import { Form } from "react-router-dom";
import { FormInput } from "./";

function Search() {
  return (
    <div>
      <Form method="post" className="max-w-96 w-full mx-auto flex gap-2 ">
        <FormInput />
        <button className="btn btn-primary md:hidden btn-sm "> search</button>
      </Form>
    </div>
  );
}

export default Search;
