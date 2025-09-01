export default function Contact(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)"
        }}>
            <div className="contact-pg" style={{
                width: "100%",
                maxWidth: "420px",
                backgroundColor: "#181818",
                color: "#fff",
                margin: "40px 0",
                padding: "32px 28px",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.13)"
            }}>
                <h1 style={{
                    textAlign: "center",
                    marginBottom: "24px",
                    fontWeight: 700,
                    letterSpacing: "1px"
                }}>Contact Us</h1>
                <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="name" style={{ marginBottom: "6px", fontWeight: 500 }}>Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            style={{
                                padding: "10px",
                                border: "1px solid #444",
                                borderRadius: "5px",
                                background: "#232323",
                                color: "#fff",
                                outline: "none"
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="email" style={{ marginBottom: "6px", fontWeight: 500 }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            style={{
                                padding: "10px",
                                border: "1px solid #444",
                                borderRadius: "5px",
                                background: "#232323",
                                color: "#fff",
                                outline: "none"
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="comment" style={{ marginBottom: "6px", fontWeight: 500 }}>Comment</label>
                        <textarea
                            id="comment"
                            placeholder="Type your message..."
                            style={{
                                padding: "10px",
                                border: "1px solid #444",
                                borderRadius: "5px",
                                background: "#232323",
                                color: "#fff",
                                minHeight: "100px",
                                resize: "vertical",
                                outline: "none"
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: "linear-gradient(90deg, #020202ff 0%, #a4a4a4ff 100%)",
                            color: "#fff",
                            border: "none",
                            padding: "12px 0",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "1rem",
                            cursor: "pointer",
                            marginTop: "10px",
                            transition: "background 0.2s"
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}