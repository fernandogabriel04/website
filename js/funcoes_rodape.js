document.addEventListener('DOMContentLoaded',()=>{const rodapePadrao=document.querySelector('.p_rodape');if(rodapePadrao){const parametrosRodape=swJsonInput(rodapePadrao.querySelector('input.parametros_rodape'));const acessoFacilRodape=rodapePadrao.querySelector('.p_area_acesso_facil_rodape');if(acessoFacilRodape){acessoFacilRodape.querySelector('.p_cont_acesso_facil').classList.add(parametrosRodape.acesso_facil);if(parametrosRodape.acesso_facil==='dropdown'){acessoFacilRodape.querySelector('.p_cont_acesso_facil').classList.add('up')}
acessoFacilRodape.querySelector('.p_cont_acesso_facil').classList.add(parametrosRodape.abrir_clique?'abrir_clique':'abrir_hover');const parametrosAcessoFacil={exibicao_links:parametrosRodape.acesso_facil,...parametrosRodape}
acessoFacilRodape.querySelectorAll('.p_menu_acesso_facil').forEach((menu)=>{swAcessoFacil(menu,parametrosAcessoFacil,!1)})}
if(rodapePadrao.classList.contains('e1')){const conteudoEstrutura=document.createElement('div');conteudoEstrutura.innerHTML=`
            <div class="p_barra_rodape">
                <div class="p_cont_barra_rodape p_conteudo_interno p_cont"></div>
            </div>
            <div class="p_area_brasao_redes"></div>
            <div class="p_area_info"></div>
            <div class="p_area_newsletter"></div>`;if(rodapePadrao.querySelector('.p_area_acesso_facil_rodape')){conteudoEstrutura.querySelector('.p_cont_barra_rodape').append(rodapePadrao.querySelector('.p_area_acesso_facil_rodape'))}
if(rodapePadrao.querySelector('.p_brasao')){conteudoEstrutura.querySelector('.p_area_brasao_redes').append(rodapePadrao.querySelector('.p_brasao'))}
if(rodapePadrao.querySelector('.p_area_redes_sociais')){conteudoEstrutura.querySelector('.p_area_brasao_redes').append(rodapePadrao.querySelector('.p_area_redes_sociais'))}
if(rodapePadrao.querySelector('.p_newsletter')){conteudoEstrutura.querySelector('.p_area_newsletter').append(rodapePadrao.querySelector('.p_newsletter'))}
rodapePadrao.querySelectorAll('.p_item_rodape').forEach(item=>{if(!['sw_area_info_sistema','p_area_copyright'].some(classe=>item.classList.contains(classe))){conteudoEstrutura.querySelector('.p_area_info').append(item)}});if(conteudoEstrutura.querySelector('.p_cont_barra_rodape').firstElementChild){rodapePadrao.prepend(conteudoEstrutura.querySelector('.p_barra_rodape'))}
for(const estrutura of conteudoEstrutura.childNodes){if(estrutura.nodeType===1&&estrutura.querySelector('.p_item_rodape')){rodapePadrao.querySelector('.p_cont_rodape').append(estrutura)}}}else if(rodapePadrao.classList.contains('e2')){const conteudoEstrutura=document.createElement('div');conteudoEstrutura.innerHTML=`
            <div class="p_area_newsletter">
                <div class="p_cont_newsletter p_conteudo_interno p_cont"></div>
            </div>
            <div class="p_area_brasao_redes"></div>
            <div class="p_area_info"></div>`;if(rodapePadrao.querySelector('.p_newsletter')){conteudoEstrutura.querySelector('.p_cont_newsletter').append(rodapePadrao.querySelector('.p_newsletter'))}
if(rodapePadrao.querySelector('.p_brasao')){conteudoEstrutura.querySelector('.p_area_brasao_redes').append(rodapePadrao.querySelector('.p_brasao'))}
if(rodapePadrao.querySelector('.p_area_redes_sociais')){conteudoEstrutura.querySelector('.p_area_brasao_redes').append(rodapePadrao.querySelector('.p_area_redes_sociais'))}
rodapePadrao.querySelectorAll('.p_item_rodape').forEach(item=>{if(!['sw_area_info_sistema','p_area_copyright'].some(classe=>item.classList.contains(classe))){conteudoEstrutura.querySelector('.p_area_info').append(item)}});if(conteudoEstrutura.querySelector('.p_newsletter')&&conteudoEstrutura.querySelector('.p_newsletter').firstElementChild){rodapePadrao.prepend(conteudoEstrutura.querySelector('.p_area_newsletter'))}
for(const estrutura of conteudoEstrutura.childNodes){if(estrutura.nodeType===1&&estrutura.querySelector('.p_item_rodape')){rodapePadrao.querySelector('.p_cont_rodape').append(estrutura)}}}}})