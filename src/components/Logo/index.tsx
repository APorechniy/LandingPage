"use client"
import { LogoContainer, LogoText } from "./styled"
import Image from "next/image"
import LogoImage from "@/assets/logo.png"

export const Logo = () => (
    <LogoContainer onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
        <Image src={LogoImage} alt="logo" width="32" height="32" />
        <LogoText>Beautifier</LogoText>
    </LogoContainer>
)