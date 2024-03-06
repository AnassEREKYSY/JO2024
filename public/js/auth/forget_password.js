const forget_password = async (event) => {
  try {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const res = await fetch("/api/admin/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.status == "fail" && data.message) {
      let error = document.createElement("div");
      error.classList.add(
        "bg-red-100",
        "border",
        "border-red-400",
        "text-red-700",
        "px-4",
        "py-3",
        "rounded",
        "relative",
        "mb-4"
      );
      error.innerHTML = data.message;

      if (!document.querySelector(".bg-red-100")) {
        document.querySelector("form").appendChild(error);
      }
    } else {
        let success = document.createElement("div");
        success.classList.add(
          "bg-green-100",
          "border",
          "border-green-400",
          "text-green-700",
          "px-4",
          "py-3",
          "rounded",
          "relative",
          "mb-4"
        );
        success.innerHTML = "Le code de réinitialisation a été envoyé à votre adresse e-mail";

        if (!document.querySelector(".bg-green-100")) {
          document.querySelector("form").appendChild(success);
        }



    }
  } catch (e) {
    console.log(e);
  }
};
