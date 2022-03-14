import React from "react";

export const Sum = ({ sum }) => {

    return (
        <div className={"sumContainer"}>
            <h1>
                Total: {sum}
            </h1>
        </div>)
}