// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";




// CONTROLAR EL TIPO DE RESPUESTA ES IMPORTANTE - PARA DEJAR EL OBJETO CON SUS PROPIEDADES QUE VEMOS EN LA RESPUESTA CREAMOS UN TYPE O INTERFACE

interface Data {
  name:string;
  edad: number;
  ok: boolean;

}

export default function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe', edad: 2, ok:false })
}
