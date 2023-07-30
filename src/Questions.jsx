import React, { useState } from "react";


function Questions({ question, options, i,callback }) {

    let [res, setres] = useState("")
    return (
        <div className="text-center    " style={{ width: "50%", border: "1px solid red", margin: "auto" }} >

            <h1>Question No : {i + 1}</h1>
            <p>
                {question}
            </p>

            {

                options.map((v, i) => {
                    return (
                        <div>
                            <input type="radio"
                                onChange={(e) => setres(e.target.value)}
                                name="select" id="" value={v} />
                            <b> {v}</b>
                        </div>
                    )

                })
            }
            <br />
            <button style={{ border: "1px solid red" }}
            onClick={()=>callback(res)}
            >Next</button>
            <br />



        </div>
    )
}

export default Questions