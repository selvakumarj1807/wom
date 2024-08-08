import React from "react";

const Payment = () => {
  return (
    <div id="main" className="main">
      <div>
        <br /> 
        <hr></hr>
        <h3 style={{ textAlign: "center", fontSize: "16px" }}>Payment</h3>
        <hr></hr>
        <main>
          <div className="main_container">
            <div className="charts">
              <div className="charts_left">
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  Account Details
                </p>
                <hr />
                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "start",
                      }}
                    >
                      Bank Name
                    </label>
                    <p style={{ textAlign: "start" }}>ICICI Bank Ltd</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "start",
                      }}
                    >
                      Account Name
                    </label>
                    <p style={{ textAlign: "start" }}>
                      Cargo Solutions Pvt. Ltd.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "start",
                      }}
                    >
                      Account Number
                    </label>
                    <p style={{ textAlign: "start" }}>0165 0500 5212</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "start",
                      }}
                    >
                      IFSC Code
                    </label>
                    <p style={{ textAlign: "start" }}>ICICI0000165</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "start",
                      }}
                    >
                      Branch Name
                    </label>
                    <p style={{ textAlign: "start" }}>Dindigul</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        textAlign: "start",
                      }}
                    >
                      IFSC Code
                    </label>
                    <p style={{ textAlign: "start" }}>cargo@icici</p>
                  </div>
                </form>
              </div>
              <div className="charts_right">
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  Change Account Details
                </p>
                <hr />
                <form>
                  <form>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "end",
                        }}
                      >
                        Bank Name
                      </label>
                      <input
                        style={{
                          textAlign: "start",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        placeholder="ICICI Bank Ltd"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "end",
                        }}
                      >
                        Account Name
                      </label>
                      <input
                        style={{
                          textAlign: "start",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        placeholder="Cargo Solutions Pvt. Ltd."
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "end",
                        }}
                      >
                        Account Number
                      </label>
                      <input
                        style={{
                          textAlign: "start",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        placeholder="0165 0500 5212"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "start",
                        }}
                      >
                        IFSC Code
                      </label>
                      <input
                        style={{
                          textAlign: "start",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        placeholder="ICICI0000165"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "start",
                        }}
                      >
                        Branch Name
                      </label>
                      <input
                        style={{
                          textAlign: "start",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        placeholder="Dindigul"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "start",
                        }}
                      >
                        IFSC Code
                      </label>
                      <input
                        style={{
                          textAlign: "start",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        placeholder="cargo@icici"
                      />
                    </div>
                  </form>
                  <button
                    style={{
                      marginTop: "30px",
                      marginLeft: "40%",
                      backgroundColor: "#002D62",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "10px",
                      fontWeight: "480",
                    }}
                  >
                    Save Account Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payment;
