import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handlerAddUser(req, res) {
  console.log(process.env.DATABASE_URL);

  if (req.method !== 'POST') return res.status(405).json({ message: process.env.DATABASE_URL });

  try {
    const { name, email, company_name, industry } = req.body;

    const user = await prisma.m_users.create({
      data: {
        name,
        email,
        company_name,
        industry,
      },
    });
    console.log(user);
    res.status(201).json({ status: 'Success', message: 'Berhasil menambah data' });
  } catch (error) {
    res.status(400).json(error);
  }
}
