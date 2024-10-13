import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.amount = 500;
    data.currency = "BDT";
    // console.log(data);
    axios.post("http://localhost:5000/create-payment", data).then((res) => {
      //  window.location.replace(res.data.url);
      const redirectUrl = res.data.url;
      if (redirectUrl) {
        window.open(redirectUrl, "_blank");
      }
    });
  };
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Payments Details</h2>
        <p className="text-sm">
          Complete your order by providing your payment details.
        </p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              {...register("email", {
                required: "Please enter your email address",
              })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Card Holder</span>
            </div>
            <input
              {...register("name", { required: "Please enter your" })}
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
            />
          </label>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <div className="flex gap-4 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Cards Details</span>
              </div>
              <input
                {...register("cardNumber", {
                  required: "Please enter your card number",
                })}
                type="text"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="input input-bordered w-full"
              />
            </label>
            {errors.cardNumber && (
              <p className="text-red-500">{errors.cardNumber.message}</p>
            )}
            <input
              {...register("expiry", {
                required: "Please enter your expiry date",
              })}
              type="text"
              placeholder="MM/YY"
              className="input input-bordered w-full"
            />
            {errors.expiry && (
              <p className="text-red-500">{errors.expiry.message}</p>
            )}
            <input
              {...register("cvc", { required: "Please enter your CVC" })}
              type="text"
              placeholder="CVC"
              className="input input-bordered w-full"
            />
            {errors.cvc && <p className="text-red-500">{errors.cvc.message}</p>}
          </div>
          <div className="flex gap-4 items-end">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Billing Address</span>
              </div>
              <input
                {...register("address", {
                  required: "Please enter your address",
                })}
                type="text"
                placeholder="Street Address"
                className="input input-bordered w-full"
              />
            </label>
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
            <input
              {...register("city", { required: "Please enter your city" })}
              type="text"
              placeholder="state"
              className="input input-bordered w-full"
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
            <input
              {...register("postalCode", {
                required: "Please enter your postal code",
              })}
              type="number"
              placeholder="ZIP"
              className="input input-bordered w-full"
            />
            {errors.postalCode && (
              <p className="text-red-500">{errors.postalCode.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="text-xl font-semibold btn w-full my-6"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
