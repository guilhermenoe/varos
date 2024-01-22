// pages/api/newsletter.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { nome, email, celular } = req.body;

      res.status(200).json({ sucesso: true });
    } catch (erro) {
      console.error('Erro ao processar dados:', erro);
      res.status(500).json({ sucesso: false, erro: 'Erro interno no servidor' });
    }
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
