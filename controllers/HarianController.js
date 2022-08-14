import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getHarian = async (req, res) => {
    try {
        const response = await prisma.harian.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getHarianById = async (req, res) => {
    try {
        const response = await prisma.harian.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createHarian = async (req, res) => {
    const {judul, catat} = req.body;
    try {
        const harian = await prisma.harian.create({
            data:{
                judul: judul,
                catat: catat
            }
        });
        res.status(201).json(harian);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateHarian = async (req, res) => {
    const {judul, catat} = req.body;
    try {
        const harian = await prisma.harian.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                judul: judul,
                catat: catat
            }
        });
        res.status(200).json(harian);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteHarian = async (req, res) => {
    const {judul, catat} = req.body;
    try {
        const harian = await prisma.harian.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(harian);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}