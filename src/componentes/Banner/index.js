import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/foto-perfil.jpeg'

export default function Banner () {
    return (
    <div className={styles.banner}>
        <div>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>

            <p className={styles.paragrafo}>
                Seja muito bem vindo ao meu espaço pessoal!! 
                Eu sou Lucas Cornelius... entusiasta e apaixonado por tecnologia, 
                atualmente, adentrando ao mercado de trabalho. 
                Fique a vontade!!!
            </p>
        </div>

        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido}
                alt='Circulo colorido estilizado'
                aria-hidden={true}
            />

            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt='Foto de Lucas Cornelius'
            />
        </div>
    </div>
    )
};