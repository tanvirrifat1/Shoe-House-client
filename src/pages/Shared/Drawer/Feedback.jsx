import Form from "../../../components/form/form";
import FormInput from "../../../components/form/formInput";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Feedback = () => {
  const { user } = useAuth();
  console.log(user);
  const onSubmit = async (data) => {
    const image = user?.photoURL;
    const name = user?.displayName;
    if (image) {
      data.image = image;
    }
    if (name) {
      data.name = name;
    }
    const updateUrl = "http://localhost:5000/api/v1/reviews/create-reviews";
    const updateResponse = await fetch(updateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (updateResponse) {
      Swal.fire({
        title: "FeedBack Successfully!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="py-10">
            <div className="">
              <Form submitHandler={onSubmit}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Your Feedback
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Please share the article or the text you like me to
                      review, and let me know what specific aspects you would
                      like feedback on
                    </p>
                    <div>
                      <Helmet>
                        <title> Feedback</title>
                      </Helmet>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3 w-full">
                        <div className="mt-2 w-full">
                          <FormInput
                            id=""
                            name="details"
                            type="text"
                            label="details"
                            placeholder="write your details"
                            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3 w-full">
                        <div className="mt-2 w-full">
                          <FormInput
                            id=""
                            name="rating"
                            type="number"
                            label="rating"
                            placeholder="write your rating"
                            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-outline w-72 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </Form>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
