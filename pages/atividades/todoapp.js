import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/index.module.css';



function Home() {
    return (
        <div className={styles.fonte}>
            <Head>
                <title>To Do List</title>
            </Head>
            <body className={styles.corpo}>
                <h1 className={styles.title}>TAREFAS A FAZER (TO DO APP)</h1>

                <div id={styles.sub1}>Adicione texto dentro da caixa de texto para inserir novas atividades.</div><br/>
                <div id={styles.sub2}>Clique no item para marcar a atividade como completada.</div><br/>
                <div id={styles.sub3}>Clique na "X" da atividade para remover o item.</div><br/>

                <input type='text' name='new_task' id={styles.new_task} placeholder='Nova tarefa...' size='80' height='22' maxLength='52'></input>
                <button id={styles.addButton} onClick={criarDiv}>Adicionar</button>

            <div className='div_tasks'>

            </div>
                <criarDiv />
            </body>
            
            
        </div>
        
    )
}

function criarDiv(){
    const [divTask, setDivTask] = useState();
}

export default Home