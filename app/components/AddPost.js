"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "./Form";
import Swal from "sweetalert2";

export default function AddProducts() {
  const [data, setData] = useState({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id: lastId,
      userId: lastUserID,
    });
  };

  const router = useRouter();

  let [lastId, setLastId] = useState(0);
  let [lastUserID, setLastUserId] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.map((product) => {
          if (product.id > lastId) {
            lastId = product.id;
          }
          if (product.userId > lastUserID) {
            lastUserID = product.userId;
          }
        });

        setLastId(lastId + 1);

        setLastUserId(lastUserID + 1);
      });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    if (data.title.length > 0 && data.body.length > 0) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      Swal.fire({
        title: "Good job!",
        text: "You Created A Post",
        icon: "success",
      });
      router.push("/");
    } else {
      document.querySelectorAll(".form-label").forEach((label) => {
        if (document.getElementById(label.htmlFor).value.length == "0") {
          label.textContent = `Please, Write A Valid ${label.dataset.name}`;
          label.style.color = "red";
        }
      });
    }
  };

  return (
    <>
      <Form data={data} formSubmit={formSubmit} handleInput={handleInput} />
    </>
  );
}
