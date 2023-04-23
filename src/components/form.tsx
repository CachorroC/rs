"use client";

import { SetStateAction, useState } from "react";

export default function Form() {
  const [
    answer, setAnswer
  ] = useState("");

  const [
    error, setError
  ] = useState(null);

  const [
    status, setStatus
  ] = useState("typing"); // 'typing', 's

  if (status === "success") {
    return <h1>{status}</h1>;
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    setStatus("submitting");

    try {
      await submitForm(answer);

      setStatus("success");
    }
    catch (err) {
      setStatus("typing");

      setError(null);
    }
  }

  function handleTextareaChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>{status}</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">la cagaste</p>}
      </form>
    </>
  );
}

function submitForm(answer: string) {
  // Pretend it's hitting the network.
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const shouldError = answer.toLowerCase() !== "lima";

      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
      else {
        resolve();
      }
    },
    1500);
  });
}
