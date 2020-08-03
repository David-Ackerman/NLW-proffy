import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem () {
    return(
        <article className="teacher-item" >
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/54602228?s=460&v=4" alt="David Santos" />
                        <div>
                            <strong>David</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Adora explodir coisas em laboratorio
                        <br /><br />
                        Da aula para diversos alunos ao redor do país.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;