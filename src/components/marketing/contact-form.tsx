"use client";

import { Mail, Send, User } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setErrorMessage(
          result.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[21rem] flex-col items-center justify-center rounded-[26px] border border-slate-200 bg-white p-7 text-center">
        <p className="text-navy text-lg font-semibold">Message sent.</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Thanks for reaching out — we&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glow-border flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-7"
    >
      <div className="grid gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="text-navy text-sm font-semibold"
          >
            Name
          </label>
          <div className="relative mt-2">
            <User
              aria-hidden="true"
              size={17}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className="focus-visible:ring-cyan-500 text-navy w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-4 pl-11 text-sm outline-none focus-visible:ring-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="text-navy text-sm font-semibold"
          >
            Email
          </label>
          <div className="relative mt-2">
            <Mail
              aria-hidden="true"
              size={17}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="focus-visible:ring-cyan-500 text-navy w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-4 pl-11 text-sm outline-none focus-visible:ring-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <label
          htmlFor="contact-message"
          className="text-navy text-sm font-semibold"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="How can we help?"
          className="focus-visible:ring-cyan-500 text-navy mt-2 w-full min-h-28 flex-1 resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="default"
        disabled={status === "sending"}
        className="mt-5 w-full self-start sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        <Send aria-hidden="true" size={16} />
      </Button>
    </form>
  );
}
