import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"


export default function Sobremim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        > 
            <h3 className={styles.subtitulo}>
                Olá, eu sou Lorena Santos!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto de Lorena Santos sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Minha jornada em tecnoligia começou bem cedo, des de pequena eu sempre fui apaixonada pela a area, cursei curso de informatica, e me formei em Redes de Computadores.
            </p>
            <p className={styles.paragrafo}>
                Atualmente estou cursando Desenvolvimento Front-End, confesso para vocês que estou adorando a estudar essa area encantadora. É fantastico ver as coisas criando vida. 
            </p>
            <p className={styles.paragrafo}>
                Se você está procurando uma profissional apaixonada, com uma perspectiva multidisciplinar e disposta a enfrentar novos desafios, estou ansiosa para colaborar e contribuir em seus projetos.
            </p>
        </PostModelo>
    )
}