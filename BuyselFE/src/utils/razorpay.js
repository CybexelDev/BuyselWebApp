export const openRazorpay = async ({
  amount,
  name,
  description,
  user,
  onSuccess,
}) => {
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
    alert("Razorpay failed to load");
    return;
  }

  const options = {
    key: "rzp_test_Sm1sOIsqfa5zBr", 
    amount,
    currency: "INR",
    name,
    description,

    handler: function (response) {
      onSuccess && onSuccess(response);
    },

    prefill: {
      name: user?.name,
      email: user?.email,
      contact: user?.phone,
    },

    theme: {
      color: "#6ABD11",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};