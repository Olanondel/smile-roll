import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PhonePage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async () => {
    if (!phone) return alert("Enter phone");

    setLoading(true);
    try {
      // эмуляция запроса на сервер
      await new Promise(r => setTimeout(r, 1000));

      // сервер отправляет код на телефон
      console.log("Code sent to", phone);

      // переход на страницу ввода кода
      navigate("/verify", { state: { phone } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      width: "300px",
      margin: "0 auto",
      backgroundColor: "#f9f9f9"
    }}>
      <h2 style={{ margin: 0, fontSize: "18px", color: "#333" }}>Enter your phone</h2>

      <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="+1234567890"
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "100%",
          boxSizing: "border-box"
        }}
      />

      <button
        onClick={handleSendCode}
        disabled={loading}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: loading ? "#999" : "#007bff",
          color: "#fff",
          cursor: loading ? "not-allowed" : "pointer",
          width: "100%"
        }}
      >
        {loading ? "Sending..." : "Send code"}
      </button>
    </div>
  );
}

export default PhonePage;