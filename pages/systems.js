import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Systems() {

    const handleBack = () => {
        window.close();
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>IoT</title>
                <meta name="description" content="Trabalho realizado para disciplina de Sistemas Operacionais" />
                <link rel="icon" href="/favicon.png" type="image/x-icon" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    SOs <span className={styles.span}>IoT</span>
                </h1>
                <p>Escolha um SO para IoT e seja direcionado para a página do projeto para download ou mais informações.</p>

                <div className={styles.grid}>
                    <a href="http://www.tinyos.net" target="_blank" className={styles.card}>
                        <h2>TinyOS &rarr;</h2>
                        <p>TinyOS é um sistema operacional de código aberto projetado para dispositivos
                        sem fio de baixa potência.
                        </p>
                    </a>

                    <a href="https://manjaro.org" target="_blank" className={styles.card}>
                        <h2>Manjaro Plasma &rarr;</h2>
                        <p>É um sistema acessível, amigável e de código aberto. Meio-termo perfeito entre
                        desempenho e controle.
                        </p>
                    </a>

                    <a href="https://archlinux.org" target="_blank" className={styles.card}>
                        <h2>Arch Linux &rarr;</h2>
                        <p>Arch Linux é uma distribuição linux leve e flexível que tenta se manter simples
                        incorporando os novos recursos.
                        </p>
                    </a>

                    <a href="https://www.riot-os.org" target="_blank" className={styles.card}>
                        <h2>RIOT OS &rarr;</h2>
                        <p>É o SO amigável para IoT. Criado originalmente para redes de sensores wireless
                        tem um consumo baixo de RAM e flash.
                        </p>
                    </a>

                    <a href="http://www.contiki-os.org" target="_blank" className={styles.card}>
                        <h2>CONTIKI &rarr;</h2>
                        <p>Projetado para rodar em sistemas com baixíssimo consumo de energia, ele provê
                        alguns mecanismos interessantes para estimar e analisar o consumo de energia da aplicação.
                        </p>
                    </a>

                    <a href="https://nuttx.apache.org" target="_blank" className={styles.card}>
                        <h2>NUTTX &rarr;</h2>
                        <p>É um sistema operacional de tempo real de código aberto para microcontroladores com uma
                        ênfase em compatibilidade com padrões de mercado (POSIX e ANSI) e baixo consumo de recursos
                        (CPU, RAM e flash).
                        </p>
                    </a>

                    <a href="https://www.zephyrproject.org" target="_blank" className={styles.card}>
                        <h2>ZEPHYR &rarr;</h2>
                        <p>É um sistema operacional de tempo real para dispositivos de IoT com foco em conectividade,
                        modularidade e segurança.
                        </p>
                    </a>

                    <a href="https://developer.android.com/things/" target="_blank" className={styles.card}>
                        <h2>BRILLO &rarr;</h2>
                        <p>É uma plataforma de IoT que inclui uma versão reduzida do Android e um protocolo chamado
                        Weave para conexão entre os dispositivos IoT.
                        </p>
                    </a>
                    <a href="https://os.mbed.com" target="_blank" className={styles.card}>
                        <h2>MBED OS &rarr;</h2>
                        <p>É um sistema operacional modular, seguro e com foco em conectividade. É o único dessa lista
                        que não é multithreads.
                        </p>
                    </a>
                    <a href="https://www.tizen.org" target="_blank" className={styles.card}>
                        <h2>Tizen &rarr;</h2>
                        <p>É uma pilha de Linux Embarcado da Samsung que alimenta grande parte dos dispositivos de consumidor
                        e IoT da Samsung.
                        </p>
                    </a>
                    <a href="https://ubuntu.com/internet-of-things" target="_blank" className={styles.card}>
                        <h2>Ubuntu Core &rarr;</h2>
                        <p>O Ubuntu Core é uma versão incorporada do Ubuntu que roda em sistemas de recursos mínimos.</p>
                    </a>
                    <a href="https://www.yoctoproject.org" target="_blank" className={styles.card}>
                        <h2>Yocto &rarr;</h2>
                        <p>O Yocto não é, por si só, uma distribuição, mas um projeto de código aberto que ajuda a criar
                        distribuições personalizadas do Linux para sistemas embarcados e IoT.
                        </p>
                    </a>
                </div>
            </main>
            <span className={styles.back} onClick={handleBack}>voltar</span>
        </div>
    )
}
