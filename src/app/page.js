"use client";
import { PDFDocument } from "pdf-lib";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pdf, setPdf] = useState("");
  async function fillForm() {
    const formUrl = "../public/untitled.pdf";
    const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();

    const nameField = form.getTextField("fırstName");
    const ageField = form.getTextField("lastName");

    nameField.setText("cenk");
    ageField.setText("24 years");

    const pdfBytes = await pdfDoc.save();
    // Create a Blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    setPdf(url); // Set the URL to state
  }
  useEffect(() => {
    fillForm();
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <a href={pdf} download='filled_form.pdf'>
        Click to Download
      </a>
    </main>
  );
}
