import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface artikel {
    judul: string
    kategori: string
    tanggal: Date
    ringkasan: string
    penulis: number
}

export async function getArtikels() {
    try {
        const data = await prisma.articleDesa.findMany({
            include: {
                penulis: {
                    select: {
                        id: true,
                        nama: true,
                    }
                }
            }
        });
        if (!data || data.length === 0) {
            return null
        }
        return data
    } catch (error) {
        return {
            error: error
        }
    }
}

export async function createArtikel(data: artikel) {
    try {
        const createArtikel = await prisma.articleDesa.create({
            data: {
                judul: data.judul,
                kategori: data.kategori,
                tanggal: data.tanggal,
                ringkasan: data.ringkasan,
                penulis: {
                    connect: {
                        id: data.penulis
                    }
                }
            }
        })
        return createArtikel
    } catch (error) {
        console.error("Error creating article:", error)
        return {
            error: "Terjadi kesalahan saat membuat artikel."
        }
    }
}