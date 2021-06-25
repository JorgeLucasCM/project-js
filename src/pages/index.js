import Head from 'next/head'
import { useState } from 'react';

function Home() {
    return (
        <div>
            <Head>
                <title>To Do List</title>
            </Head>
            <div>
                <h1>TAREFAS A FAZER (TO DO APP)</h1>

                <div id='sub1'>Adicione texto dentro da caixa de texto para inserir novas atividades.</div><br/>
                <div id='sub2'>Clique no item para marcar a atividade como completada.</div><br/>
                <div id='sub3'>Clique na "X" da atividade para remover o item.</div><br/>

                <input type='text' name='new_task' id='new task' placeholder='Nova tarefa...'></input>
                <button>Adicionar</button>
            </div>
            <div className='div_tasks'>

            </div>
        </div>
        
    )
}

export default Home