import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import { artistsData } from "./songsData"
const prisma = new PrismaClient{}
const run = async