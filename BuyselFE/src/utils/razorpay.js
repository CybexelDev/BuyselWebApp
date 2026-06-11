// export const openRazorpay = async ({
//   amount,
//   name,
//   description,
//   user,
//   onSuccess,
// }) => {
//   const loadScript = () =>
//     new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });

//   const isLoaded = await loadScript();

//   if (!isLoaded) {
//     alert("Razorpay failed to load");
//     return;
//   }

//   const options = {
//     key: "rzp_test_Sm1sOIsqfa5zBr", 
//     amount,
//     currency: "INR",
//     name,
//     description,
//     handler: function (response) {
//       onSuccess && onSuccess(response);
//     },

//     prefill: {
//       name: user?.name,
//       email: user?.email,
//       contact: user?.phone,
//     },

//     theme: {
//       color: "#6ABD11",
//     },
//   };

//   const rzp = new window.Razorpay(options);
//   rzp.open();
// };


import { toast } from "sonner";
import api from "../Api/axiosInstance";

export const openRazorpay = async ({
  name,
  description,
  user,
  plan_type,
  plan_id,
  onSuccess,
}) => {

  // ✅ LOAD RAZORPAY SCRIPT
  const loadScript = () =>
    new Promise((resolve) => {

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const isLoaded = await loadScript();

  if (!isLoaded) {
    toast("Razorpay SDK Failed to load");
    return;
  }

  try {

    // ✅ CREATE PAYMENT API
    const { data: order } = await api.post(
      `create-payment/`,
      {
        plan_type,
        plan_id,
      }
    );

    console.log(order, "CREATE PAYMENT RESPONSE");

    // ✅ CHECK RESPONSE
    if (!order?.payment?.razorpay_order_id) {
      toast("Order creation failed");
      return;
    }

    // ✅ OPEN RAZORPAY
    const options = {

      key: "rzp_test_Sm1sOIsqfa5zBr",

      amount: Number(order?.payment?.amount) * 100,

      currency: "INR",

      name: name || "BuySel",

      description: description || "Payment",

      order_id: order?.payment?.razorpay_order_id,

      handler: async function (response) {

        console.log(response, "PAYMENT SUCCESS RESPONSE");

        const paymentId = order?.payment?.payment_db_id

        try {

          // ✅ VERIFY PAYMENT
          const formData = new FormData();

          formData.append("plan_type", plan_type);
          formData.append("plan_id", plan_id);

          formData.append(
            "payment_id",
            paymentId
          );

          formData.append(
            "razorpay_order_id",
            response?.razorpay_order_id
          );

          formData.append(
            "razorpay_payment_id",
            response?.razorpay_payment_id
          );

          formData.append(
            "razorpay_signature",
            response?.razorpay_signature
          );

          formData.append(
            "mock",
            true
          );

          const verifyRes = await api.post(
            `verify-payment/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(
            verifyRes.data,
            "VERIFY PAYMENT RESPONSE"
          );

          toast("Payment Successful ✅");

          // ✅ CALLBACK
          onSuccess && onSuccess(verifyRes.data);


        } catch (error) {

          console.log(
            error?.response?.data || error,
            "VERIFY ERROR"
          );

          toast("Payment Verification Failed ❌");

        }
      },

      prefill: {
        name: user?.name || "",
        email: user?.email || "",
        contact: user?.phone || "",
      },

      theme: {
        color: "#6ABD11",
      },
    };

    console.log(options, "RAZORPAY OPTIONS");

    // ✅ OPEN PAYMENT WINDOW
    const rzp = new window.Razorpay(options);

    rzp.open();

    // ❌ PAYMENT FAILED
    rzp.on("payment.failed", function (response) {

      console.log(
        response.error,
        "PAYMENT FAILED"
      );

      toast(response.error.description);

    });

  } catch (error) {

    console.log(
      error?.response?.data || error,
      "CREATE PAYMENT ERROR"
    );

    toast("Something went wrong");
  }
};