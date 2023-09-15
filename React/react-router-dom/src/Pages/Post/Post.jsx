import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function Posts() {

  const params = useParams();  // muito utilizadfo para Api's
  console.log(params);   // Estrutura de roteamento!!
  const { id } = params; 
  const [qs] = useSearchParams();

  return(
    <>
      <h1>Posts {`param ${id}`} {`QS : ${qs.get('segunda')}`} </h1>
    </>
  )
};  