import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

function InvoicePage() {
  const invoiceRef = useRef(null);


  const location = useLocation();

  const paymentData = location.state?.paymentData;

  console.log(paymentData, "Payment Data 000000000000000000000000");


  const invoiceData = {
    invoiceNo: "INV-1001",
    customer: paymentData?.payment?.paid_by,
    plan: paymentData?.payment?.plan_type,
    paymentId: paymentData?.payment?.razorpay_payment_id,
    amount: paymentData?.payment?.amount_paid,
    date: paymentData?.payment?.paid_at?.split("T")[0],
    paidDate: paymentData?.payment?.paid_at?.split("T")[0],
    validity: paymentData?.payment?.plan_name,
    status: paymentData?.payment?.payment_status === "success" ? "Paid" : "Pending",
  };

  const downloadPDF = async () => {
    try {
      const element = invoiceRef.current;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save(`${invoiceData.invoiceNo}.pdf`);
    } catch (error) {
      console.log(error);
      toast("PDF generation failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "30px",
      }}
    >
      <div
        ref={invoiceRef}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow:
            "0 0 40px rgba(106,189,17,0.25)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background:
              "linear-gradient(90deg,#6ABD11,#84cc16)",
            color: "#fff",
            padding: "35px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "38px",
                  margin: 0,
                  fontWeight: "bold",
                }}
              >
                BuySel
              </h1>

              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Property Subscription Invoice
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <h2>{invoiceData.invoiceNo}</h2>
              <p>{invoiceData.date}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <div>
              <h4
                style={{
                  color: "#64748b",
                }}
              >
                CUSTOMER
              </h4>

              <h2>{invoiceData.customer}</h2>

              <p>
                Payment ID:
                {" "}
                {invoiceData.paymentId}
              </p>
            </div>

            <div>
              <span
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  padding: "10px 18px",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
              >
                {invoiceData.status}
              </span>
            </div>
          </div>

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#f1f5f9",}}>
                <th style={{padding: "15px", textAlign: "left",}}>Plan </th>
                <th style={{padding: "15px", textAlign: "left",}}>Validity </th>
                <th style={{ padding: "15px", textAlign: "right",}}>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "18px", borderBottom:"1px solid #e5e7eb",}}>
                  {invoiceData?.plan}
                </td>

                <td style={{ padding: "18px", borderBottom:"1px solid #e5e7eb",}}>
                  {invoiceData?.validity}
                </td>

                <td style={{ padding: "18px", textAlign: "right",borderBottom: "1px solid #e5e7eb",}}>
                  ₹{invoiceData?.amount}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Total */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "300px",
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "12px",
                }}
              >
                <span>Subtotal</span>
                <span>
                  ₹{invoiceData.amount}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "12px",
                }}
              >
                <span>GST</span>
                <span>₹0</span>
              </div>

              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginTop: "12px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                <span>Total</span>

                <span
                  style={{
                    color: "#6ABD11",
                  }}
                >
                  ₹{invoiceData.amount}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              color: "#64748b",
            }}
          >
            Thank you for choosing BuySel 

              <p  style={{ fontSize: "12px", marginTop: "8px", color: "#64748b" }}>
              This is a computer-generated invoice and does not
              require a signature.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <button
          onClick={downloadPDF}
          style={{
            background: "#6ABD11",
            color: "#fff",
            border: "none",
            padding: "14px 26px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Download Invoice PDF
        </button>

        <button
          onClick={() => window.print()}
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "14px 26px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Print Invoice
        </button>
           <button
          onClick={() => window.location.href = "/"}
          style={{
            
            color: "#000",
            border: "2px solid #000",
            padding: "14px 26px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default InvoicePage;