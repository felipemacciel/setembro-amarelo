import * as React from 'react';
import Refresh from '../src/icons/Refresh'
import Download from '../src/icons/Download'
import ChevroRight from '../src/icons/ChevroRight'
import Upload from '../src/icons/Upload'
import './styles/normalize.css';
import '././styles/cropper.css'
import '././styles/setembro.css'
import 'cropper';
import html2canvas from 'html2canvas'
import $ from 'jquery';

export default function App(): JSX.Element {

      const scripts = () => {
        function readURL(input : any) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e: any) {
                    $('.image_receiver').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
        function capture() {
          const element = document.querySelector(".download");
          if (element instanceof HTMLElement) {
            html2canvas(element, {
              allowTaint: true,
              useCORS: true,
            }).then(canvas => {
              const image = canvas.toDataURL('image/png');
              const link = document.createElement('a');
              link.setAttribute('download', 'meu-setembro-amarelo.png');
              link.setAttribute('href', image);
              link.click();
            }).catch(error => {
              console.error("Erro capturando elemento:", error);
            });
          } else {
            console.warn("Elemento com classe '.download' não encontrado. Não é possível capturar.");
          }
        }
        
        $('body').on('click', '.step__buttons__download', function () {
          capture();
        });
        

        $(function () {

            $('body').on('change', '.step__buttons__upload input', function () {
                readURL(this);
                $('.step-1').removeClass('active');
                $('.step-2').addClass('active');
                setTimeout(function () {
                    const $image = $('.image_receiver') as any;
                    $image.cropper({
                        aspectRatio: 1 / 1,
                        preview: '.result',
                    });
                }, 1000);
            });

            $('body').on('click', '.step__buttons__submit', function () {
                $('.step-2').removeClass('active');
                $('.step-3').addClass('active');
            });

            $('body').on('click', '.link_button', function () {
                window.location.reload();
            }); 
            
        });
    }
    React.useEffect(() => {
        scripts();
    }, [])


  return (
    <>
            <div className='body-event-month yellow'>
              <img className='body-event-month yellow' src={require("../src/Image/background-setembro-amarelo.png")} alt="" />
                <div className="step step-1 active">
                    <div>
                        <div className="step__title">Gerador de Apoio</div>
                        <div className="step__text">Com um gesto e poucos cliques você demonstra seu apoio e chama atenção para a
                            campanha Setembro Amarelo.</div>
                        <div className="step__buttons">
                            <label className="white_button step__buttons__upload">
                                <input type="file" />
                                <span>Escolher uma foto</span>
                                < Upload />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="step__media">
                            <img className='image-event-month' src={require("../src/Image/logo-setembro-amarelo.png")}  width="550"/>
                        </div>
                    </div>
                </div>
                <div className="step step-2">
                    <div>
                        <div className="step__title">Ajuste o enquadramento</div>
                        <div className="step__text">Redimensione a imagem para ficar centralizada ao seu rosto.</div>
                        <div className="step__buttons">
                            <button type="button" className="white_button step__buttons__submit">
                                <span>Gerar foto</span>
                                < ChevroRight />
                            </button>
                            <button type="button" className="link_button step__buttons__cancel">
                                <span>Cancelar</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="step__holder">
                            <div className="crop__holder">
                                <img src="" className="image_receiver" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step step-3">
                    <div>
                        <div className="step__title">Sua foto está pronta!</div>
                        <div className="step__text">Compartilhe nas redes sociais com a hashtag <b>#SetembroAmarelo</b></div>
                        <div className="step__buttons">
                            <button type="button" className="white_button step__buttons__download">
                                <span>Baixar imagem</span>
                                < Download />
                            </button>
                            <button type="button" className="link_button step__buttons__cancel">
                                < Refresh />
                                <span>Tentar novamente</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="step__holder">
                            <div className="download">
                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div>

                <div className='common-questions yellow'>
                <div className="event-month-content yellow">
            <div className="event-month-title yellow">PERGUNTAS FREQUENTES</div>
          </div>
          <div className="event-month-content yellow">
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">1 – O que é Setembro Amarelo? </summary>
              <p className="event-month-response yellow">Setembro Amarelo é uma campanha nacional no Brasil que visa conscientizar a população sobre a prevenção do suicídio, promovendo a saúde mental e o bem-estar.</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">2 – Quando começou o Setembro Amarelo? </summary>
              <p className="event-month-response yellow">A campanha teve início em 2015, promovida pela Associação Brasileira de Psiquiatria (ABP) em parceria com o Conselho Federal de Medicina (CFM).</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">3 – Por que o mês de setembro foi escolhido?</summary>
              <p className="event-month-response yellow" >O dia 10 de setembro é o Dia Mundial de Prevenção ao Suicídio, uma data promovida pela Organização Mundial da Saúde (OMS) desde 2003. Setembro foi escolhido para destacar essa data e ampliar as ações de conscientização.</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">4 – Qual é o símbolo do Setembro Amarelo?</summary>
              <p className="event-month-response yellow" >O símbolo é um laço amarelo, que representa a vida e a conscientização sobre a importância de discutir e prevenir o suicídio.</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">5 – Por que a cor amarela foi escolhida?</summary>
              <p className="event-month-response yellow" >A cor amarela foi escolhida porque é uma cor que simboliza a luz, a vida e a esperança. A campanha foi inspirada na história de Mike Emme, um jovem americano que cometeu suicídio aos 17 anos. Ele restaurou um carro Mustang amarelo antes de sua morte, e seus amigos e familiares começaram a usar fitas amarelas em sua memória.</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">6 – Quais são os principais objetivos do Setembro Amarelo? </summary>
                <p className="event-month-response yellow" >
                  <div>- Reduzir o estigma associado ao suicídio.</div>
                  <div>- Oferecer informações e recursos para prevenção do suicídio.</div>
                  <div>- Promover a discussão aberta sobre saúde mental.</div>
                  <div>- Encaminhar pessoas para serviços de apoio e tratamento adequado.</div>
                </p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">7 – Quais são alguns sinais de alerta de suicídio?</summary>
                <p className="event-month-response yellow" >
                    <div>- Mudanças drásticas no comportamento.</div>
                    <div>- Isolamento social.</div>
                    <div>- Expressão de sentimentos de desesperança ou desamparo.</div>
                    <div>- Falta de interesse em atividades que antes eram prazerosas.</div>
                    <div>- Falas sobre querer morrer ou se machucar.</div>
                </p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">8 – Como posso ajudar alguém que está pensando em suicídio?</summary>
              <p className="event-month-response yellow" >Você pode ajudar ouvindo sem julgar, oferecendo apoio emocional, encorajando a pessoa a procurar ajuda profissional e ficando atento a comportamentos de risco. Em emergências, acione os serviços de emergência.</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">9 – Quais são os recursos disponíveis para quem precisa de ajuda?</summary>
              <p className="event-month-response yellow" >No Brasil, existem serviços como o Centro de Valorização da Vida (CVV), que oferece apoio emocional 24 horas por dia através do telefone 188, além de chat e e-mail. Outros recursos incluem psicólogos, psiquiatras e serviços de saúde mental oferecidos pelo SUS.</p>
            </details>
            <details className="details-accordion yellow" >
              <summary className="event-month-question yellow">10 – O que posso fazer para promover o Setembro Amarelo na minha comunidade?</summary>
              <p className="event-month-response yellow" >Você pode organizar palestras, rodas de conversa, caminhadas e eventos de conscientização; distribuir materiais informativos; usar e compartilhar o laço amarelo; e promover discussões abertas sobre saúde mental em escolas, locais de trabalho e redes sociais.</p>
            </details>
          </div>

        </div>


            </div>
        </>
  );
}

